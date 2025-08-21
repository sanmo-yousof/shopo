import Discount from "@/components/shopParts/discount";
import { Button } from "@/components/ui/button";
import { Products } from "@/utils/utils";
import Image from "next/image";
import { removeCart } from "@/lib/customFunction";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Cart = () => {
  return (
    <>
      <div className="">
        <div className="bg-blue-100 w-full h-[180px] flex items-center justify-center">
          <h2 className="sectionHeading">Your Cart</h2>
        </div>

        <div className="max-w-7xl mt-6 mx-auto px-4 overflow-x-auto">
          <table className="min-w-[700px] w-full text-left border border-gray-200">
            <thead className="bg-gray-100 text-sm sm:text-base">
              <tr>
                <th className="p-3 border-b">PRODUCT</th>
                <th className="p-3 border-b">COLOR</th>
                <th className="p-3 border-b">SIZE</th>
                <th className="p-3 border-b">PRICE</th>
                <th className="p-3 border-b">QUANTITY</th>
                <th className="p-3 border-b">TOTAL</th>
                <th className="p-3 border-b">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {Products?.slice(2, 5)?.map((product, indx) => (
                <tr key={indx} className="text-gray-500  text-sm sm:text-base">
                  <td className="p-3 border-b">
                    <div className="flex items-center gap-2">
                      <Image
                        src={product.images}
                        quality={100}
                        width={100}
                        height={100}
                        alt={product.name}
                        className="border w-16 bg-white sm:w-[100px] p-2"
                      />
                      <p className="text-black text-sm break-words md:text-base w-[240px] sm:max-w-[300px]">
                        {product.name}
                      </p>
                    </div>
                  </td>
                  <td className="p-3 border-b">
                    <div className="h-5 w-5 bg-amber-400 rounded-full" />
                  </td>
                  <td className="p-3 border-b">XL</td>
                  <td className="p-3 border-b">${product.price}</td>
                  <td className="p-3 border-b">
                    <div className="flex items-center justify-center gap-2 border px-2 py-1 max-w-fit">
                      <Button
                        size="sm"
                        className="bg-white    text-gray-500 px-2"
                      >
                        -
                      </Button>
                      <span>0</span>
                      <Button
                        size="sm"
                        className="bg-white  text-gray-500 px-2"
                      >
                        +
                      </Button>
                    </div>
                  </td>
                  <td className="p-3 border-b">${product.price}</td>
                  <td className="p-3 border-b ">
                    <Button onClick={removeCart} className="rounded">
                      X
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:mt-12  mx-auto max-w-7xl mt-6 ">
          <div className="flex flex-col sm:flex-row px-4 justify-between gap-3 sm:items-center">
            <div className="flex items-center  border justify-between">
              <input
                className="bg-white px-3  text-xs w-full  lg:text-base md:text-sm  outline-0 "
                placeholder="Discount Code"
                type="text"
              />
              <Button variant="blackBg">Get the Coupon</Button>
            </div>

            <div className="flex mt-6 sm:mt-0 gap-4">
              <Button>Continue Shooping</Button>
              <Button>Update Cart</Button>
            </div>
          </div>

          <div className="grid justify-end px-2 sm:px-0">
            <div className="w-full max-w-md my-6 sm:my-8 p-4  border rounded-md">
              {/* Subtotal */}
              <div className="text-sm flex justify-between md:text-base">
                <h4>Subtotal</h4>
                <h4 className="text-red-500 font-semibold">$345</h4>
              </div>

              <hr className="my-4" />

              {/* Shipping Options */}
              <div className="text-sm text-gray-600 md:text-base">
                <h4 className="text-black mb-2">Shipping</h4>
                <div className="space-y-2 text-xs sm:text-sm">
                  {[
                    { id: "freeShiping", label: "Free Shipping" },
                    { id: "flatRate", label: "Flat Rate" },
                    { id: "localdelivery", label: "Local Delivery" },
                  ].map((option) => (
                    <div
                      key={option.id}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center gap-2">
                        <input id={option.id} type="radio" name="shipping" />
                        <label htmlFor={option.id}>{option.label}</label>
                      </div>
                      <span>+$0.00</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calculate Shipping */}
              <div className="text-sm mt-6 text-gray-600 md:text-base">
                <h4 className="text-black mb-3">Calculate Shipping</h4>
                <Select defaultValue="name-asc">
                  <SelectTrigger className="w-full rounded-none outline-0 shadow-none border">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="bangladesh">Bangladesh</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                  </SelectContent>
                </Select>

                <input
                  className="p-3 my-3 outline-0 w-full border"
                  placeholder="Postcode/ZIP"
                  type="text"
                />

                <Button size="lg" className="bg-gray-100 w-full text-black">
                  Update Cart
                </Button>
              </div>

              {/* Total */}
              <div className="flex mt-6 text-lg font-semibold justify-between items-center">
                <span>Total</span>
                <span className="text-red-500">$365</span>
              </div>

              {/* Checkout Button */}
              <div className="mt-4">
                <Button className="w-full" variant="blackBg" size="lg">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Discount />
      </div>
    </>
  );
};

export default Cart;
