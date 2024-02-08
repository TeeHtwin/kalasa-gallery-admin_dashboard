import type { NextAuthConfig, Session } from 'next-auth';
import { NextRequest } from 'next/server';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({
      auth,
      request: { nextUrl },
    }: {
      auth: Session | null;
      request: NextRequest;
    }) {
      console.log('auth::', auth);
      const isLoggedIn = !!auth && nextUrl?.pathname !== '/login';
      const isOnDashboard = nextUrl.pathname.startsWith('/');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
