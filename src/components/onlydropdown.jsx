"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Onlydropdown({ data }) {
  const [active, setActive] = useState(data[0]);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex outline-0 items-center gap-1 cursor-pointer text-xs">
          {active.flag && (
            <Image
              src={active.flag}
              alt={active.name}
              width={20}
              height={20}
              className="rounded-full"
            />
          )}
          {active.name}

          <ChevronDown className="w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-w-42 px-2 py-2" align="end">
          {data.map((item) => (
            <DropdownMenuItem
              onClick={() => setActive(item)}
              key={item.name}
              className={`flex items-center gap-2 cursor-pointer ${
                active.name === item.name ? "bg-gray-200" : ""
              }`}
            >
              {item.flag && (
                <Image
                  src={item.flag}
                  alt={item.name}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              )}
              {item.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
