import { auth } from '@/auth';
import React from 'react';
import Artist from './Artist';

export default async function page() {
  const session = await auth();
  return <Artist token={session?.api_token ?? ''} />;
}
