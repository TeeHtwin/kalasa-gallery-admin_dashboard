'use client';

import { get } from '@/utils/apiFetch';
import React, { useState } from 'react';
import { API } from '@/lib/routes';
import { useQuery } from '@tanstack/react-query';
import BaseTable from '@/components/common/BaseTable';
import PageHeader from '@/components/common/PageHeader';
import CtaBtn from '@/components/ui/CtaBtn';
import Link from 'next/link';
import { EventColumnRef } from './Columns';

type EventsProps = {
  token: string;
};

const EventsTable = ({ token }: EventsProps) => {
  const [pagination, setPagination] = useState({
    totalCount: 0,
    currentPage: 1,
    totalPage: 1,
  });
  const {
    isLoading,
    data: events,
    isError,
  } = useQuery({
    queryKey: ['events'],
    initialData: {
      data: [],
      total: 0,
    },
    queryFn: () => get(`${API.events}`, { Authorization: `Bearer ${token}` }),
  });

  if (isLoading) {
    return 'Retrieving data...';
  }


  return (
    <div className="px-4 min-h-screen">
      <PageHeader title="Events" />
      <div className="flex justify-between h-5 items-center mb-5">
        <div>
          Total Events{' '}
          <span className="border rounded-md text-primary px-4">
            {events?.total}
          </span>
        </div>
        <CtaBtn>
          <Link href={`/events/create`}>Create Event</Link>
        </CtaBtn>
      </div>
      {Array.isArray(events?.data) && (
        <BaseTable
          columns={EventColumnRef}
          data={events?.data}
          pagination={{
            current_page: events?.current_page,
            total: events?.total,
            pageCount: events?.to,
          }}
          onPageChange={(page) => {
            setPagination((prev) => {
              return { ...prev, currentPage: page };
            });
          }}
        />
      )}
    </div>
  );
};

export default EventsTable;
