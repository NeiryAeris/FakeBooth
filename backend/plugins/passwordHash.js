// plugins/passwordHash.js
import { genSalt, hash as _hash, compare } from "bcryptjs";

function passwordHashPlugin(schema, options = {}) {
  const {
    path = "password",
    rounds = 12,
    select = false,
    addCompareMethod = true,
  } = options;

  // Make sure password is hidden by default
  if (schema.path(path) && select === false) {
    const pwdPath = schema.path(path);
    if (pwdPath && pwdPath.options && pwdPath.options.select !== false) {
      pwdPath.options.select = false;
    }
  }

  async function hash(plain) {
    const salt = await genSalt(rounds);
    return _hash(plain, salt);
  }

  // Save hook
  schema.pre("save", async function (next) {
    if (!this.isModified(path)) return next();
    this[path] = await hash(this[path]);
    next();
  });

  // Update hooks
  async function onUpdate(next) {
    const update = this.getUpdate() || {};
    const candidate =
      update[path] ||
      (update.$set && update.$set[path]) ||
      (update.$setOnInsert && update.$setOnInsert[path]);

    if (!candidate) return next();

    const hashed = await hash(candidate);
    if (update[path]) update[path] = hashed;
    if (update.$set && update.$set[path]) update.$set[path] = hashed;
    if (update.$setOnInsert && update.$setOnInsert[path])
      update.$setOnInsert[path] = hashed;

    next();
  }

  schema.pre("findOneAndUpdate", onUpdate);
  schema.pre("updateOne", onUpdate);
  schema.pre("updateMany", onUpdate);

  // insertMany hook
  schema.pre("insertMany", async function (next, docs) {
    if (!Array.isArray(docs)) return next();
    await Promise.all(
      docs.map(async (d) => {
        if (typeof d[path] === "string") d[path] = await hash(d[path]);
      })
    );
    next();
  });

  // Add comparePassword helper
  if (addCompareMethod) {
    schema.methods.comparePassword = function (candidate) {
      return compare(candidate, this[path]);
    };
  }
}

export default { passwordHashPlugin };
