"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { FormEvent } from "react";

const OrderTracking = () => {
  return (
    <section>
      <h2 className="lg:text-2xl sm:text-xl text-base font-semibold text-gray-700">
        Track Your Order
      </h2>
      <p className="text-xs text-gray-600 md:text-sm">
        Have an order? Want to know where your order is now?
      </p>

      <div className="border max-w-2xl mx-auto mt-12 rounded md:p-16 p-3">
        <h2 className=" text-center bg-blue-100 lg:text-lg sm:text-base text-sm font-semibold py-4 md:py-6 text-gray-700">
          Enter Your Order Number
        </h2>

        <div>
          <div className="flex flex-col text-xs md:text-sm  gap-1 mt-6 md:mt-12">
            <label htmlFor="order1" className="text-gray-600">
              Order Number
            </label>
            <input
              type="text"
              required
              className=" outline-0 rounded-md px-2 py-3 md:p-4  border"
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
              className=" outline-0 px-2 py-3 md:p-4 rounded-md  border"
              id="order2"
              placeholder=""
            />
          </div>

          <div className="mt-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  size="lg"
                  className="w-full bg-[#1867d6] text-white py-2 rounded-md cursor-pointer mt-3"
                >
                  Track Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Your Order Tracking</DialogTitle>
                  <DialogDescription>
                    
                  </DialogDescription>
                </DialogHeader>

                <p className="text-xs lg:text-sm text-gray-500">no tracking data</p>
                
                <DialogFooter>
                  <DialogClose asChild>
                    <Button>Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OrderTracking;
