"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Minus, Plus, Trash, X } from "lucide-react";
import { useEffect, useState } from "react";
import { getCart, removeCart, updateCartQuantity } from "@/utils/loaclSorage";
import WishlistSkeleton from "@/components/wishlistSkeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import Swal from "sweetalert2";
import Link from "next/link";

import emptyCart from "@/asset/emptyImages/emptyCart.png";
import EmptyContent from "../emptyContent";

const CartItem = () => {
  const [cartdata, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shipping, setShipping] = useState(0);

  useEffect(() => {
    setLoading(true);
    setCartData(getCart());
    setLoading(false);
  }, []);

  const handleRemoveCart = (id, color) => {
    removeCart(id, color);
    setCartData(getCart());
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Items remove from Cart!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleIncrement = (id, color) => {
    updateCartQuantity(id, color, "increment");
    setCartData(getCart());
  };

  const handleDecrement = (id, color) => {
    updateCartQuantity(id, color, "decrement");
    setCartData(getCart());
  };

  const subtotal = cartdata.reduce(
    (acc, item) => acc + item.price * item.orderQuantity,
    0
  );

  return (
    <>
      <div className="max-w-7xl mt-6 mx-auto px-4 overflow-x-auto">
        {!loading && cartdata.length === 0 ? (
          <EmptyContent
        emptyCart={emptyCart}
        title=" Your cart is empty"
        href="/shop"
        buttonText="Add to Cart"
      />
        ) : (
          <table className="min-w-[700px] w-full text-left border border-gray-200">
            <thead className="bg-gray-100  text-xs sm:text-sm">
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
            {loading ? (
              <WishlistSkeleton />
            ) : (
              <tbody>
                {cartdata?.map((product, indx) => (
                  <tr
                    key={indx}
                    className="text-gray-500  text-sm sm:text-base"
                  >
                    <td className="p-3 border-b">
                      <div className="flex items-center gap-2">
                        <Image
                          src={product.images}
                          quality={100}
                          width={80}
                          height={80}
                          alt={product.name}
                          className="border w-14 bg-white md:w-[90px] p-2"
                        />
                        <p className="text-black text-xs md:text-sm break-words w-[240px] sm:max-w-[300px]">
                          {product.name}
                        </p>
                      </div>
                    </td>
                    <td className="p-3 border-b">
                      <div
                        className={`h-5 w-5 border rounded-full`}
                        style={{ backgroundColor: product?.orderColor }}
                      />
                    </td>
                    <td className="p-3 text-xs md:text-sm  border-b">
                      {product?.orderSize}
                    </td>
                    <td className="p-3 text-xs md:text-sm  border-b">
                      ${product.price}
                    </td>
                    <td className="p-3 border-b">
                      <div className="flex items-center justify-center gap-2 border  max-w-fit">
                        <Button
                          size={"sm"}
                          className={"rounded-none"}
                          onClick={() =>
                            handleDecrement(product.id, product?.orderColor)
                          }
                          disabled={product?.orderQuantity <= 1}
                        >
                          <Minus />
                        </Button>
                        <span className="mx-2">{product?.orderQuantity}</span>
                        <Button
                          size={"sm"}
                          className={"rounded-none"}
                          onClick={() =>
                            handleIncrement(product.id, product?.orderColor)
                          }
                        >
                          <Plus />
                        </Button>
                      </div>
                    </td>
                    <td className="p-3 text-xs md:text-sm  border-b">
                      ${(product.price * product?.orderQuantity).toFixed(2)}
                    </td>
                    <td className="p-3 border-b ">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size={"sm"}
                            onClick={removeCart}
                            className="rounded bg-red-500"
                          >
                            <Trash />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Remove from Cart?</DialogTitle>
                            <DialogDescription></DialogDescription>
                          </DialogHeader>

                          <div className="flex p-3 justify-between">
                            <div className="flex gap-2 items-center">
                              <Image
                                alt="product"
                                src={product?.images}
                                width={50}
                                height={50}
                                quality={100}
                                className="w-6"
                              />
                              <p className="text-[10px] text-gray-500">
                                {product?.name}
                              </p>
                            </div>
                            <h4 className="text-sm font-semibold text-gray-500">
                              {product?.orderQuantity}X
                            </h4>
                          </div>

                          <DialogFooter>
                            <DialogClose asChild>
                              <Button size="sm" variant="outline">
                                Cancel
                              </Button>
                            </DialogClose>
                            <DialogClose asChild>
                              <Button
                                onClick={() =>
                                  handleRemoveCart(
                                    product.id,
                                    product?.orderColor
                                  )
                                }
                                size="sm"
                                type="button"
                              >
                                Remove
                              </Button>
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        )}
      </div>

      {cartdata.length > 0 && (
        <div className="md:mt-12 mx-auto max-w-7xl mt-6">
          <div className="flex flex-col sm:flex-row px-4 justify-between gap-3 sm:items-center">
            <div className="flex items-center border justify-between">
              <input
                className="bg-white px-3 text-xs w-full lg:text-base md:text-sm outline-0"
                placeholder="Discount Code"
                type="text"
              />
              <Button className={"rounded-none"}>Get the Coupon</Button>
            </div>

            <div className="flex mt-6 sm:mt-0 gap-4">
              <Link href={"/shop"}>
                <Button>Continue Shopping</Button>
              </Link>
              <Link href={"/cart"}>
                <Button>Update Cart</Button>
              </Link>
            </div>
          </div>

          <div className="grid lg:justify-end justify-center px-4">
            <div className="max-w-md my-6 sm:my-8 p-4 w-74 md:w-82 border rounded-md">
              {/* Subtotal */}
              <div className="text-sm flex justify-between md:text-base">
                <h4>Subtotal</h4>
                <h4 className="text-red-500 font-semibold">
                  ${subtotal.toFixed(2)}
                </h4>
              </div>

              <hr className="my-4" />

              {/* Shipping Options */}
              <div className="text-sm text-gray-600 md:text-base">
                <h4 className="text-black mb-2">Shipping</h4>
                <div className="space-y-2 text-xs sm:text-sm">
                  {[
                    { id: "freeShiping", label: "Free Shipping", amount: 0.0 },
                    { id: "flatRate", label: "Flat Rate", amount: 3.5 },
                    {
                      id: "localdelivery",
                      label: "Local Delivery",
                      amount: 2.3,
                    },
                  ].map((option) => (
                    <div
                      key={option.id}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          id={option.id}
                          type="radio"
                          name="shipping"
                          required
                          onChange={() => setShipping(option.amount)}
                        />
                        <label htmlFor={option.id}>{option.label}</label>
                      </div>
                      <span>+${option.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calculate Shipping */}
              <div className="text-sm mt-6 text-gray-600 md:text-base">
                <h4 className="text-black mb-3">Calculate Shipping</h4>
                <Select>
                  <SelectTrigger className="py-5 rounded-none shadow-none w-full outline-none focus:outline-none focus:ring-0">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bangladesh">Bangladesh</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="usa">USA</SelectItem>
                  </SelectContent>
                </Select>

                <input
                  className="p-3 my-3 outline-0 w-full border"
                  placeholder="Postcode/ZIP"
                  type="text"
                  required
                />

                <div className="flex mt-6 text-lg font-semibold justify-between items-center">
                  <span>Total</span>
                  <span className="text-red-500">
                    ${(subtotal + shipping).toFixed(2)}
                  </span>
                </div>

                <Link className="w-full" href={"/checkout"}>
                  <Button className={"w-full mt-3"} size={"lg"}>
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
