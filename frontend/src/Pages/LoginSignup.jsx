import React, { useState } from "react";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({ username: "", password: "", email: "" });

  const changeHandler = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const login = async () => {
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",            // was application/form-data
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((d) => (responseData = d));

    if (responseData?.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData?.errors || "Login failed");
    }
  };

  const signup = async () => {
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",            // was application/form-data
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((d) => (responseData = d));

    if (responseData?.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData?.errors || "Signup failed");
    }
  };

  return (
    <div
      className="
        w-full h-[80vh] bg-[#09091f]
        pt-[100px]
        max-[1280px]:pt-[50px]
      "
    >
      <div
        className="
          mx-auto pb-3 bg-[#000f2e] text-[#fce5cd]
          w-[580px] h-auto p-[40px] px-[60px]
          max-[1280px]:w-auto max-[1280px]:max-w-[500px] max-[1280px]:max-h-[500px]
          max-[800px]:p-[20px] max-[800px]:px-[30px]
        "
      >
        <h1 className="my-5 max-[1280px]:my-2 max-[800px]:text-[24px]">{state}</h1>

        <div className="flex flex-col gap-[29px] mt-[30px] max-[1280px]:gap-5 max-[1280px]:mt-5">
          {state === "Sign Up" && (
            <input
              type="text"
              placeholder="Your Name"
              name="username"
              value={formData.username}
              onChange={changeHandler}
              className="
                h-[72px] w-full pl-5 border border-[#c9c9c9] bg-[#000f2e] outline-none
                text-[#5c5c5c] text-[18px]
                max-[1280px]:h-[65px] max-[1280px]:w-[93%]
                max-[800px]:h-[50px]
              "
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            className="
              h-[72px] w-full pl-5 border border-[#c9c9c9] bg-[#000f2e] outline-none
              text-[#5c5c5c] text-[18px]
              max-[1280px]:h-[65px] max-[1280px]:w-[93%]
              max-[800px]:h-[50px]
            "
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            className="
              h-[72px] w-full pl-5 border border-[#c9c9c9] bg-[#000f2e] outline-none
              text-[#5c5c5c] text-[18px]
              max-[1280px]:h-[65px] max-[1280px]:w-[93%]
              max-[800px]:h-[50px]
            "
          />
        </div>

        <button
          onClick={() => (state === "Login" ? login() : signup())}
          className="
            w-full h-[72px] text-white bg-[#ff4141] mt-[30px] border-0
            text-[24px] font-medium cursor-pointer
            max-[1280px]:w-full
            max-[800px]:h-[50px] max-[800px]:text-[16px]
            hover:bg-red-600 transition
          "
        >
          Continue
        </button>

        {state === "Sign Up" ? (
          <p className="mt-5 text-[#5c5c5c] text-[18px] font-medium max-[1280px]:text-[16px]">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-[#ff4141] font-semibold cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="mt-5 text-[#5c5c5c] text-[18px] font-medium max-[1280px]:text-[16px]">
            Create an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-[#ff4141] font-semibold cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}

        <div
          className="
            flex items-center mt-[25px] gap-5 text-[#5c5c5c] text-[18px] font-medium
            max-[1280px]:text-[14px] max-[1280px]:gap-[10px]
          "
        >
          <input type="checkbox" />
          <p>By continuing i agree with the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
