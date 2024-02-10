import { auth } from '@/auth';
import React from 'react';
import Contacts from './Contacts';

export default async function page() {
  const session = await auth();
  return <Contacts token={session?.api_token ?? ''} />;
}
