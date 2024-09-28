'use client';

import React from 'react';
import { API } from '@/lib/routes';
import { get, del } from '@/utils/apiFetch';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import GalleryCard from '@/components/common/GalleryCard';

type ArtistDetailProps = {
  token: string;
  id: string;
};

const ArtistDetail = ({ token, id }: ArtistDetailProps) => {
  const router = useRouter();

  const {
    data: artist,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['artist', id],
    queryFn: () =>
      get(`${API.artist}/${id}`, {
        Authorization: `Bearer ${token}`,
      }),
  });

  const handleDelete = async () => {
    const response = await del(`${API.artist}/${id}`, {
      Authorization: `Bearer ${token}`,
    });

    if (response?.success) {
      router.push('/artists');
    }
  };

  console.log('collection::', artist);
  return (
    <>
      <button
        className="text-sm text-[#D40000C7] underline float-right m-4"
        onClick={handleDelete}
      >
        Delete Artist
      </button>
      <div className="py-10">
        <div className="grid grid-cols-5 gap-2 pb-10">
          <Image
            src={artist?.profile_image}
            width={300}
            height={300}
            alt="image"
            className="aspect-square col-span-2 object-cover rounded-lg "
          />
          <div className="flex col-span-3 flex-col gap-3">
            <div className="flex gap-5">
              <p
                className="text-xl"
                style={{
                  //* just temporary
                  fontFamily: 'cardo',
                }}
              >
                Artist&apos; Name
              </p>
              <Image src={'/red_dot.svg'} width={10} height={10} alt="icon" />
              <p>{artist?.name}</p>
            </div>
          </div>
        </div>
        <hr />

        <div className="max-w-[60rem] py-10">
          <div className="columns-2 xl:columns-3 md:columns-2 sm:columns-2 gap-2 space-y-4 mt-5 lg:mt-10">
            {artist?.artworks.map((gallery: any) => (
              <GalleryCard key={gallery.id} info={gallery} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistDetail;
