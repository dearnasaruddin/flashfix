import React from "react";
import { useState } from "react";
import DropDownIcon from "@/assets/icons/DropDownIcon";
import { twMerge } from "tailwind-merge"
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropdownButton = ({ items, className }) => {

  const [active, setActive] = useState(items[0]);

  // ========== Base ClassName for trigger/button ===========
  const baseClassName = `
    bg-[#111B3D]
    hover:bg-[#1D293D50]
    hover:text-white
    border
    border-borderColor
    hover:border-[#2B7FFF50]
    text-white
    px-8
    py-4
    font-inter
    font-normal
    text-xs
    md:text-base
    leading-5
    rounded-[10px]
  `

  return (
    <DropdownMenu>

      {/* ========= Dropdown trigger/button ========== */}
      <DropdownMenuTrigger asChild>

        <Button
          variant="outline"
          className={twMerge(baseClassName, className)}>
          {active}
          <DropDownIcon />
        </Button>

      </DropdownMenuTrigger>


      {/* ========= dropdown items ========== */}
      <DropdownMenuContent className="md:w-40 bg-[#0F172B] border border-borderColor text-white ">
        <DropdownMenuGroup>
          <DropdownMenuLabel></DropdownMenuLabel>

          {items.map((item, index) => (
            <DropdownMenuCheckboxItem
              key={item + index}
              checked={active === item}
              onSelect={() => setActive(item)}
            >
              {item}
            </DropdownMenuCheckboxItem>
          ))}

        </DropdownMenuGroup>
      </DropdownMenuContent>

    </DropdownMenu>
  );
};

export default DropdownButton;