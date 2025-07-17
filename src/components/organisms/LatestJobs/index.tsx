"use client";

import TitleSection from "@/components/atoms/TitleSection";
import React, { FC } from "react";
import JobItem from "./JobItem";
import useFeaturedJobs from "@/hooks/useFeaturedJobs";
import { JobType } from "@/types";

const LatestJobs: FC = () => {
  const { jobs } = useFeaturedJobs();

  return (
    <div className="py-16 mt-32 mb-10 relative px-4">
      <TitleSection word1="Latest" word2="jobs open" />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {jobs.map((item: JobType) => (
          <JobItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
