import { Button } from "@/components/ui/button";
import { Funnel } from "lucide-react";

const Shop = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="grid max-w-7xl py-8 lg:py-16  mx-auto px-2 lg:grid-cols-4 gap-6">
        <div className="col-span-1 p-3 hidden lg:block  bg-white border">
          <h4 className="text-black text-base font-500">Product Categories</h4>
        </div>
        <div className="lg:col-span-3 p-3 border">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <p className="text-sm">
              <span className="text-gray-400">Showing</span> 1–16 of 66 results
            </p>

            <div className="mt-4 lg:mt-0">
              <p className="text-sm">Sort by: </p>
              <Button className={'lg:hidden mt-2'}  variant="outline"><Funnel /></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
