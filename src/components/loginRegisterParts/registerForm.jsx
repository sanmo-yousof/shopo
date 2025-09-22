"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const router = useRouter()

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.fname.value;
    const lastName = form.lname.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const zipCode = form.postcode.value;

    const user = {
      firstName,
      lastName,
      email,
      phone,
      country,
      address,
      city,
      zipCode,
    };

    console.log(user)

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Account Created!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      router.push("/dashboard"); 
    });
    
  };

  return (
    <div className="w-full py-8 lg:px-12 px-6 border rounded-md bg-white md:w-1/2">
      <h2 className="text-2xl md:text-3xl text-center font-semibold">
        Create Account
      </h2>

      <form onSubmit={handleRegister} className="pt-6" action="">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="text-xs w-full sm:w-1/2 flex flex-col gap-1">
            <label className="text-gray-600" htmlFor="fname">
              First Name*
            </label>
            <input
              id="fname"
              type="text"
              name="fname"
              className="outline-0 rounded-md border p-3"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="text-xs w-full sm:w-1/2 flex flex-col gap-1">
            <label className="text-gray-600" htmlFor="lname">
              Last Name*
            </label>
            <input
              type="text"
              name="lname"
              id="lname"
              className="outline-0 border rounded-md  p-3"
              placeholder="Enter Your Last Name"
              required
            />
          </div>
        </div>
        <div className="flex flex-col mt-4  sm:flex-row gap-4">
          <div className="text-xs w-full sm:w-1/2 flex flex-col gap-1">
            <label className="text-gray-600" htmlFor="email">
              Email Address*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="outline-0 border rounded-md p-3"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="text-xs w-full sm:w-1/2 flex flex-col gap-1">
            <label className="text-gray-600" htmlFor="phone">
              Phone*
            </label>
            <input
              name="phone"
              type="text"
              id="phone"
              className="outline-0 rounded-md border p-3"
              placeholder="Enter Your Phone"
              required
            />
          </div>
        </div>
        <div className="text-xs flex flex-col gap-1 mt-4">
          <label htmlFor="country" className="text-gray-600">
            Country
          </label>
          <Select onValueChange={setCountry}>
            <SelectTrigger className="w-full  text-xs  shadow-none  py-5">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bangladesh">Bangladesh</SelectItem>
              <SelectItem value="india">India</SelectItem>
              <SelectItem value="usa">USA</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="text-xs flex flex-col gap-1 mt-4">
          <label htmlFor="address" className="text-gray-600">
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            className="outline-0 rounded-md border p-3"
            placeholder="Enter Your address"
            required
          />
        </div>

        <div className="flex flex-col mt-4  sm:flex-row gap-4">
          <div className="text-xs w-full sm:w-1/2 flex flex-col gap-1">
            <label className="text-gray-600" htmlFor="city">
              Town / City*
            </label>
            <Select onValueChange={setCity}>
              <SelectTrigger className="w-full text-xs rounded-md outline-0 shadow-none border py-5">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="miyami">Miyami Town</SelectItem>
                <SelectItem value="tokyo">Tokyo</SelectItem>
                <SelectItem value="osaka">Osaka</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="text-xs w-full sm:w-1/2 flex flex-col gap-1">
            <label className="text-gray-600" htmlFor="postcode">
              Postcode / Zip*
            </label>
            <input
              type="text"
              name="postcode"
              id="postcode"
              className="outline-0 rounded-md border p-3"
              placeholder="000000"
              required
            />
          </div>
        </div>
        <div className="my-6 text-gray-500 flex text-xs md:text-sm  items-center gap-2">
          <input
            className="cursor-pointer"
            id="term"
            type="checkbox"
            required
          />
          <label className="cursor-pointer" htmlFor="term">
            I agree allterms and condition ShopO.
          </label>
        </div>
        <div>
          <input
            type="submit"
            value={"Create Account"}
            className="bg-primary rounded-md cursor-pointer text-sm text-white w-full py-3"
          />
        </div>

        <div className="mt-4 flex text-xs md:text-sm items-center    gap-2">
          <p className="text-gray-600">Already have an Account?</p>
          <Link className="text-black" href={"/login"}>
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
};
export default RegisterForm;
