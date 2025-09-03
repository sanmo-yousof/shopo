
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import image from "@/asset/registerImages/register.png"
import Image from "next/image";
import Discount from "@/components/shopParts/discount";
import { Button } from "@/components/ui/button";
import google from "@/asset/loginImages/google.png"

const Login = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl flex gap-6 py-12  flex-col md:flex-row mx-auto items-center px-4 ">
        <div className="w-full py-8 px-6 lg:px-12 rounded-md border bg-white md:w-1/2">
          <h2 className="text-2xl md:text-3xl text-center font-semibold">
            Log In
          </h2>

          <form className="pt-6" action="">
            
            
            <div className="text-xs flex flex-col gap-1 mt-4">
              <label htmlFor="email" className="text-gray-600">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="outline-0 border p-3"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="text-xs flex flex-col gap-1 mt-4">
              <label htmlFor="pass" className="text-gray-600">
                Password*
              </label>
              <input
                id="pass"
                type="password"
                className="outline-0 border p-3"
                placeholder="Enter Your Password"
              />
            </div>

            
            <div className="flex my-8 text-xs md:text-sm justify-between items-center">
              <div className=" text-gray-500 flex items-center gap-2">
              <input id="term" type="checkbox" />
              <label htmlFor="term">
                Remember Me
              </label>
            </div>
            <div>
              <Link href={"#"} className="text-blue-500">Forgot Password</Link>
            </div>
            </div>
            <div>
              <input
                type="submit"
                value={"Create Account"}
                className="bg-black text-sm text-white w-full py-3"
              />
            </div>

            <div className="mt-4">
              <Button className="w-full  border bg-gray-100" size="lg">
                <div className="flex gap-2 items-center text-gray-700">
                  <Image
                  src={google}
                  alt="google"
                  quality={100}
                  className="w-8"/>
                  <span className="text-sm">Sign In with Google</span>
                </div>
              </Button>
            </div>

            <div className="mt-4 flex text-xs md:text-sm items-center  text-gray-500  gap-2">
              <p className="text-gray-400 ">Don't have an Account?</p>
              <Link className="text-black" href={"/register"}>Sign up free</Link>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <Image src={image} alt="login" className="w-full" />
        </div>
      </div>
      <Discount />
    </div>
  );
};
export default Login;
