import { auth } from '@/auth';
import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import EditArtist from './EditArtist';

export default async function page({
  params,
}: {
  params: { artistId: string };
}) {
  const session = await auth();
  return (
    <div className="px-4 overflow-scroll">
      <Breadcrumb
        items={[{ name: 'Artists', url: '/artists' }, { name: 'Edit artist' }]}
      />
      <EditArtist token={session?.api_token ?? ''} id={params?.artistId} />
    </div>
  );
}
