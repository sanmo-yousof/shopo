import { Eye } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

const TransactionViewModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="inline-flex cursor-pointer items-center gap-1 rounded border px-2 py-1 bg-blue-500 text-white lg:text-sm text-xs">
          <Eye className="w-4 h-4" />
          View
        </div>
      </DialogTrigger>

      <DialogContent className=" sm:max-w-[425px]">
        {/* 🔧 Required for accessibility */}
        <DialogHeader>
          <DialogTitle className="sr-only">Product Details</DialogTitle>

        </DialogHeader>
        <div className=" text-gray-600 px-4">
          <h3 className="text-sm lg:text-md font-semibold mb-2">
            Transaction Details
          </h3>
          <p className="text-xs text-gray-500">
            This is a sample description of the product. Add more info as
            needed.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default TransactionViewModal;
