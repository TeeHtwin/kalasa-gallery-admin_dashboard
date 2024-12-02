// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';
// import { NextRequest } from 'next/server';
// import { updateSession } from './lib/actions';
//
// export async function middleware(request: NextRequest) {
//   return await updateSession(request);
// }

import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
