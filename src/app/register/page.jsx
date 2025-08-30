import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import Link from "next/link";
import image from "@/asset/registerImages/register.png"
import Image from "next/image";
import Discount from "@/components/shopParts/discount";



const Register = () => {
  return (
    
      <div className=" bg-gray-100 ">
        <div className="max-w-7xl flex gap-6 py-12  flex-col md:flex-row mx-auto items-center px-2 ">
          <div className="w-full py-8 lg:px-12 px-6 border bg-white md:w-1/2">
            <h2 className="text-2xl md:text-3xl text-center font-semibold">
              Create Account
            </h2>

            <form className="pt-6" action="">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="text-xs w-full sm:w-1/2 flex flex-col gap-1">
                  <label className="text-gray-600" htmlFor="fname">
                    First Name*
                  </label>
                  <input
                    id="fname"
                    type="text"
                    className="outline-0 border p-3"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="text-xs w-full sm:w-1/2 flex flex-col gap-1">
                  <label className="text-gray-600" htmlFor="lname">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lname"
                    className="outline-0 border p-3"
                    placeholder="Enter Your Last Name"
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
                    type="email"
                    className="outline-0 border p-3"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="text-xs w-full sm:w-1/2 flex flex-col gap-1">
                  <label className="text-gray-600" htmlFor="phone">
                    Phone*
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="outline-0 border p-3"
                    placeholder="Enter Your Phone"
                  />
                </div>
              </div>
              <div className="text-xs flex flex-col gap-1 mt-4">
                <label htmlFor="country" className="text-gray-600">
                  Country
                </label>
                <Select defaultValue="name-asc">
                  <SelectTrigger className="w-full rounded-none outline-0 shadow-none border py-5">
                    Select Country
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="bangladesh">Bangladesh</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="text-xs flex flex-col gap-1 mt-4">
                <label htmlFor="address" className="text-gray-600">
                  Address
                </label>
                <input
                  id="address"
                  type="email"
                  className="outline-0 border p-3"
                  placeholder="Enter Your address"
                />
              </div>

              <div className="flex flex-col mt-4  sm:flex-row gap-4">
                <div className="text-xs w-full sm:w-1/2 flex flex-col gap-1">
                  <label className="text-gray-600" htmlFor="city">
                    Town / City*
                  </label>
                  <Select defaultValue="name-asc">
                    <SelectTrigger className="w-full rounded-none outline-0 shadow-none border py-5">
                      Select City
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usa">USA</SelectItem>
                      <SelectItem value="bangladesh">Bangladesh</SelectItem>
                      <SelectItem value="india">India</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="text-xs w-full sm:w-1/2 flex flex-col gap-1">
                  <label className="text-gray-600" htmlFor="postcode">
                    Postcode / Zip*
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    className="outline-0 border p-3"
                    placeholder="000000"
                  />
                </div>
              </div>
              <div className="my-8 text-gray-500 flex items-center gap-2">
                <input id="term" type="checkbox" />
                <label htmlFor="term">I agree allterms and condition ShopO.</label>
              </div>
              <div>
                <input type="submit" value={"Create Account"} className="bg-black text-white w-full py-3" />
              </div>

              <div className="mt-4 flex items-center justify-center text-gray-500  gap-2">
                
                <p className="text-gray-400">Already have an Account?</p>
                <Link className="text-black" href={"/login"}>Log In</Link>
              </div>
              
            </form>
          </div>
          <div className="w-full md:w-1/2">
          <Image
          src={image}
          alt="register"
          className="w-full"
          />
          </div>
        </div>
        <Discount />
    
      </div>
      
  );
};

export default Register;
