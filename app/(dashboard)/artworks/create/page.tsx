import Breadcrumb from '@/components/ui/Breadcrumb';
import React from 'react';
import CreateArtwork from './CreateArtwork';
import { auth } from '@/auth';
import { API } from '@/lib/routes';
import { get } from '@/utils/apiFetch';

async function getArtists() {
  const session = await auth();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api${API.artist}`,
    {
      headers: {
        Authorization: `Bearer ${session?.api_token}`,
      },
    },
  );
  const data = await res.json();
  return data.data;
}

export default async function Page() {
  const session = await auth();
  const artists = await getArtists();

  return (
    <div className="px-4 overflow-scroll">
      <Breadcrumb
        items={[
          { name: 'Artworks', url: '/artworks' },
          { name: 'Create Artwork' },
        ]}
      />

      <CreateArtwork token={session?.api_token ?? ''} artists={artists} />
    </div>
  );
}
