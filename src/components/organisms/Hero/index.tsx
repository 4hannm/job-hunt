import React, { FC } from "react";
import Image from "next/image";
import FormSearch from "../FormSearch";

const Hero: FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-slate-600 leading-tight relative">
          Discover <br /> more than <br />
          <span className="text-primary">5000+</span>
        </h1>

        <div className="flex justify-center lg:justify-start">
          <Image
            src="/images/pattern2.png"
            alt="/images/pattern2.png"
            width={300}
            height={32}
            className="mb-5"
          />
        </div>

        <p className="text-muted-foreground text-base sm:text-lg mb-4">
          Great platform for the job seeker that searching for{" "}
          <br className="hidden sm:block" />
          new career heights and passionate about startups.
        </p>

        <FormSearch />
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <Image
          src="/images/hero.png"
          alt="/images/hero.png"
          width={300}
          height={420}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
