import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black mx-auto sm-container">
      <div className="border border-[#ffffff80] p-10 py-16 bg-zinc-900 shadow-lg shadow-[#ffffff30]">
        <h1 className="text-3xl mb-8 text-center text-white font-semibold tracking-wide">
          Login
        </h1>

        <form onSubmit={submithandler} className="flex flex-col gap-5 text-white">
          <label className="flex flex-col">
            <span className="mb-2 text-sm font-medium">Email</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              required
              className="border border-white bg-transparent px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder:text-gray-400 w-80 sm:w-96"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-2 text-sm font-medium">Password</span>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter your password"
              required
              className="border border-white bg-transparent px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white placeholder:text-gray-400 w-80 sm:w-96"
            />
          </label>

          <button
            type="submit"
            className="mt-6 font-semibold py-2 border border-white rounded-md hover:bg-white hover:text-black hover:shadow-md transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
