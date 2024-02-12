'use client';

import React from 'react';
import { API } from '@/lib/routes';
import { get } from '@/utils/apiFetch';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import moment from 'moment';

type ArtistDetailProps = {
  token: string;
  id: string;
};

const ArtistDetail = ({ token, id }: ArtistDetailProps) => {
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

  const inputDateString = artist?.created_at;
  const inputDate = new Date(inputDateString);
  const formattedDate = moment(inputDate).format('MMM Do, YYYY');

  console.log('collection::', artist);
  return (
    <>
      <button className="text-sm text-[#D40000C7] underline float-right m-4">
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
            <div className="flex gap-5">
              <p
                className="text-xl"
                style={{
                  //* just temporary
                  fontFamily: 'cardo',
                }}
              >
                Added Date
              </p>
              <Image src={'/red_dot.svg'} width={10} height={10} alt="icon" />
              <p>{formattedDate}</p>
            </div>
            <div className="flex gap-5">
              <p
                className="text-xl"
                style={{
                  //* just temporary
                  fontFamily: 'cardo',
                }}
              >
                Total Artworks
              </p>
              <Image src={'/red_dot.svg'} width={10} height={10} alt="icon" />
              <p>{artist?.total_artworks}</p>
            </div>
            <div className="flex gap-5">
              <p
                className="text-xl"
                style={{
                  //* just temporary
                  fontFamily: 'cardo',
                }}
              >
                Sold Artworks
              </p>
              <Image src={'/red_dot.svg'} width={10} height={10} alt="icon" />
              <p>{artist?.sold_artworks}</p>
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
            Artist Description
          </p>
          <span className="leading-relaxed">{artist?.description}</span>
        </div>
      </div>
    </>
  );
};

export default ArtistDetail;
