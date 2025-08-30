import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BillingFrom = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Billing Details</h2>
        <div className="space-y-4 text-sm">
          <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First & Last Name */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="firstName">First Name*</label>
              <input
                id="firstName"
                type="text"
                placeholder="Demo Name"
                className="border p-3 focus:outline-none focus:ring-0"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="lastName">Last Name*</label>
              <input
                id="lastName"
                placeholder="Demo Name"
                className="border p-3 focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Email Address*</label>
              <input
                id="email"
                type="email"
                placeholder="demoemail@gmail.com"
                className="border p-3 focus:outline-none focus:ring-0"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="phone">Phone Number*</label>
              <input
                id="phone"
                placeholder="012 3 *******"
                className="border p-3 focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          {/* Country Select */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="country">Country*</label>
            <Select>
              <SelectTrigger className="w-full rounded-none">
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

          {/* Address */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="address">Address*</label>
            <input
              id="address"
              placeholder="Your address here"
              className="border p-3 focus:outline-none focus:ring-0"
            />
          </div>

          {/* City & Postcode */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="city">Town / City*</label>
              <Select>
                <SelectTrigger className="w-full rounded-none">
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
              <label htmlFor="postcode">Postcode / ZIP*</label>
              <input
                id="postcode"
                placeholder="12345"
                className="border p-3 focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          {/* Create Account Checkbox */}
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox id="createAccount" />
            <label htmlFor="createAccount" className="text-sm cursor-pointer">
              Create an account?
            </label>
          </div>
        </div>
      </div>

      {/* Shipping Details Checkbox */}
      <div>
        <h2 className="text-xl font-semibold mt-12 mb-3">Shipping Details</h2>
        <div className="flex items-center space-x-2">
          <Checkbox id="shipToDifferent" />
          <label htmlFor="shipToDifferent" className="text-sm cursor-pointer">
            Ship to a different address
          </label>
        </div>
      </div>
    </div>
  );
};

export default BillingFrom;
