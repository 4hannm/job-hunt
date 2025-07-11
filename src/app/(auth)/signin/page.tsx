"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSignInSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface SignInPageProps {}

const SignInPage: FC<SignInPageProps> = ({}) => {
  const form = useForm<z.infer<typeof formSignInSchema>>({
    resolver: zodResolver(formSignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { toast } = useToast();

  const router = useRouter();

  const onSubmit = async (val: z.infer<typeof formSignInSchema>) => {
    console.log(val);
    const authenticated = await signIn("credentials", {
    	...val,
    	redirect: false,
    });

    if (authenticated?.error) {
    	toast({
    		title: "Error",
    		description: "Email or password maybe wrong",
    	});

    	return;
    }

    router.push("/");
  };

  return (
    <div>
      <div className="text-3xl text-center font-semibold mb-7">
        Welcome Back, JobHunter
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Sign In
          </Button>

          <div className="text-gray-500 text-sm mt-6">
            Don`t have an account{" "}
            <Link href="/signup" className="text-primary font-medium">
              Sign Up
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignInPage;
