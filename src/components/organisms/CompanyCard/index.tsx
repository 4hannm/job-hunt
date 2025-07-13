import { Badge } from "@/components/ui/badge";
import { CompanyType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";


const CompanyCard: FC<CompanyType> = ({
  industry,
  description,
  image,
  name,
  totalJobs,
  id,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/detail/company/" + id)}
      className="border border-border p-6 cursor-pointer"
    >
      <div className="flex flex-row justify-between items-start">
        <Image
          src={
            typeof image === "string" && image !== ""
              ? image
              : "/images/company.png"
          }
          alt={typeof image === "string" ? image : "Company logo"}
          width={48}
          height={48}
          className="rounded"
        />
        <Badge>{totalJobs} Jobs</Badge>
      </div>
      <div className="my-4">
        <div className="text-lg font-semibold mb-2">{name}</div>
        <div
          className="line-clamp-3 text-sm text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
      <div className="space-x-2">
        <Badge variant="outline">{industry}</Badge>
      </div>
    </div>
  );
};

export default CompanyCard;
