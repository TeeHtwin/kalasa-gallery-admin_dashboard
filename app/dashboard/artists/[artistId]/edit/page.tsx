import React from 'react';
import EditArtist from './EditArtist';
import { auth } from '@/auth';

export default async function Page({
  params,
}: {
  params: { artistId: string };
}) {
  const session = await auth();
  return (
    <EditArtist artistId={params?.artistId} token={session?.api_token ?? ''} />
  );
}
