'use client';

import React from 'react';
import { API } from '@/lib/routes';
import { get } from '@/utils/apiFetch';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

type CollectionDetailProps = {
  token: string;
  id: string;
};

const EventDetails = ({ token, id }: CollectionDetailProps) => {
  console.log(id);

  const {
    data: event,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['events', id],
    queryFn: () =>
      get(`${API.events}/${id}`, {
        Authorization: `Bearer ${token}`,
      }),
  });

  console.log('collection::', event);
  return (
    <>
      {event && (
        <section>
          <button className="text-sm text-[#D40000C7] underline float-right m-4">
            Delete Event
          </button>
          <div className="py-10">
            <div className="flex gap-8 pb-10">
              <Image src={'/next.svg'} width={300} height={300} alt="image" />
              <div className="flex flex-col gap-3">
                <h1
                  className="text-primary text-2xl font-semibold"
                  style={{
                    //* just temporary
                    fontFamily: 'cardo',
                  }}
                >
                  {event?.title}
                </h1>
                <div>
                  <div className="flex gap-3 pb-4">
                    <p
                      style={{
                        //* just temporary
                        fontFamily: 'cardo',
                      }}
                    >
                      Title
                    </p>
                    <Image
                      src={'/red_dot.svg'}
                      width={10}
                      height={10}
                      alt="icon"
                    />
                    <p>{event?.title}</p>
                  </div>
                  <div className="flex gap-3 pb-4">
                    <p
                      style={{
                        //* just temporary
                        fontFamily: 'cardo',
                      }}
                    >
                      Event Status
                    </p>
                    <Image
                      src={'/red_dot.svg'}
                      width={10}
                      height={10}
                      alt="icon"
                    />
                    <p>{event.status}</p>
                  </div>
                  <div className="flex gap-3 pb-4">
                    <p
                      style={{
                        //* just temporary
                        fontFamily: 'cardo',
                      }}
                    >
                      Opening Hours
                    </p>
                    <Image
                      src={'/red_dot.svg'}
                      width={10}
                      height={10}
                      alt="icon"
                    />
                    <span>{event.opening_datetime}</span>
                  </div>
                  <div className="flex gap-3 pb-4">
                    <p
                      style={{
                        //* just temporary
                        fontFamily: 'cardo',
                      }}
                    >
                      Closing Hours
                    </p>
                    <Image
                      src={'/red_dot.svg'}
                      width={10}
                      height={10}
                      alt="icon"
                    />
                    <span>{event.closing_datetime}</span>
                  </div>
                  <div className="flex gap-3 pb-4">
                    <p
                      style={{
                        //* just temporary
                        fontFamily: 'cardo',
                      }}
                    >
                      Location
                    </p>
                    <Image
                      src={'/red_dot.svg'}
                      width={10}
                      height={10}
                      alt="icon"
                    />
                    <span>{event.location}</span>
                  </div>
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
              <span className="leading-relaxed">{event?.description}</span>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default EventDetails;
