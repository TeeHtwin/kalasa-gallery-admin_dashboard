import { auth } from '@/auth';
import React from 'react';
import Collections from './Collections';

export default async function page() {
  const session = await auth();
  return <Collections token={session?.api_token ?? ''} />;
}
