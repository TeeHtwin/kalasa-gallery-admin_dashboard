import { auth } from '@/auth';
import React from 'react';
import EventDetail from './EventDetail';

export default async function page({
  params,
}: {
  params: { eventId: string };
}) {
  const session = await auth();

  return <EventDetail token={session?.api_token ?? ''} id={params?.eventId} />;
}
