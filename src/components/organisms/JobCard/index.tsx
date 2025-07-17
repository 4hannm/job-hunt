import React, { FC } from "react";
import { JobType } from "@/types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";

const JobCard: FC<JobType> = ({
  applicants,
  skills,
  image,
  jobType,
  location,
  name,
  needs,
  type,
  id,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/detail/job/" + id)}
      className="w-full border p-6 border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 hover:shadow-md transition"
    >
      <div className="flex flex-row items-start gap-4 flex-1">
        <div className="flex-shrink-0">
          <Image
            src={
              typeof image === "string" && image !== ""
                ? image
                : "/images/company.png"
            }
            alt="/images/company.png"
            width={48}
            height={48}
            className="rounded"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground mb-2">
            {type} · {location}
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <Badge variant="secondary">{jobType}</Badge>
            <Separator orientation="vertical" className="h-4" />
            {skills.map((item: string, i: number) => (
              <Badge key={i}>{item}</Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full sm:w-[200px]">
        <Button className="w-full" size="lg">
          Apply
        </Button>
        <Progress value={(applicants / needs) * 100} className="mt-2" />
        <div className="text-gray-500 text-sm text-center mt-2">
          <span className="text-black font-semibold">{applicants} applied</span>{" "}
          of {needs} capacity
        </div>
      </div>
    </div>
  );
};

export default JobCard;