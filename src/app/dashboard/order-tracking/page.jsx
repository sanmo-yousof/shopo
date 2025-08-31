"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { FormEvent } from "react";

const OrderTracking = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // ⛔ stop page refresh
  };

  return (
    <section>
      <h2 className="lg:text-2xl sm:text-xl text-base font-semibold text-gray-700">
        Track Your Order
      </h2>
      <p className="text-xs text-gray-600 md:text-sm">
        Have an order? Want to know where your order is now?
      </p>

      <div className="border mt-12 rounded md:p-16 p-3">
        <h2 className=" text-center bg-blue-100 lg:text-lg sm:text-base text-sm font-semibold py-4 md:py-6 text-gray-700">
          Enter Your Order Number
        </h2>

        {/* 🚀 Prevent default form reload */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col text-xs md:text-sm  gap-1 mt-6 md:mt-12">
            <label htmlFor="order1" className="text-gray-600">
              Order Number
            </label>
            <input
              type="text"
              required
              className=" outline-0 px-2 py-3 md:p-4 rounded border"
              id="order1"
              placeholder="Enter your order Number"
            />
          </div>

          <div className="flex flex-col text-xs md:text-sm  gap-1 mt-3">
            <label htmlFor="date" className="text-gray-600">
              Delivery Date
            </label>
            <input
              type="date"
              required
              className=" outline-0 px-2 py-3 md:p-4 rounded border"
              id="order2"
              placeholder=""
            />
          </div>

          {/* <div className="mt-3">
            <Dialog>
              <DialogTrigger asChild>
              
                <Button
                  type="button"
                  className="w-full bg-[#1867d6] text-white py-2 rounded cursor-pointer mt-3"
                >
                  Track Now
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  
                  <DialogTitle className="sr-only">Order Tracking</DialogTitle>
                </DialogHeader>
                <div className=" text-gray-600 px-4">
                  <h3 className="text-sm lg:text-md font-semibold mb-2">
                    Order Tracking
                  </h3>
                  <hr />
                  <p className="text-xs px-2 mt-2 text-gray-500">
                    No order tracking found!
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div> */}
        </form>
      </div>
    </section>
  );
};
export default OrderTracking;
