'use client';

import BaseTable from '@/components/common/BaseTable';
import PageHeader from '@/components/common/PageHeader';
import CtaBtn from '@/components/ui/CtaBtn';
import { API } from '@/lib/routes';
import { get } from '@/utils/apiFetch';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ContactColumnRef } from './Columns';

type ContactsProps = {
  token: string;
};

export default function Contacts({ token }: ContactsProps) {
  const router = useRouter();
  const {
    isLoading,
    data: contacts,
    isError,
  } = useQuery({
    initialData: {
      data: [],
      total: 0,
    },
    queryKey: ['contacts'],
    queryFn: () => get(`${API.contacts}`, { Authorization: `Bearer ${token}` }),
  });

  if (isLoading) {
    return 'Retrieving Data...';
  }

  if (isError) {
    router.push(`/contacts`);
  }

  console.log('contact::', contacts?.data);

  return (
    <div>
      <div className="min-h-screen">
        <PageHeader title="Contacts" />
        <div className="flex justify-between h-5 items-center mb-5">
          <div>
            Total Contacts{' '}
            <span className="border rounded-md text-primary px-4">
              {contacts?.total}
            </span>
          </div>
        </div>
        {Array.isArray(contacts?.data) && (
          <BaseTable
            columns={ContactColumnRef}
            data={contacts?.data}
            pagination={{
              current_page: contacts?.current_page,
              total: contacts?.total,
              pageCount: contacts?.to,
            }}
          />
        )}
      </div>
    </div>
  );
}
