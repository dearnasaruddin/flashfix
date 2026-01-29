import React from "react";
import { useState } from "react";
import DropDownIcon from "@/assets/icons/DropDownIcon";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropdownButton = ({ items ,backgroundColor='#111B3D', height }) => {
  const [active, setActive] = useState(items[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`bg-[${backgroundColor}] hover:bg-[#1D293D50] hover:text-white border border-borderColor hover:border-[#2B7FFF50] text-white px-8 ${height ? 'h-10' : 'h-12.5'} py-4 font-inter text-base  leading-5 font-normal `}
        >
          {active} <DropDownIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40 bg-[#0F172B] border border-borderColor text-white ">
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