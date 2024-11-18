'use client';

import { get } from '@/utils/apiFetch';
import { API } from '@/lib/routes';
import { useQuery } from '@tanstack/react-query';
import React, { useState, useCallback, useMemo } from 'react';
import BaseTable from '@/components/common/BaseTable';
import { ArtworkColumnRef } from './Columns';
import PageHeader from '@/components/common/PageHeader';
import CtaBtn from '@/components/ui/CtaBtn';
import Link from 'next/link';
import HeroSearch from '@/components/common/HeroSearch';

type ArtworkProps = {
  token: string;
};

const Artwork = React.memo(({ token }: ArtworkProps) => {
  const [pagination, setPagination] = useState({
    totalCount: 0,
    currentPage: 1,
    totalPage: 1,
  });

  const [keyword, setKeyword] = useState<string>('');
  const {
    isLoading,
    data: artworks,
    isError,
  } = useQuery({
    queryKey: ['artworks', pagination.currentPage, keyword],
    initialData: {
      data: [],
      ...pagination,
    },
    queryFn: () =>
      get(
        `${API.artwork}/search-by-name?page=${pagination.currentPage}&q=${keyword}`,
        {
          Authorization: `Bearer ${token}`,
        },
      ),
    keepPreviousData: true,
  });

  const handlePageChange = useCallback((page: number) => {
    setPagination((prev) => ({ ...prev, currentPage: page }));
  }, []);

  const memoizedColumns = useMemo(() => ArtworkColumnRef(token), [token]);

  if (isLoading) {
    return 'Retrieving data...';
  }

  if (isError) {
    return 'An error occurred while fetching data.';
  }

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
          <HeroSearch
            name="Search Artwork"
            placeholder="Search Artwork"
            setKeyword={setKeyword}
          />
          <CtaBtn>
            <Link href={`/artworks/create`}>Create Artwork</Link>
          </CtaBtn>
        </div>
        <BaseTable
          columns={memoizedColumns}
          data={artworks?.data || []}
          pagination={{
            current_page: artworks?.current_page,
            total: artworks?.total,
            pageCount: artworks?.per_page,
          }}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
});

Artwork.displayName = 'Artwork';

export default Artwork;
