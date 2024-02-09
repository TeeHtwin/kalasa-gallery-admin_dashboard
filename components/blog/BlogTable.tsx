'use client';

import { API } from '@/lib/routes';
import { useQuery } from '@tanstack/react-query';
import { get } from '@/utils/apiFetch';
import BaseTable from '../common/BaseTable';
import { BlogColumnRef } from './BlogColum';

type TokenProps = {
  token: string;
};

const BlogTable = ({ token }: TokenProps) => {
  const {
    isLoading,
    data: blogs,
    isError,
  } = useQuery({
    queryKey: ['collections'],
    queryFn: () => get(`${API.blogs}`, { Authorization: `Bearer ${token}` }),
  });

  if (isLoading) {
    return 'Retrieving data...';
  }

  return (
    <>
      <BaseTable
        columns={BlogColumnRef}
        data={blogs?.data}
        pagination={{
          current_page: blogs?.current_page,
          total: blogs?.total,
          pageCount: blogs?.to,
        }}
      />
    </>
  );
};
export default BlogTable;
