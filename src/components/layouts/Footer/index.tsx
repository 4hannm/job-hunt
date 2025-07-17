import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const aboutLinks = [
  "Companies",
  "Pricing",
  "Terms",
  "Advice",
  "Privacy Policy",
];
const resourceLinks = ["Help Docs", "Guide", "Updates", "Contact Us"];
const socialMediaImg = [
  "/images/soc-Facebook.png",
  "/images/soc-Instagram.png",
  "/images/soc-Twitter.png",
  "/images/soc-LinkedIn.png",
  "/images/soc-Dribbble.png",
];

const Footer: FC = () => {
  return (
    <div className="bg-slate-900 px-4 sm:px-8 lg:px-32 pt-16 pb-11 text-sm sm:text-base">
      <div className="flex flex-col lg:flex-row flex-wrap gap-12 justify-between">
        <div className="max-w-md">
          <Image src="/images/logo2.png" alt="Logo" width={160} height={36} />
          <p className="text-muted mt-8 leading-relaxed">
            Great platform for the job seeker that passionate about startups.
            Find your dream job easier.
          </p>
        </div>
        <div>
          <div className="text-lg text-primary-foreground font-semibold mb-5">
            About
          </div>
          <div className="space-y-3">
            {aboutLinks.map((item, i) => (
              <Link key={i} href="/" className="block text-muted">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-lg text-primary-foreground font-semibold mb-5">
            Resources
          </div>
          <div className="space-y-3">
            {resourceLinks.map((item, i) => (
              <Link key={i} href="/" className="block text-muted">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-md">
          <div className="text-lg text-primary-foreground font-semibold mb-5">
            Get job notifications
          </div>
          <p className="text-muted mb-6">
            The latest job news, articles, sent to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Input
              placeholder="Email Address"
              className="py-5 w-full sm:w-auto"
            />
            <Button className="w-full sm:w-auto py-5">Subscribe</Button>
          </div>
        </div>
      </div>

      <Separator className="mt-20 mb-10 bg-gray-300" />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-slate-600 text-center">
          2021 @ JobHuntly. All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {socialMediaImg.map((item, i) => (
            <Image
              key={i}
              src={item}
              alt={`social-${i}`}
              width={32}
              height={32}
              className="inline"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
