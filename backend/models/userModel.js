// backend/models/userModel.js
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, required: true, trim: true, unique: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email"],
    },

    role: { type: String, enum: ["user", "admin"], default: "user" },
    status: { type: String, enum: ["active", "inactive", "banned"], default: "active" },

    password: { type: String, required: true, minlength: 8, select: false },

    cartData: { type: Object, default: {} },

    // Optional reset fields (unused for now, safe to keep)
    passwordResetTokenHash: { type: String, select: false },
    passwordResetExpires: { type: Date, select: false },
  },
  {
    collection: "users",
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (_doc, ret) => {
        delete ret.password;
        delete ret.passwordResetTokenHash;
        delete ret.passwordResetExpires;
        return ret;
      },
    },
  }
);

// Indexes
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ username: 1 }, { unique: true });

// DEV ONLY compare (plain text)
userSchema.methods.comparePasswordPlain = function (candidate) {
  // because password is select:false, remember to .select('+password') when querying
  return candidate === this.password;
};

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
