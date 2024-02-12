import Breadcrumb from '@/components/ui/Breadcrumb';
import React from 'react';
import CreateArtist from './CreateArtist';
import { auth } from '@/auth';

export default async function page() {
  const session = await auth();
  return (
    <div className="px-4 overflow-scroll">
      <Breadcrumb
        items={[
          { name: 'Artist', url: '/artist' },
          { name: 'Create an Artist' },
        ]}
      />

      <CreateArtist token={session?.api_token ?? ''} />
    </div>
  );
}
