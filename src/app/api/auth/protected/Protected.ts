import CredentialsProvider from 'next-auth/providers/credentials';
import { AuthOptions, getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const authOption: AuthOptions = {
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
        username: {
          label: 'username',
          type: 'string',
          placeholder: 'username',
        },
        password: {
          label: 'password',
          type: 'password',
          placeholder: 'password',
        },
      },

      async authorize(credentials) {
        if (!(credentials?.username && credentials.password)) return null;
        // this should be the defined user in the database
        const user = { id: '1', username: 'thomas', password: 'thomas' };

        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return user;
        }
        return null;
      },
    }),
  ],
};

export const loginRequiredInServer = async () => {
  const session = await getServerSession(authOption);
  if (!session) return redirect('/login');
};
