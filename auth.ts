
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { authConfig } from './auth.config';
import NextAuth, {type DefaultSession } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      api_token: string;
    } & DefaultSession['user'];
  }
}

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

          const response = await res.json();
          const user = {
            name: response.userData.name,
            email: response.userData.email,
            api_token: response.token,
          };
          console.log(user);
          return user;
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
  callbacks: {

    async session({session, token }) {
      session.user.api_token = await token.api_token
      return session
    },
  }
});
