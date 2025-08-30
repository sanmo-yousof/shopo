import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Eye, Plus, Trash } from "lucide-react";
import Link from "next/link";

const Ticket = () => {
  return(
    <>
    <div className="flex justify-between items-center">
      <h2 className="lg:text-2xl text-base sm:text-xl font-semibold text-gray-700">
          Tickets
        </h2>
      <div>
        <Button><Plus/>Add Tickets</Button>
      </div>
    </div>
    <div className="overflow-x-auto mt-3">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow table-auto">
            <thead>
              <tr className="bg-blue-100 text-left text-xs md:text-sm font-semibold text-gray-700">
                <th className="md:py-4 py-3 border-r px-4 whitespace-nowrap">
                  Subject
                </th>
                <th className="md:py-4 py-3 border-r px-4 whitespace-nowrap">
                  Message
                </th>
                <th className="md:py-4 py-3 px-4 border-r whitespace-nowrap">
                  Time
                </th>
                <th className="md:py-4 py-3 px-4 whitespace-nowrap min-w-[100px]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
                <tr
                  className=" text-xs md:text-sm text-gray-700 hover:bg-gray-50 transition"
                >
                  <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                    Akdjgk
                  </td>
                  <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                    Hello Desce kjk
                  </td>
                  <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                    3 Month ago
                  </td>
                  <td className="md:py-4 py-2 border-r px-4 border-b whitespace-nowrap">
                   <div className="flex gap-2">
                    <Link href={"/dashboard/tickets/message"}><Button size={"sm"}><Eye/></Button></Link>

                    <Dialog>
                        <DialogTrigger asChild>
                          <Button className={"bg-red-500"} size={"sm"}>
                            <Trash />
                          </Button>
                            
                            
                          
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
    </>
  );
};

export default Ticket;