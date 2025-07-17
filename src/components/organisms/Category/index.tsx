"use client";

import { FC, useMemo } from "react";

import useSWR from "swr";

import TitleSection from "@/components/atoms/TitleSection";
import CategoryItem from "./Categoryitem";
import { fetcher, parsingCategories } from "@/lib/utils";
import { categoryJobType } from "@/types";

const Category: FC = () => {
  const { data, isLoading, error } = useSWR("/api/jobs/categories", fetcher);

  const categories = useMemo(
    () => parsingCategories(data, isLoading, error),
    [data, isLoading, error]
  );

  return (
    <div className="mt-32 mb-8 px-4">
      <TitleSection word1="Explore by" word2="category" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-12">
        {categories.map((item: categoryJobType) => (
          <CategoryItem
            key={item.id}
            name={item.name}
            totalJobs={item.totalJobs}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
