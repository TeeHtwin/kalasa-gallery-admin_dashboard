import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import CredentialsProvider from 'next-auth/providers/credentials';

export const Options = {
  secret: 'saflasdfsdaf',
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'enter your email',
        },
        password: {
          label: 'password',
          type: 'password',
          placeholder: 'enter your password',
        },
      },
      async authorize(credentials) {
        const user = { id: '1', email: 'test@test.com', password: 'test' };

        if (
          user.email === credentials?.email &&
          user.password === credentials.password
        ) {
          return user;
        }
        return null;
      },
    }),
  ],
};

export const loginRequiredServer = async () => {
  const session = await getServerSession(Options);
  if (!session) return redirect('/login');
};
