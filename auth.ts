import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;
        const user = await fetch(`https://staging.kalasa.gallery/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({ email, password }),
        })
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
    async jwt({ token, user, account, profile, session }) {
      if (account) {
        token.api_token = user.api_token;
      }
      return token;
    },
    async session({ session, user, token }) {
      if (token) {
        session.api_token = token?.api_token;
      }
      return session;
    },
  },
});
