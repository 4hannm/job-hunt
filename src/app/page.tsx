import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/organisms/Hero";
import Clients from "@/components/organisms/Clients";
import Category from "@/components/organisms/Category";
import BannerSignUp from "@/components/organisms/BannerSignUp";
import FeaturedJobs from "@/components/organisms/FeaturedJobs";
import LatestJobs from "@/components/organisms/LatestJobs";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <div className="px-32 mb-10" >
      <Hero />
      <Clients />
      <Category/>
      <BannerSignUp/>
      <FeaturedJobs/>
      <LatestJobs/>
      <Footer/>
      
    </div>
  );
}
