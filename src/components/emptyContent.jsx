import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const EmptyContent = (data) => {
  return (
    <div className="flex min-h-[50vh] flex-col justify-center items-center">
      <div>
        <Image alt="emptyImage" src={data.emptyCart} className="w-32 md:w-54" />
      </div>
      <h4 className="text-gray-500 lg:text-lg font-semibold text-sm sm:text-base">
        {data.title}!
      </h4>
      <Link className="mt-4" href={data.href}>
        <Button>{data.buttonText}</Button>
      </Link>
    </div>
  );
};

export default EmptyContent;
