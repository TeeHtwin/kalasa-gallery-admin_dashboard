'use client';

import { API } from '@/lib/routes';
import { get } from '@/utils/apiFetch';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

type EventDetailProps = {
  token: string;
  id: string;
};

const EventDetail = ({ token, id }: EventDetailProps) => {
  const { data: eventDetail, isLoading } = useQuery({
    queryKey: ['events', id],
    queryFn: () =>
      get(`${API.event}/${id}`, { Authorization: `Bearer ${token}` }),
  });

  if (isLoading) {
    return 'Retrieveing Event Info...';
  }

  return (
    <div>
      <strong>Title : </strong>
      <span>{eventDetail?.title}</span>
    </div>
  );
};

export default EventDetail;
