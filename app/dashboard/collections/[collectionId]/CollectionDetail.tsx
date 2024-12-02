'use client';

import React from 'react';
import { API } from '@/lib/routes';
import { del, get } from '@/utils/apiFetch';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type CollectionDetailProps = {
  token: string;
  id: string;
};

const CollectionDetail = ({ token, id }: CollectionDetailProps) => {
  const router = useRouter();
  const {
    data: collection,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['collections', id],
    queryFn: () =>
      get(`${API.collections}/${id}`, {
        Authorization: `Bearer ${token}`,
      }),
  });

  const handleDelete = async () => {
    const response = await del(`${API.collections}/${id}`, {
      Authorization: `Bearer ${token}`,
    });

    if (response?.success) {
      router.push('/collections');
    }
  };

  return (
    <>
      <button
        className="text-sm text-[#D40000C7] underline float-right m-4"
        onClick={handleDelete}
      >
        Delete Collection
      </button>
      <div className="py-10">
        <div className="flex gap-8 pb-10">
          <Image src={collection?.image} width={300} height={300} alt="image" />
          <div className="flex flex-col gap-3">
            <h1
              className="text-primary text-2xl font-semibold"
              style={{
                //* just temporary
                fontFamily: 'cardo',
              }}
            >
              {collection?.title}
            </h1>
            <div className="flex gap-3">
              <p
                style={{
                  //* just temporary
                  fontFamily: 'cardo',
                }}
              >
                Title
              </p>
              <Image src={'/red_dot.svg'} width={10} height={10} alt="icon" />
              <p>{collection?.title}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="max-w-[60rem] py-10">
          <p
            className="text-primary text-2xl font-semibold pb-4"
            style={{
              //* just temporary
              fontFamily: 'cardo',
            }}
          >
            Description
          </p>
          <span className="leading-relaxed">{collection?.description}</span>
        </div>
      </div>
    </>
  );
};

export default CollectionDetail;
