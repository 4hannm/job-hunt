import { FC } from "react";

import TitleSection from "@/components/atoms/TitleSection";
import JobItem from "./JobItem";

import useFeaturedJobs from "@/hooks/useFeaturedJobs";
import { JobType } from "@/types";

interface FeaturedJobsProps {}

const FeaturedJobs: FC<FeaturedJobsProps> = ({}) => {
  // const { jobs, isLoading, error } = useFeaturedJobs();

  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Featured" word2="jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {[0, 1, 2, 3].map((item: JobType) => (
          <JobItem
            key={item}
            image="/images/company.png"
            jobType="Full Time"
            name="Email Marketing"
            type="Agency"
            location="Paris, France"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quis perspiciatis harum in id. Magni neque iste excepturi illum necessitatibus eos quae error, unde repudiandae? Numquam eveniet est facilis alias."
            categories={["Marketing", "Design"]}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
