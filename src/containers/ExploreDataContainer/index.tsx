/* eslint-disable @typescript-eslint/no-explicit-any */
import CompanyCard from "@/components/organisms/CompanyCard";
import FormFilterDynamic from "@/components/organisms/FormFilterDynamic";
import FormSearchDynamic from "@/components/organisms/FormSearchDynamic";
import JobCard from "@/components/organisms/JobCard";
import { filterFormType } from "@/types";
import Image from "next/image";
import React, { FC } from "react";

interface ExploreDataContainerProps {
  formFilter: any;
  onSubmitFilter: (val: any) => Promise<void>;
  filterForms: filterFormType[];
  loading: boolean;
  title: string;
  subtitle: string;
  data: any[];
  type: "job" | "company";
}

const ExploreDataContainer: FC<ExploreDataContainerProps> = ({
  formFilter,
  onSubmitFilter,
  filterForms,
  loading,
  subtitle,
  title,
  data,
  type,
}) => {
  return (
    <>
      <div className="bg-slate-100 px-4 md:px-8 lg:px-32 pt-16 pb-14">
        <div className="mb-10">
          <div className="mx-auto mb-11 text-center flex justify-center gap-2 flex-wrap">
            <span className="text-4xl md:text-5xl font-semibold">
              Find Your
            </span>
            <div className="relative">
              <span className="text-4xl md:text-5xl font-semibold text-primary">
                {title}
              </span>
              <div className="absolute top-8 w-[180px] md:w-[220px] h-8 md:h-10">
                <Image
                  src="/images/pattern2.png"
                  alt="/images/pattern2.png"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500">{subtitle}</div>
        </div>

        <div>
          <FormSearchDynamic />
        </div>
      </div>

      <div className="mt-20 mb-16 px-4 md:px-8 lg:px-32 flex flex-col lg:flex-row items-start gap-10">
        <div className="w-full lg:w-1/4">
          <FormFilterDynamic
            formFilter={formFilter}
            onSubmitFilter={onSubmitFilter}
            filterForms={filterForms}
          />
        </div>

        <div className="w-full lg:w-3/4">
          <div className="mb-8">
            <div className="text-2xl md:text-3xl font-semibold">
              All {type === "job" ? "Jobs" : "Companies"}
            </div>
            <div className="text-muted-foreground">
              Showing {data.length} Result
            </div>
          </div>

          <div>
            {loading ? (
              <div>Loading...</div>
            ) : type === "job" ? (
              <div className="grid grid-cols-1 gap-7">
                {data?.map((item: any, i: number) => (
                  <JobCard key={i} {...item} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {data?.map((item: any, i: number) => (
                  <CompanyCard key={i} {...item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreDataContainer;
