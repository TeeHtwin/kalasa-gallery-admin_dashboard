import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOption: AuthOptions = {
  // pages: {
  //   signIn: '/login'
  // },

  session: {
    strategy: 'jwt',
    maxAge: 14 * 24 * 60 * 60, // 14 days
    updateAge: 24 * 60 * 60, // 24 hours
  },

  providers: [
    CredentialsProvider({
      id: 'credentials-login',
      type: 'credentials',
      name: 'Credentials',

      credentials: {
        username: { type: 'string' },
        password: { type: 'password' },
      },

      async authorize() {
        return {
          id: '1',
          name: 'alice',
        };
      },
    }),
  ],
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
