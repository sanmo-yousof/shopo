"use client";
import EditProfileFrom from "@/components/dashboardComponents/editProfileForm";
import { Camera } from "lucide-react";
import Image from "next/image";

const EditProfile = () => {
  return (
    <div className="">
      <h2 className="lg:text-2xl text-base sm:text-xl font-semibold text-gray-700">
        Update your Profile
      </h2>
      <div className="border mt-6 rounded-2xl mx-auto overflow-hidden bg-white max-w-4xl">
        <div className="flex flex-col bg-blue-100 items-center py-8 justify-center">
          <div className="relative">
            {/* Profile Picture */}
            <Image
              src="/user.png"
              width={100}
              height={100}
              quality={100}
              alt="User Profile"
              className="rounded-full overflow-hidden p-1 mb-2 border-4 border-[#1867d6]"
            />

            {/* Label for file input */}
            <label
              htmlFor="file-upload"
              className="text-white absolute cursor-pointer rounded-full bg-[#1867d6] bottom-5 -right-2 p-1 border border-white"
            >
              <Camera />
            </label>

            {/* Hidden File Input */}
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  console.log("Selected file:", file.name);
                }
              }}
            />
          </div>

          <h3 className="text-gray-600 text-sm sm:text-lg font-semibold text-center">
            Yousof Ali
          </h3>
        </div>

        <div>
          <h2 className=" text-gray-700 ml-4  mt-6 text-sm sm:text-lg font-semibold text-cente">
            User Information
          </h2>
          <hr />
          <EditProfileFrom />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
