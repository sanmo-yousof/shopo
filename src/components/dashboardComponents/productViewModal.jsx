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
import Image from "next/image";
import product from "@/asset/registerImages/register.png";
import { Button } from "../ui/button";

const ProductViewModal = ({ data }) => {
  console.log(data);
  return (
    <>
      {/* <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"}>
          <Eye/>
        </Button>
      </DialogTrigger>

      <DialogContent className="flex flex-row sm:max-w-[425px]">
        
        <DialogHeader>
          <DialogTitle className="sr-only">Product Details</DialogTitle>
          
        </DialogHeader>

        <div className="w-2/5">
          <Image
            alt="product"
            src={product}
            className="w-full h-auto object-cover rounded"
          />
        </div>

        <div className="w-3/5 text-gray-600 px-4">
          <h3 className="text-sm lg:text-md font-semibold mb-2">Product Name</h3>
          <p className="text-xs text-gray-500">This is a sample description of the product. Add more info as needed.</p>
        </div>
      </DialogContent>
    </Dialog> */}

      <Dialog>
        <DialogTrigger asChild>
          <Button size={"sm"}>
            <Eye />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Order Product</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          {data?.map((single, indx) => (
            <>
              <div key={indx} className="flex md:gap-0 gap-3 justify-between">
                <div className="flex gap-2 items-center">
                  <Image
                    alt="product"
                    src={single?.images}
                    width={50}
                    height={50}
                    quality={100}
                    className="w-8 lg:w-10"
                  />
                  <p className="sm:text-xs text-[10px] text-gray-500">{single?.name}</p>
                </div>
                <h4 className="text-sm font-semibold text-gray-500">
                  {single?.orderQuantity}X
                </h4>
              </div>
            </>
          ))}

          <DialogFooter>
            <DialogClose asChild>
              <Button size="sm" >
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductViewModal;
