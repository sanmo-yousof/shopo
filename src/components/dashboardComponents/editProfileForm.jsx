import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EditProfileForm = () => {
  return (
    <div className="space-y-6 lg:p-8 p-4">
      <form className="text-xs md:text-sm">
        <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name & Email */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">User Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your User Name"
              className="border p-3 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Your Email"
              type="email"
              className="border p-3 focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Phone & Fax */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="text"
              placeholder="+88017436*****"
              className="border p-3 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="fax">Fax</label>
            <input
              id="fax"
              type="text"
              placeholder="34534534534"
              className="border p-3 focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Country & State */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="country">Select Country</label>
            <Select>
              <SelectTrigger className="w-full py-5 rounded-none">
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
            <label htmlFor="state">Select State</label>
            <Select>
              <SelectTrigger className="w-full py-5 rounded-none">
                <SelectValue placeholder="Select State" />
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
            <label htmlFor="city">Select City</label>
            <Select>
              <SelectTrigger className="w-full py-5 rounded-none">
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
            <label htmlFor="postcode">ZIP</label>
            <input
              id="postcode"
              placeholder="12345"
              className="border p-3 focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col space-y-2 mt-4">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            placeholder="Enter your full address"
            className="border p-3 w-full focus:outline-none focus:ring-0"
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
