import { auth } from '@/auth';
import React from 'react';
import Artwork from './Artwork';
import { getSession } from 'next-auth/react';

export default async function page() {
  const session = await auth()

  console.log('session ::::: ',session);
  return <Artwork token={session?.api_token ?? ''} />;
}
