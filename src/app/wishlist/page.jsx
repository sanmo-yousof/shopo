import { Button } from "@/components/ui/button";
import { Products } from "@/utils/utils";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

const Wishlist = () => {
  return(
    <>
    <div className="bg-blue-100 w-full h-[180px] flex items-center justify-center">
          <h2 className="sectionHeading">WishList</h2>
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
                    <div className="flex items-center justify-center gap-2 border  max-w-fit">
                      <Button
                        className={"rounded-none"}
                      >
                        <Minus/>
                      </Button>
                      <span className="mx-2">0</span>
                      <Button
                        className={"rounded-none"}
                      >
                        <Plus/>
                      </Button>
                    </div>
                  </td>
                  <td className="p-3 border-b">${product.price}</td>
                  <td className="p-3 border-b ">
                    <Button  className="rounded">
                      X
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="max-w-7xl flex justify-end gap-4 mt-6 mx-auto px-2">
        <Button size={"lg"} variant={"outline"}>Clean Wishlist</Button>
        <Button size={"lg"} >Add to Cart</Button>

        </div>
    </>
  );
};

export default Wishlist;