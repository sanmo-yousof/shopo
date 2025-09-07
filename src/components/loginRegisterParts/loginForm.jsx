"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import google from "@/asset/loginImages/google.png";
import Image from "next/image";

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="w-full py-8 px-6 max-w-[500px] lg:px-12 rounded-md border bg-white ">
      <h2 className="text-2xl md:text-3xl text-center font-semibold">Log In</h2>
      <form className="pt-6" onSubmit={handleLogin}>
        <div className="text-xs flex flex-col gap-1 mt-4">
          <label htmlFor="email" className="text-gray-600">
            Email*
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="outline-0 border rounded-md p-3"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="text-xs flex flex-col gap-1 mt-4">
          <label htmlFor="pass" className="text-gray-600">
            Password*
          </label>
          <input
            id="pass"
            type="password"
            name="password"
            className="outline-0 border rounded-md p-3"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div className="flex my-6 text-xs md:text-sm justify-between items-center">
          <div className=" text-gray-500  flex items-center gap-2">
            <input className="cursor-pointer" id="term" type="checkbox" />
            <label className="cursor-pointer" htmlFor="term">
              Remember Me
            </label>
          </div>
          <div>
            <Link href={"#"} className="text-blue-500">
              Forgot Password
            </Link>
          </div>
        </div>
        <div>
          <input
            type="submit"
            value={"Create Account"}
            className="bg-[#1867d6] rounded-md cursor-pointer text-sm text-white w-full py-3"
          />
        </div>
        <div className="mt-4">
          <Button className="w-full py-5 rounded-md  border bg-gray-100">
            <div className="flex gap-2 items-center text-gray-700">
              <Image src={google} alt="google" quality={100} className="w-6" />
              <span className="text-sm">Sign In with Google</span>
            </div>
          </Button>
        </div>
        <div className="mt-4 flex text-xs md:text-sm items-center   gap-2">
          <p className="text-gray-600 ">Don't have an Account?</p>
          <Link className="text-black" href={"/register"}>
            Sign up free
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
