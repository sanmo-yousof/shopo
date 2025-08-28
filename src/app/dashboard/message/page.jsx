import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Messages } from "@/utils/utils";
import { Eye, Trash } from "lucide-react";
import Link from "next/link";

const Message = () => {
  return (
    <>
      <section>
        <h2 className="lg:text-2xl mb-4 sm:text-xl text-base font-semibold text-gray-700">
          Messages
        </h2>

        <div className="overflow-x-auto mt-3">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow table-auto">
            <thead>
              <tr className="bg-blue-100 text-left text-xs md:text-sm font-semibold text-gray-700">
                <th className="md:py-4 py-3 border-r px-4 whitespace-nowrap">
                  Name
                </th>
                <th className="md:py-4 py-3 border-r px-4 whitespace-nowrap">
                  Message
                </th>
                <th className="md:py-4 py-3 border-r px-4 whitespace-nowrap">
                  Sent
                </th>
                <th className="md:py-4 py-3 px-4 border-r whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              
                <tr
                  
                  className=" text-xs md:text-sm text-gray-700 hover:bg-gray-50 transition"
                >
                  <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                    Md Mamun
                  </td>
                  <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                    How are ......
                  </td>
                  <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                    7 hour ago
                  </td>

                  <td className="md:py-4 py-2 px-4 border-b whitespace-nowrap">
                    <div className="flex gap-2">
                      <Link href={"/dashboard/message/conversation"}>
                        <div className="inline-flex cursor-pointer items-center gap-1 rounded border px-2 py-1 bg-blue-500 text-white lg:text-sm text-xs">
                          <Eye className="w-4 h-4" />
                          View
                        </div>
                      </Link>

                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="inline-flex cursor-pointer items-center gap-1 rounded border px-2 py-1 bg-red-500 text-white lg:text-sm text-xs">
                            <Trash className="w-4 h-4" />
                            Delete
                          </div>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-[425px]">
                          {/* 🔧 Required for accessibility */}
                          <DialogHeader>
                            <DialogTitle className="sr-only">
                              Product Details
                            </DialogTitle>
                            {/* You can skip <DialogDescription> if unnecessary */}
                          </DialogHeader>
                          <div className=" text-gray-600 ">
                            <h3 className="text-sm lg:text-md font-semibold mb-2">
                              Are you sure delete this message ?
                            </h3>
                            <div className="mt-4 flex justify-end">
                              <Button size={"sm"}>Confirm</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </td>
                </tr>
             
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Message;
