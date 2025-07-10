"use client";

import { CATEGORIES_OPTIONS } from "@/constansts";
import ExploreDataContainer from "@/containers/ExploreDataContainer";
import useCategoryJobFilter from "@/hooks/useCategoryJobFilter";
import useJobs from "@/hooks/useJobs";
import { formFilterSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FILTER_FORMS: filterFormType[] = [
  {
    name: "categories",
    label: "categories",
    items: CATEGORIES_OPTIONS,
  },
];

export default function FindJobsPage() {
  const formFilter = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  // const { filters } = useCategoryJobFilter();

  // const [categories, setCategories] = useState<string[]>([]);

  // const { jobs, isLoading, mutate } = useJobs(categories);

  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) => {
    setCategories(val.categories);
  };

  // useEffect(() => {
  // 	mutate();
  // }, [categories]);
  const dummyData: JobType[] = [
    {
      applicants: 5,
      categories: ["Marketing", "Design"],
      desc: "Lorem",
      image: "/images/company2.png",
      jobType: "Full-Time",
      location: "Paris, France",
      name: "Social Media Assistant",
      needs: 10,
      type: "Agency",
    },
  ];

  return (
    <ExploreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForms={FILTER_FORMS}
      title="dream job"
      subtitle="Find your next career at companies like HubSpot, Nike,
		and Dropbox"
      loading={false}
      type="job"
      data= {dummyData}
    />
  );
}
