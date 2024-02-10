import NextAuth, { Session, User } from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;
        const user = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ email, password }),
          },
        )
          .then((res) => res.json())
          .then((user) => {
            return user;
          })
          .catch((error) => {
            return error;
          });
        if (user.status === 'success') {
          return { api_token: user.token, ...user.userData };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.includes('callbackUrl') ? baseUrl : url;
    },
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
  },
});
