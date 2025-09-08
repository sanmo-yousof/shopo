"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const EditProfileForm = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  
  const handleEditProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const fax = form.fax.value;
    const zip = form.zip.value;
    const address = form.address.value;

    const updatedData = {
      name,
      email,
      phone,
      fax,
      country,
      state,
      city,
      zip,
      address,
    };
    console.log(updatedData);
  };

  return (
    <div className="space-y-6 lg:p-8 p-4">
      <form onSubmit={handleEditProfile} className="text-xs ">
        <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name & Email */}
          <div className="flex flex-col space-y-2">
            <label className="text-gray-500" htmlFor="name">
              User Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your User Name"
              className="border rounded-md p-3 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-500" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              placeholder="Your Email"
              type="email"
              className="border p-3 rounded-md focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Phone & Fax */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col space-y-2">
            <label className="text-gray-500" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="+88017436*****"
              className="border p-3 rounded-md focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-500" htmlFor="fax">
              Fax
            </label>
            <input
              id="fax"
              name="fax"
              type="text"
              placeholder="34534534534"
              className="border p-3 rounded-md focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Country & State */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col space-y-2">
            <label className="text-gray-500 " htmlFor="country">
              Select Country
            </label>
            <Select onValueChange={(val) => setCountry(val)}>
              <SelectTrigger className="w-full rounded-md py-5 text-xs ">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-gray-500" htmlFor="state">
              Select State
            </label>
            <Select onValueChange={(val) => setState(val)}>
              <SelectTrigger className="w-full py-5 text-xs rounded-md">
                <SelectValue c placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="miyami">Miyami Town</SelectItem>
                <SelectItem value="tokyo">Tokyo</SelectItem>
                <SelectItem value="osaka">Osaka</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* City & ZIP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col space-y-2">
            <label className="text-gray-500" htmlFor="city">
              Select City
            </label>
            <Select onValueChange={(val) => setCity(val)}>
              <SelectTrigger className="w-full py-5 rounded-md text-xs ">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="miyami">Miyami Town</SelectItem>
                <SelectItem value="tokyo">Tokyo</SelectItem>
                <SelectItem value="osaka">Osaka</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-500 " htmlFor="zip">
              ZIP
            </label>
            <input
              id="zip"
              name="zip"
              placeholder="12345"
              className="border p-3 rounded-md focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col space-y-2 mt-4">
          <label className="text-gray-500" htmlFor="address">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            placeholder="Enter your full address"
            className="border p-3 rounded-md w-full focus:outline-none focus:ring-0"
            rows={4}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-6">
          <input
            className="text-sm md:text-base border cursor-pointer rounded text-white bg-[#1867d6] px-6 py-2"
            type="submit"
            value="Update Profile"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
