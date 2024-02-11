'use client';

import React from 'react';
import { API } from '@/lib/routes';
import { del, get } from '@/utils/apiFetch';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import moment from 'moment';

type ArtworkDetailProps = {
  token: string;
  id: string;
};

const ArtworkDetail = ({ token, id }: ArtworkDetailProps) => {
  const router = useRouter();
  const {
    data: artwork,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['artwork', id],
    queryFn: () =>
      get(`${API.artwork}/${id}`, {
        Authorization: `Bearer ${token}`,
      }),
  });

  const handleDelete = async () => {
    const response = await del(`${API.artwork}/${id}`, {
      Authorization: `Bearer ${token}`,
    });

    if (response?.success) {
      router.push('/artworks');
    }
  };
  const inputDateString = artwork?.created_at;
  const inputDate = new Date(inputDateString);
  const formattedDate = moment(inputDate).format('MMM Do, YYYY');

  return (
    <>
      <button
        className="text-sm text-[#D40000C7] underline float-right m-4"
        onClick={handleDelete}
      >
        Delete Artwork
      </button>
      <div className="py-8">
        <div className="flex gap-8 pb-10">
          <Image
            src={`https://staging.kalasa.gallery/storage/${artwork?.image}`}
            width={300}
            height={300}
            alt="image"
          />
          <div className="flex flex-col gap-3">
            <h1
              className="text-primary text-2xl font-semibold"
              style={{
                //* just temporary
                fontFamily: 'cardo',
              }}
            >
              {artwork?.name}
            </h1>
            <div className="flex gap-3">
              <p
                style={{
                  //* just temporary
                  fontFamily: 'cardo',
                }}
              >
                Contact Emails
              </p>
              <Image src={'/red_dot.svg'} width={10} height={10} alt="icon" />
              <p>{artwork?.category_id}</p>
            </div>
          </div>
        </div>
        <hr />
        <h1
          className="text-primary mt-7 text-2xl font-semibold"
          style={{
            //* just temporary
            fontFamily: 'cardo',
          }}
        >
          Posts information
        </h1>
        <div className="grid grid-cols-2 mt-5 mb-7">
          <div className="text-lg flex-col flex gap-2">
            <div className="flex gap-3">
              <p
                style={{
                  //* just temporary
                  fontFamily: 'cardo',
                }}
              >
                Artwork Name
              </p>
              <Image src={'/red_dot.svg'} width={10} height={10} alt="icon" />
              <p>{artwork?.name}</p>
            </div>
            <div className="flex gap-3">
              <p
                style={{
                  //* just temporary
                  fontFamily: 'cardo',
                }}
              >
                Artwork&apos;s Year
              </p>
              <Image src={'/red_dot.svg'} width={10} height={10} alt="icon" />
              <p>{artwork?.year}</p>
            </div>
            <div className="flex gap-3">
              <p
                style={{
                  //* just temporary
                  fontFamily: 'cardo',
                }}
              >
                Medium
              </p>
              <Image src={'/red_dot.svg'} width={10} height={10} alt="icon" />
              <p>{artwork?.category_id}</p>
            </div>
            <div className="flex gap-3">
              <p
                style={{
                  //* just temporary
                  fontFamily: 'cardo',
                }}
              >
                Size
              </p>
              <Image src={'/red_dot.svg'} width={10} height={10} alt="icon" />
              <p>{artwork?.size}</p>
            </div>
          </div>

          <div className="text-lg flex-col flex gap-2">
            <div className="flex gap-3">
              <p
                style={{
                  //* just temporary
                  fontFamily: 'cardo',
                }}
              >
                Post Status
              </p>
              <Image src={'/red_dot.svg'} width={10} height={10} alt="icon" />
              <p>{artwork?.status}</p>
            </div>
            <div className="flex gap-3">
              <p
                style={{
                  //* just temporary
                  fontFamily: 'cardo',
                }}
              >
                Artist&apos;s Name
              </p>
              <Image src={'/red_dot.svg'} width={10} height={10} alt="icon" />
              <p>{artwork?.artist_id}</p>
            </div>
            <div className="flex gap-3">
              <p
                style={{
                  //* just temporary
                  fontFamily: 'cardo',
                }}
              >
                Posted Date
              </p>

              <Image src={'/red_dot.svg'} width={10} height={10} alt="icon" />
              <p>{formattedDate}</p>
            </div>
            <div className="flex gap-3">
              <p
                style={{
                  //* just temporary
                  fontFamily: 'cardo',
                }}
              >
                Artwork Status
              </p>
              <Image src={'/red_dot.svg'} width={10} height={10} alt="icon" />
              <p
                className={`px-3 py-1 text-base ${artwork?.status ? 'bg-green-600' : 'bg-red-500'}`}
              >
                {artwork?.status ? 'Available' : 'Sold'}
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div className="max-w-[60rem] mt-7">
          <p
            className="text-primary text-2xl font-semibold pb-4"
            style={{
              //* just temporary
              fontFamily: 'cardo',
            }}
          >
            Description
          </p>
          <span className="leading-relaxed">{artwork?.description}</span>
        </div>
      </div>
    </>
  );
};

export default ArtworkDetail;
