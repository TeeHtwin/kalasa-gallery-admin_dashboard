import { auth } from '@/auth';
import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import TitleSection from '@/components/ui/TitleSection';
import CtaBtn from '@/components/ui/CtaBtn';
import Link from 'next/link';
import EventDetails from './EventDetails';

const page = async ({ params }: { params: { eventId: string } }) => {
  const session = await auth();

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
      <EventDetails token={session?.api_token ?? ''} id={params?.eventId} />
    </div>
  );
};
export default page;
