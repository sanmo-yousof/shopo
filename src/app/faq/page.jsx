import Discount from "@/components/shopParts/discount";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FaqData } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const FAQ = () => {
  return (
    <div>
      <div className="bg-blue-100 w-full h-[180px] flex items-center justify-center">
        <h2 className="sectionHeading">Frequently Asked Questions</h2>
      </div>
      <div className="bg-gray-100 ">
        <div className="flex max-w-7xl py-12 mx-auto flex-col md:flex-row px-4 gap-8">
          <div className="w-full   md:w-1/2 ">
            <h2 className="text-xl mb-6 font-semibold md:text-2xl">
              Frequently asked question
            </h2>
            <div>
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                {FaqData?.map((data, indx) => {
                  return (
                    <AccordionItem key={indx} value={`item-${indx+1}`}>
                      <AccordionTrigger>{data?.question}</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        
                        <p>
                         {
                          data?.answer
                         }
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}

              </Accordion>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-6 bg-white">
            <h2 className="text-xl md:text-2xl text-center font-semibold">
              Have Any Questions
            </h2>

            <form className="pt-6" action="">
              <div className="text-xs flex flex-col gap-1 mt-4">
                <label htmlFor="fname" className="text-gray-600">
                  First Name*
                </label>
                <input
                  id="fname"
                  type="text"
                  className="outline-0 border p-3"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="text-xs flex flex-col gap-1 mt-4">
                <label htmlFor="email" className="text-gray-600">
                  Email Address*
                </label>
                <input
                  id="email"
                  type="password"
                  className="outline-0 border p-3"
                  placeholder="Enter Your email"
                />
              </div>

              <div className="text-xs flex flex-col gap-1 mt-4">
                <label htmlFor="message" className="text-gray-600">
                  Message*
                </label>
                <textarea
                  rows={5}
                  className="border p-3 outline-0"
                  placeholder="Type your message here"
                ></textarea>
              </div>

              <div className="mt-10">
                <input
                  type="submit"
                  value={"Send Now"}
                  className="bg-black text-white w-full py-3"
                />
              </div>
            </form>
          </div>
        </div>
        <Discount/>
      </div>
    </div>
  );
};

export default FAQ;
