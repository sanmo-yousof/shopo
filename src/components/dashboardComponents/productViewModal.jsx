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
import { Button } from "../ui/button";

const ProductViewModal = ({ data }) => {
  return (
    <>
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
                  <p className="sm:text-xs text-[10px] text-gray-500">
                    {single?.name?.length > 30
                      ? single.name.slice(0, 30) + "..."
                      : single?.name}
                  </p>
                </div>
                <h4 className="text-sm font-semibold text-gray-500">
                  {single?.orderQuantity}X
                </h4>
              </div>
            </>
          ))}

          <DialogFooter>
            <DialogClose asChild>
              <Button size="sm">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductViewModal;
