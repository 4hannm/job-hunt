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
      className="border border-border p-5 rounded-md hover:shadow-md transition cursor-pointer flex flex-col gap-4"
    >
      <div className="flex items-start justify-between">
        <Image
          src={
            typeof image === "string" && image !== ""
              ? image
              : "/images/company.png"
          }
          alt="Company logo"
          width={48}
          height={48}
          className="rounded object-cover"
        />
        <Badge>{totalJobs} Jobs</Badge>
      </div>

      <div>
        <div className="text-lg font-semibold mb-1">{name}</div>
        <div
          className="line-clamp-3 text-sm text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>

      <div>
        <Badge variant="outline">{industry}</Badge>
      </div>
    </div>
  );
};

export default CompanyCard;
