'use client';

import { get } from '@/utils/apiFetch';
import { API } from '@/lib/routes';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BaseTable from '@/components/common/BaseTable';
import { CollectionColumnRef } from './Columns';
import PageHeader from '@/components/common/PageHeader';
import CtaBtn from '@/components/ui/CtaBtn';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type CollectionsProps = {
  token: string;
};

const Collections = ({ token }: CollectionsProps) => {
  const router = useRouter();
  const [pagination, setPagination] = useState({
    totalCount: 0,
    currentPage: 1,
    totalPage: 1,
  });
  const {
    isLoading,
    data: collections,
    isError,
  } = useQuery({
    queryKey: ['collections', pagination?.currentPage],
    initialData: {
      data: [],
      total: 0,
    },
    queryFn: () =>
      get(`${API.collections}?page=${pagination?.currentPage}`, {
        Authorization: `Bearer ${token}`,
      }),
  });

  if (isLoading) {
    return 'Retrieving data...';
  }

  if (isError) {
    router.push('/collections');
  }
  return (
    <div>
      <div className="px-4 min-h-screen">
        <PageHeader title="Collections" />
        <div className="flex justify-between h-5 items-center mb-5">
          <div>
            Total Collections{' '}
            <span className="border rounded-md text-primary px-4">
              {collections?.total}
            </span>
          </div>
          <CtaBtn>
            <Link href={`/collections/create`}>Create Collection</Link>
          </CtaBtn>
        </div>
        {Array.isArray(collections?.data) && (
          <BaseTable
            columns={CollectionColumnRef}
            data={collections?.data}
            pagination={{
              current_page: collections?.current_page,
              total: collections?.total,
              pageCount: collections?.to,
            }}
            onPageChange={(page) => {
              setPagination((prev) => {
                return { ...prev, currentPage: page };
              });
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Collections;
