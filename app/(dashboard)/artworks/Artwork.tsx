'use client';

import { get } from '@/utils/apiFetch';
import { API } from '@/lib/routes';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BaseTable from '@/components/common/BaseTable';
import { ArtworkColumnRef } from './Columns';
import PageHeader from '@/components/common/PageHeader';
import CtaBtn from '@/components/ui/CtaBtn';
import Link from 'next/link';

type ArtworkProps = {
  token: string;
};

const Artwork = ({ token }: ArtworkProps) => {
  const [pagination, setPagination] = useState({
    totalCount: 0,
    currentPage: 1,
    totalPage: 1,
  });
  const {
    isLoading,
    data: artworks,
    isError,
  } = useQuery({
    queryKey: ['artworks', pagination?.currentPage],
    initialData: {
      data: [],
      ...pagination,
    },
    queryFn: () =>
      get(`${API.artwork}?page=${pagination?.currentPage}`, {
        Authorization: `Bearer ${token}`,
      }),
  });

  if (isLoading) {
    return 'Retrieving data...';
  }
  console.log(artworks);

  return (
    <div>
      <div className="px-4 min-h-screen">
        <PageHeader title="Artworks" />
        <div className="flex justify-between h-5 items-center mb-5">
          <div>
            Total Artworks{' '}
            <span className="border rounded-md text-primary px-4">
              {artworks?.total}
            </span>
          </div>
          <CtaBtn>
            <Link href={`/artworks/create`}>Create Artwork</Link>
          </CtaBtn>
        </div>
        <BaseTable
          columns={ArtworkColumnRef}
          data={artworks}
          pagination={{
            current_page: artworks?.current_page,
            total: artworks?.total,
            pageCount: artworks?.per_page,
          }}
          onPageChange={(page) =>
            setPagination((prev) => {
              return { ...prev, currentPage: page };
            })
          }
        />
      </div>
    </div>
  );
};

export default Artwork;
