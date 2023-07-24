"use client";
import { signIn } from "next-auth/react";
import React from "react";

const SignIn = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-2">
      <div className="flex flex-col justify-center space-y-4 items-center  rounded-md p-8  sm:w-80 w-full  bg-white drop-shadow-lg">
        <input
          type="text"
          className="focus:outline-none px-4 py-3 w-full text-black rounded-lg bg-slate-300/20 "
          placeholder="user name"
        />
        <input
          type="password"
          className="focus:outline-none px-4 py-3 w-full text-black rounded-lg  bg-slate-300/20  "
          placeholder="password"
        />
        <button
          className="bg-transparent hover:bg-black hover:text-white border border-black rounded w-full py-2"
          onClick={() =>
            signIn("credentials", {
              callbackUrl: "/",
            })
          }
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
