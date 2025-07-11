import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectItem } from "@radix-ui/react-select";
import React, { FC } from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

interface FormSearchProps {}

const FormSearch: FC<FormSearchProps> = ({}) => {
  return (
    <>
      <div className="mt-6 p-4 bg-background shadow-md inline-flex items-center gap-4 relative w-max z-10">
        <div className="inline-flex gap-3 items-center">
          <FaSearch className="w-6 h-6" />
          <Input
            className="py-8 w-[360px] border-none"
            placeholder="Job Title or Keyword"
          />
        </div>
        <div className="inline-flex gap-3 items-center">
          <FaLocationDot className="w-6 h-6" />
          <Select>
            <SelectTrigger className="w-[300px] border-none text-gray-500 outline-none py-8">
              <SelectValue placeholder="Select a Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Button className="py-8 px-10 text-lg">Search my job</Button>
        </div>
      </div>
      <div className="text-muted-foreground mt-3">
        Popular : UI Designer, UX Reseacher, Android, Admin
      </div>
      </>
  );
};

export default FormSearch;
