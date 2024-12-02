import { auth } from '@/auth';
import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import TitleSection from '@/components/ui/TitleSection';
import CtaBtn from '@/components/ui/CtaBtn';
import Link from 'next/link';
import ArtworkDetail from './ArtworkDetail';

export default async function Page({
  params,
}: {
  params: { artworkId: string };
}) {
  const session = await auth();
  return (
    <main className="p-8">
      <Breadcrumb
        items={[
          { name: 'Artworks', url: '/artworks', icon: '/vercel.svg' },
          { name: 'Artwork Info' },
        ]}
      />
      <TitleSection title="Artwork Infos">
        <CtaBtn>
          <Link href={`/artworks/${params?.artworkId}/edit`}>Edit Artwork</Link>
        </CtaBtn>
      </TitleSection>
      <ArtworkDetail token={session?.api_token ?? ''} id={params?.artworkId} />
    </main>
  );
}
