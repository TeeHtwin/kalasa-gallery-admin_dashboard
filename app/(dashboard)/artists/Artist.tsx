'use client';

import { get } from '@/utils/apiFetch';
import { API } from '@/lib/routes';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BaseTable from '@/components/common/BaseTable';
import { ArtistColumnRef } from './Columns';
import PageHeader from '@/components/common/PageHeader';
import CtaBtn from '@/components/ui/CtaBtn';
import Link from 'next/link';

type ArtistProps = {
  token: string;
};

const Artist = ({ token }: ArtistProps) => {
  console.log('token:', token);
  const {
    isLoading,
    data: artists,
    isError,
  } = useQuery({
    queryKey: ['artist'],
    initialData: {
      data: [],
      total: 0,
    },
    queryFn: () => get(`${API.artist}`, { Authorization: `Bearer ${token}` }),
  });

  if (isLoading) {
    return 'Retrieving data...';
  }
  console.log(artists);
  return (
    <div>
      <div className="px-4 min-h-screen">
        <PageHeader title="Artist" />
        <div className="flex justify-between h-5 items-center mb-5">
          <div>
            Total Artists{' '}
            <span className="border rounded-md text-primary px-4">
              {artists?.total}
            </span>
          </div>
          <CtaBtn>
            <Link href={`/artists/create`}>Create Artist</Link>
          </CtaBtn>
        </div>
        <BaseTable
          columns={ArtistColumnRef}
          data={artists}
          pagination={{
            current_page: artists?.current_page,
            total: artists?.total,
            pageCount: artists?.to,
          }}
        />
      </div>
    </div>
  );
};

export default Artist;
