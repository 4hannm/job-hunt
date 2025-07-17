import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { FC } from "react";

const BannerSignUp: FC = () => {
  return (
    <div className="mt-32 mb-10 bg-primary text-primary-foreground px-4 sm:px-8 lg:px-16 pt-16 flex flex-col lg:flex-row justify-between items-center gap-10 rounded-xl">
      <div className="text-center lg:text-left">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Start posting <br /> jobs today
        </div>
        <div className="my-4 sm:my-6 text-sm sm:text-base">
          Start posting job for only $10
        </div>
        <Button
          size="lg"
          variant="secondary"
          className="hover:text-primary text-primary"
        >
          Sign Up for Free
        </Button>
      </div>

      <div className="max-w-[90%] sm:max-w-[70%] lg:max-w-[500px]">
        <Image
          src="/images/dashboard.png"
          alt="dashboard"
          width={500}
          height={300}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default BannerSignUp;
