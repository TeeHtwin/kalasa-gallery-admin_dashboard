import Breadcrumb from '@/components/ui/Breadcrumb';
import React from 'react';
import CreateArtwork from './CreateArtwork';
import { auth } from '@/auth';

export default async function page() {
  const session = await auth();
  return (
    <div className="px-4 overflow-scroll">
      <Breadcrumb
        items={[
          { name: 'Artworks', url: '/artworks' },
          { name: 'Create Artwork' },
        ]}
      />

      <CreateArtwork token={session?.api_token ?? ''} />
    </div>
  );
}
