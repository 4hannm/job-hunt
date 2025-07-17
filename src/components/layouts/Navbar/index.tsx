"use client";

import MenuAuth from "@/components/organisms/MenuAuth";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

const Navbar: FC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);

  return (
    <header className="w-full px-4 sm:px-6 lg:px-32 py-4 flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-6">
        <Link href="/" >
          <Image
            src="/images/logo2.png"
            alt="/images/logo2.png"
            width={140}
            height={36}
            className="w-auto h-8"
          />
        </Link>

        <nav className="flex gap-4 text-sm sm:text-base">
          <Link href="/find-jobs" className="text-gray-600 hover:text-black">
            Find Jobs
          </Link>
          <Link
            href="/find-companies"
            className="text-gray-600 hover:text-black"
          >
            Browse Companies
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-3 text-sm">
        {session ? (
          <MenuAuth />
        ) : (
          <>
            <Button
              onClick={() => router.push("/signin")}
              variant="link"
              className="text-sm px-2"
            >
              Login
            </Button>
            <Button className="text-sm px-4 py-2">Sign Up</Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
