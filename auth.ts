
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { authConfig } from './auth.config';
import NextAuth, { type DefaultSession, Session } from 'next-auth';




export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string() })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          //const url = 'https://staging.kalasa.gallery/api/login';
          console.log(email, password);
          const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`;
          const res = await fetch(url, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ email, password }),
          });

          const user = await res.json();
          return user;
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, session, trigger }) {
      if (trigger === 'update') {
        return { ...token, ...session };
      }
      if (account) {
        token.api_token = user.api_token;
      }
      return token;
    },
    async session(sessionArgs) {
      // token only exists when the strategy is jwt and not database, so sessionArgs here will be { session, token }
      // with a database strategy it would be { session, user }
      if ('token' in sessionArgs) {
        let session = sessionArgs.session;
        session.api_token = sessionArgs.token.api_token as string;
      }
      return sessionArgs.session;
    },
  }
});
