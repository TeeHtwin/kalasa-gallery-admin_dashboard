'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { cookies } from 'next/headers';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    console.log(
      'called action ====================================================:w',
    );
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid Credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function logout() {
  cookies().set('session', '', { expires: new Date() });
}
