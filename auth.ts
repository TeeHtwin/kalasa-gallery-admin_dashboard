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
          .catch((error) => console.log('error', error));

        if (user.status === 'success') {
          return user;
        }
      },
    }),
  ],
});
