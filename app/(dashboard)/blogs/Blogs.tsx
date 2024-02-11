'use client';

import { get } from '@/utils/apiFetch';
import { API } from '@/lib/routes';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BaseTable from '@/components/common/BaseTable';
import { BlogColumnRef } from './BlogColumns';
import PageHeader from '@/components/common/PageHeader';
import CtaBtn from '@/components/ui/CtaBtn';
import Link from 'next/link';

type TokenProps = {
  token: string;
};

const Blogs = ({ token }: TokenProps) => {
  console.log('token:', token);
  const {
    isLoading,
    data: blogs,
    isError,
  } = useQuery({
    queryKey: ['blogs'],
    initialData: {
      data: [],
      total: 0,
    },
    queryFn: () =>
      get(`${API.blogs}`, { Authorization: `Bearer ${token}` }),
  });

  if (isLoading) {
    return 'Retrieving data...';
  }
  return (
    <div>
      <div className="px-4 min-h-screen">
        <PageHeader title="Blogs" />
        <div className="flex justify-between h-5 items-center mb-5">
          <div>
            Total Collections{' '}
            <span className="border rounded-md text-primary px-4">
              {blogs?.total}
            </span>
          </div>
          <CtaBtn>
            <Link href={`/blogs/create`}>Create Collection</Link>
          </CtaBtn>
        </div>
        {Array.isArray(blogs?.data) && (
          <BaseTable
            columns={BlogColumnRef}
            data={blogs?.data}
            pagination={{
              current_page: blogs?.current_page,
              total: blogs?.total,
              pageCount: blogs?.to,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Blogs;
