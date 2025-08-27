import {
  Dialog,
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

const ProductViewModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="inline-flex cursor-pointer items-center gap-1 rounded border px-2 py-1 bg-blue-500 text-white lg:text-sm text-xs">
          <Eye className="w-4 h-4" />
          View
        </div>
      </DialogTrigger>

      <DialogContent className="flex flex-row sm:max-w-[425px]">
        {/* 🔧 Required for accessibility */}
        <DialogHeader>
          <DialogTitle className="sr-only">Product Details</DialogTitle>
          {/* You can skip <DialogDescription> if unnecessary */}
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
    </Dialog>
  );
};

export default ProductViewModal;
