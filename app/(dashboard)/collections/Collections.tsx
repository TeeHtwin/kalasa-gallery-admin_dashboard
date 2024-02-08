'use client';

import { post } from '@/hooks/apiFetch';
import { API } from '@/lib/routes';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

type CollectionsProps = {
  token: string;
};

export default function Collections({ token }: CollectionsProps) {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['collections'],
    queryFn: () =>
      post(`${API.collections}`, { Authorization: `Bearer ${token}` }, ''),
  });

  return <div>Collections</div>;
}
