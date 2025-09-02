"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import OrderSummary from "./orderSummary";
import { getCart } from "@/utils/loaclSorage";
import Swal from "sweetalert2";

const BillingForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [error, setError] = useState("");
  const [cartData, setCartData] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    postcode: "",
    createAccount: false,
    shipToDifferent: false,
    paymentMethod: paymentMethod,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSelectChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // check payment method
    if (formData.paymentMethod === "") {
      setError("Select a Payment method!");
      return;
    }

    // submit data (you can send to API here)
    console.log("✅ Form submitted", formData);

    // reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      address: "",
      city: "",
      postcode: "",
      createAccount: false,
      shipToDifferent: false,
      paymentMethod: "",
    });

    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("CartUpdated"));

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your order has been submitted!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* form gets an id */}
      <form id="billingForm" onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-md font-semibold">Billing Details</h2>
          <div className="space-y-4 text-xs">
            {/* First & Last Name */}
            <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="firstName">First Name*</label>
                <input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Demo Name"
                  className="border p-3 rounded-md focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="lastName">Last Name*</label>
                <input
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Demo Name"
                  className="border p-3 rounded-md focus:outline-none"
                  required
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
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="demoemail@gmail.com"
                  className="border p-3 rounded-md focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="phone">Phone Number*</label>
                <input
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="012 3 *******"
                  className="border rounded-md p-3 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Country */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="country">Country*</label>
              <Select
                onValueChange={(value) => handleSelectChange("country", value)}
              >
                <SelectTrigger className="w-full py-5 shadow-none text-xs">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bangladesh">Bangladesh</SelectItem>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="usa">USA</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Address */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="address">Address*</label>
              <input
                id="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your address here"
                className="border rounded-md p-3 focus:outline-none"
                required
              />
            </div>

            {/* City & Postcode */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="city">Town / City*</label>
                <Select
                  onValueChange={(value) => handleSelectChange("city", value)}
                >
                  <SelectTrigger className="w-full py-5 shadow-none text-xs">
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
                  value={formData.postcode}
                  onChange={handleChange}
                  placeholder="12345"
                  className="border p-3 rounded-md focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Create Account */}
            <div className="flex items-center space-x-2 pt-2">
              <input
                id="createAccount"
                type="checkbox"
                checked={formData.createAccount}
                onChange={handleChange}
              />
              <label htmlFor="createAccount" className="text-xs cursor-pointer">
                Create an account?
              </label>
            </div>
          </div>
        </div>
      </form>

      {/* Pass formId & submit logic to OrderSummary */}
      <OrderSummary
        formId="billingForm"
        error={error}
        setCartData
        setPaymentMethod={(method) =>
          setFormData({ ...formData, paymentMethod: method })
        }
      />
    </div>
  );
};

export default BillingForm;
