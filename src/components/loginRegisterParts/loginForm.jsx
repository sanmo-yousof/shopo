"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import google from "@/asset/loginImages/google.png";
import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // ✅ Success toast
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Success!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        router.push(redirect);
      });
    } catch (err) {
      setError("Something went wrong. Try again!");
    }
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
            defaultValue="test@test.com"
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
            defaultValue="123456"
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
            <Link href={"#"} className="text-primary">
              Forgot Password
            </Link>
          </div>
        </div>
        {error && <p className="text-xs md:text-sm text-red-500">{error}</p>}
        <div>
          <input
            type="submit"
            value={"Log In"}
            className="bg-primary rounded-md cursor-pointer text-sm text-white w-full py-3"
          />
        </div>
      </form>
      <div className="mt-4">
        <Button className="w-full py-5 rounded-md  border bg-gray-100">
          <div className="flex gap-2 items-center text-gray-700">
            <Image src={google} alt="google" quality={100} className="w-6" />
            <span className="text-sm">Sign In with Google</span>
          </div>
        </Button>
      </div>
      <div className="mt-4 flex text-xs md:text-sm items-center gap-2">
        <p className="text-gray-600 ">Don't have an Account?</p>
        <Link className="text-black" href={"/register"}>
          Sign up free
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
