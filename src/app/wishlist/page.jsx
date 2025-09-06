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
import WishlistSkeleton from "@/components/wishlistSkeleton";
import useAllProducts from "@/hook/useAllProduct";
import { getWishlist, removeWishlist, setCart } from "@/utils/loaclSorage";
import { Minus, Plus, Trash, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import emptyWishlist from "@/asset/emptyImages/emptyWishlist.png";
import EmptyContent from "@/components/emptyContent";

const Wishlist = () => {
  const [wishlistIds, setWishlistIds] = useState([]);
  const [data, loading] = useAllProducts();
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const ids = getWishlist();
    setWishlistIds(ids);

    const initialQuantities = {};
    ids.forEach((id) => {
      initialQuantities[id] = 1;
    });
    setQuantities(initialQuantities);
  }, []);

  const wishlistProducts = data.filter((product) =>
    wishlistIds.includes(product.id)
  );

  const handleRemoveWishlist = (id) => {
    removeWishlist(id);
    setWishlistIds(getWishlist());
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Deleted!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleDeleteWishlist = () => {
    localStorage.removeItem("wishlist");
    setWishlistIds([]);
    window.dispatchEvent(new Event("wishlistUpdated"));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Delete all wishlist items",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleAddCart = () => {
    wishlistProducts.forEach((product) => {
      setCart({
        ...product,
        orderQuantity: quantities[product.id] || 1,
        orderColor: product.colors[0],
        orderSize: product.sizes[0],
      });
    });

    // Reset all quantities back to 1
    const resetQuantities = {};
    wishlistProducts.forEach((product) => {
      resetQuantities[product.id] = 1;
    });
    setQuantities(resetQuantities);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Items added to Cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleIncrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  return (
    <>
      <div className="bg-blue-100 w-full h-[180px] flex items-center justify-center">
        <h2 className="sectionHeading">WishList</h2>
      </div>

      <div className="max-w-7xl mt-6 mx-auto px-4 overflow-x-auto">
        {!loading && wishlistProducts.length === 0 ? (
          <EmptyContent
            emptyCart={emptyWishlist}
            title="Your wishlist is empty"
            href="/shop"
            buttonText="Shop"
          />
        ) : (
          <table className="min-w-[700px] w-full text-left border border-gray-200">
            <thead className="bg-gray-100 text-xs sm:text-sm">
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
                {wishlistProducts?.map((product, indx) => (
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
                        className={`h-5 w-5 border border-black rounded-full`}
                        style={{ backgroundColor: product?.colors[0] }}
                      />
                    </td>
                    <td className="p-3 text-xs md:text-sm border-b">
                      {product?.sizes[0]}
                    </td>
                    <td className="p-3 text-xs md:text-sm border-b">
                      ${product.price}
                    </td>
                    <td className="p-3 border-b">
                      <div className="flex items-center justify-center gap-2 border max-w-fit">
                        <Button
                          size="sm"
                          className="rounded-none"
                          onClick={() => handleDecrement(product.id)}
                          disabled={quantities[product.id] === 1}
                        >
                          <Minus />
                        </Button>

                        <span className="mx-2">
                          {quantities[product.id] || 1}
                        </span>

                        <Button
                          size="sm"
                          className="rounded-none"
                          onClick={() => handleIncrement(product.id)}
                        >
                          <Plus />
                        </Button>
                      </div>
                    </td>

                    <td className="p-3 text-xs md:text-sm border-b">
                      $
                      {(product.price * (quantities[product.id] || 1)).toFixed(
                        2
                      )}
                    </td>
                    <td className="p-3 border-b ">
                      <Button
                        onClick={() => handleRemoveWishlist(product?.id)}
                        size={"sm"}
                        className="rounded bg-red-500"
                      >
                        <Trash />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        )}
      </div>
      {wishlistProducts.length > 0 && (
        <div className="max-w-7xl flex justify-end gap-4 mt-6 mx-auto px-4">
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button size={"lg"} variant={"outline"}>
                  Clean Wishlist
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Delete Wishlist Items? </DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button size="sm" variant="outline">
                      Cancel
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      onClick={handleDeleteWishlist}
                      className="bg-red-500"
                      size="sm"
                    >
                      Delete
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button size={"lg"}>Add to Cart</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add to Cart all items? </DialogTitle>
              </DialogHeader>

              {wishlistProducts?.map((item, indx) => {
                return (
                  <div
                    className="flex justify-between items-center px-4"
                    key={indx}
                  >
                    <div className="flex items-center gap-2">
                      <div>
                        <Image
                          src={item?.images}
                          alt="product"
                          width={20}
                          height={20}
                          quality={100}
                          className="w-6"
                        />
                      </div>
                      <p className="text-[10px] text-gray-500">
                        {item?.name.length > 20
                          ? item?.name.slice(0, 20) + "..."
                          : item?.name}
                      </p>
                    </div>
                    <h3 className="text-sm text-gray-500 font-semibold">
                      {quantities[item.id] || 1}X
                    </h3>
                  </div>
                );
              })}

              <DialogFooter>
                <DialogClose asChild>
                  <Button size="sm" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button onClick={handleAddCart} size="sm">
                    Confirm
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  );
};

export default Wishlist;
