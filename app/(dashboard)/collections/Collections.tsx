'use client';

import { get } from '@/utils/apiFetch';
import { API } from '@/lib/routes';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BaseTable from '@/components/common/BaseTable';
import { CollectionColumnRef } from './Columns';

type CollectionsProps = {
  token: string;
};

const Collections = ({ token }: CollectionsProps) => {
  console.log('token:', token);
  const {
    isLoading,
    data: collections,
    isError,
  } = useQuery({
    queryKey: ['collections'],
    queryFn: () =>
      get(`${API.collections}`, { Authorization: `Bearer ${token}` }),
  });

  if (isLoading) {
    return 'Retrieving data...';
  }

  console.log('collections::', collections);

  return (
    <div>
      <div className="px-4 min-h-screen">
        <div className="grow py-6 flex flex-col gap-14">
          <div className="flex flex-col gap-4">
            <h1
              className="text-heading font-heading text-primary text-3xl"
              style={{ fontFamily: 'cardo' }}
            >
              Collections
            </h1>
          </div>
        </div>
        <BaseTable
          columns={CollectionColumnRef}
          data={collections?.data}
          pagination={{
            current_page: collections?.current_page,
            total: collections?.total,
            pageCount: collections?.to,
          }}
        />
      </div>
    </div>
  );
};

export default Collections;
