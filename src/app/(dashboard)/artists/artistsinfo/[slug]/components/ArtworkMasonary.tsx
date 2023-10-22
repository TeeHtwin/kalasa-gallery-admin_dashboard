import React from 'react';
import { GalleryCard } from '@/components';
import { PageHeader } from '@/components/common';

const ArtworkMasonary = () => {
  return (
    <>
      <PageHeader title="Artworks" />
      <main className="arwork_card py-3 gap-2 columns-3">
        {Array.from({ length: 9 }).map((_, idx) => (
          // galllery card
          <GalleryCard key={idx} />
        ))}
      </main>
    </>
  );
};

export default ArtworkMasonary;
