import { Eye } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

const TransactionViewModal = ({order}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"}>
          <Eye />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Transactions Details</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="mx-2 text-xs lg:text-sm space-y-1">
          <p >Date : <span className="text-gray-500">{order.transactionDate}</span></p>
          <p >TXID : <span className="text-gray-500">{order.transactionId}</span></p>
          <p >Payment Method : <span className="text-gray-500">{order.method}</span></p>
          <p>Details : <span className="text-gray-500">{order.details}</span></p>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button size="sm">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default TransactionViewModal;
