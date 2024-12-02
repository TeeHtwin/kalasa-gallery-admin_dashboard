import { auth } from '@/auth';
import React from 'react';
import CollectionDetail from './CollectionDetail';
import Breadcrumb from '@/components/ui/Breadcrumb';
import TitleSection from '@/components/ui/TitleSection';
import CtaBtn from '@/components/ui/CtaBtn';
import Link from 'next/link';

export default async function Page({
  params,
}: {
  params: { collectionId: string };
}) {
  const session = await auth();
  return (
    <main className="p-8">
      <Breadcrumb
        items={[
          { name: 'Collection', url: '/collections', icon: '/vercel.svg' },
          { name: 'Collection Info' },
        ]}
      />
      <TitleSection title="Collection Infos">
        <CtaBtn>
          <Link href={`/collections/${params?.collectionId}/edit`}>
            Edit Collection
          </Link>
        </CtaBtn>
      </TitleSection>
      <CollectionDetail
        token={session?.api_token ?? ''}
        id={params?.collectionId}
      />
    </main>
  );
}
