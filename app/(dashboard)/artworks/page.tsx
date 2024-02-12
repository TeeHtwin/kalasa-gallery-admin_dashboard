import { auth } from '@/auth';
import React from 'react';
import Artwork from './Artwork';

export default async function page() {
  const session = await auth();
  return <Artwork token={session?.api_token ?? ''} />;
}
