import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LOCATION_OPTIONS } from "@/constansts";
import { optionType } from "@/types";
import React, { FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const FormSearchDynamic: FC = ({}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-6xl bg-background shadow-md p-4 flex flex-col lg:flex-row items-center gap-4 rounded-md">
        <div className="flex w-full items-center gap-3">
          <AiOutlineSearch className="w-6 h-6 text-muted-foreground" />
          <Input
            className="py-5 w-full border-none"
            placeholder="Job Title or keyword"
          />
        </div>

        <div className="flex w-full items-center gap-3">
          <HiOutlineLocationMarker className="w-6 h-6 text-muted-foreground" />
          <Select>
            <SelectTrigger className="w-full border-none text-gray-500 outline-none py-5">
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              {LOCATION_OPTIONS.map((item: optionType, i: number) => (
                <SelectItem key={i} value={item.id}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full lg:w-auto py-5">Search</Button>
      </div>

      <div className="text-muted-foreground mt-3 text-center">
        Popular: UI Designer, UX Researcher, Android, Admin
      </div>
    </div>
  );
};

export default FormSearchDynamic;
