import NextAuth from "next-auth";
declare module "next-auth" {
  interface Session {
    user: { id: any } & DefaultSession["user"];
  }
}
