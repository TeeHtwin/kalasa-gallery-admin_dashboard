import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

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
          console.log('user auth ::: ', res);

          const response = await res.json();
          const user = {
            name: response.userData.name,
            email: response.userData.email,
          };
          console.log(user);
          return user;
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
