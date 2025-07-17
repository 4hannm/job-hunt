"use client";
import React, { FC } from "react";
import TitleSection from "@/components/atoms/TitleSection";
import JobItem from "./JobItem";
import { JobType } from "@/types";
import useFeaturedJobs from "@/hooks/useFeaturedJobs";

const FeaturedJobs: FC = () => {
  const { jobs } = useFeaturedJobs();

  return (
    <div className="mt-32 mb-10 px-4">
      <TitleSection word1="Featured" word2="jobs" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
        {jobs.map((item: JobType) => (
          <JobItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
