import { auth } from '@/auth';
import React from 'react';
import ArtistDetail from './ArtistDetail';
import Breadcrumb from '@/components/ui/Breadcrumb';
import TitleSection from '@/components/ui/TitleSection';
import CtaBtn from '@/components/ui/CtaBtn';
import Link from 'next/link';

export default async function Page({
  params,
}: {
  params: { artistId: string };
}) {
  const session = await auth();
  return (
    <main className="p-8">
      <Breadcrumb
        items={[{ name: 'Artist', url: '/artists' }, { name: "Artist's Info" }]}
      />
      <TitleSection title="Artist's Infos">
        <CtaBtn>
          <Link href={`/artists/${params?.artistId}/edit`}>Edit Artist</Link>
        </CtaBtn>
      </TitleSection>
      <ArtistDetail token={session?.api_token ?? ''} id={params?.artistId} />
    </main>
  );
}
