"use client";

import { useState } from "react";
import { Funnel, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import FilterSideBar from "./filterOption";
import { cn } from "@/lib/utils";

const FilterBar = ({ sort, onSortChange }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Filter Bar Top Controls */}
      <div className="flex flex-col lg:flex-row p-3 bg-white lg:justify-between lg:items-center">
        <p className="text-sm">
          <span className="text-gray-400">Showing</span> 1–16 of 66 results
        </p>

        <div className="mt-4 lg:mt-0 flex items-center gap-2">
          <p className="text-sm">Sort by:</p>

          {/* Mobile filter button */}
          <Button
            className="lg:hidden"
            variant="outline"
            onClick={() => setSidebarOpen(true)}
          >
            <Funnel className="w-4 h-4" />
          </Button>

          {/* Desktop select */}
          <div className="hidden lg:block">
            <Select value={sort} onValueChange={onSortChange}>
              <SelectTrigger className="w-[160px] text-xs border-0 border-b rounded-none outline-0 shadow-none">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className={"text-xs"} value="name-asc">Name (A → Z)</SelectItem>
                <SelectItem className={"text-xs"}  value="name-desc">Name (Z → A)</SelectItem>
                <SelectItem className={"text-xs"}  value="price-asc">Price (Low → High)</SelectItem>
                <SelectItem className={"text-xs"}  value="price-desc">Price (High → Low)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-full bg-white p-4 z-40 overflow-auto transition-transform duration-300 lg:hidden",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="sticky top-0 py-2 z-50">
          <div className="flex justify-end">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Sidebar Filters */}
        <FilterSideBar />
      </div>
    </>
  );
};

export default FilterBar;
