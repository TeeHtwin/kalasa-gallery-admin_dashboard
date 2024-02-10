import { API } from '@/lib/routes';
import { get } from '@/utils/apiFetch';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

type Props = {};

export default function Page({ params }: { params: { collectionId: string } }) {
  const {
    data: Collection,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['collections', params.collectionId],
    queryFn: () => get(`${API.collections}/${params.collectionId}`),
  });
  return <div>Collection {params.collectionId} page</div>;
}
