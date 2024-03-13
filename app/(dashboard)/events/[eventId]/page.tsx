import { auth } from '@/auth';
import React, { Suspense } from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import TitleSection from '@/components/ui/TitleSection';
import CtaBtn from '@/components/ui/CtaBtn';
import Link from 'next/link';
import EventDetails from './EventDetails';

const page = async ({ params }: { params: { eventId: string } }) => {
  const session = await auth();

  const data = await fetch(
    `https://api.kalasa.gallery/api/admin/event/${params.eventId}`,
    {
      headers: {
        Authorization: `Bearer ${session?.api_token}`,
      },
    },
  );

  const event = await data.json();

  console.log('event', event.data);

  return (
    <div className="p-4 min-h-screen">
      <Breadcrumb
        items={[
          { name: 'Event', url: '/events', icon: '/vercel.svg' },
          { name: 'Event Info' },
        ]}
      />
      <TitleSection title="Event Infos">
        <CtaBtn>
          <Link href={`/events/${params?.eventId}/edit`}>Edit Event</Link>
        </CtaBtn>
      </TitleSection>
      <Suspense fallback={<div>Loading...</div>}>
        {event && (
          <EventDetails token={session?.api_token ?? ''} id={params?.eventId} />
        )}
      </Suspense>
    </div>
  );
};
export default page;
