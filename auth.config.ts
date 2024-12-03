import type { NextAuthConfig, Session } from 'next-auth';
import { NextRequest } from 'next/server';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl }}:{auth:Session | null; request: NextRequest}) {
      console.log('auth user :::: ', auth);
      const isLoggedIn = !!auth?.user;
      console.log('is loggendIN??????', isLoggedIn);
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      console.log('is log in', isLoggedIn);
      console.log('is on dashboard', isOnDashboard);
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
