import NextAuth from "next-auth/next";
import { Options } from "../protected/Protect";

export const handler = NextAuth(Options);

export { handler as GET, handler as POST };
