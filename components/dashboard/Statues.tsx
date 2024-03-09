'use client';
import Status from './Status';
import {
  ARTISTS,
  ARTWORKS,
  BLOGS,
  COLLECTIONS,
  EVENTS,
} from '../../constants/navRoutes';
import { get } from '@/utils/apiFetch';
import { API } from '@/lib/routes';
import { useQuery } from '@tanstack/react-query';

type TokenProps = {
  token: string;
};

const Statues = ({ token }: TokenProps) => {
  const { data: totalArtworks } = useQuery({
    queryKey: ['totalArtworks'],
    queryFn: () =>
      get(`${API.artwork}/total`, { Authorization: `Bearer ${token}` }),
  });
  const { data: totalArtists } = useQuery({
    queryKey: ['totalArtists'],
    queryFn: () =>
      get(`${API.artist}/total`, { Authorization: `Bearer ${token}` }),
  });
  const { data: totalEvents } = useQuery({
    queryKey: ['totalEvents'],
    queryFn: () =>
      get(`${API.events}/total`, { Authorization: `Bearer ${token}` }),
  });
  const { data: totalBlogs } = useQuery({
    queryKey: ['totalBlogs'],
    queryFn: () =>
      get(`${API.blogs}/total`, { Authorization: `Bearer ${token}` }),
  });
  const { data: totalCollections } = useQuery({
    queryKey: ['totalCollections'],
    queryFn: () =>
      get(`${API.collections}/total`, { Authorization: `Bearer ${token}` }),
  });

  console.log(token);
  console.log(totalEvents);
  const statues = [
    {
      label: 'total artworks',
      amount: totalArtworks,
      href: ARTWORKS,
      isHighlight: false,
    },
    {
      label: 'total artists',
      amount: totalArtists,
      href: ARTISTS,
      isHighlight: false,
    },
    {
      label: 'total collections',
      amount: totalCollections,
      href: COLLECTIONS,
      isHighlight: false,
    },
    {
      label: 'total blogs',
      amount: totalBlogs,
      href: BLOGS,
      isHighlight: false,
    },
    {
      label: 'total events',
      amount: totalEvents,
      href: EVENTS,
      isHighlight: true,
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <h1
        className="text-heading font-heading text-primary text-3xl"
        style={{
          //* just temporary
          fontFamily: 'cardo',
        }}
      >
        Dashboard
      </h1>

      <section className="grid md:grid-cols-3 gap-4">
        {statues.map((status) => (
          <Status key={status.label} status={status} />
        ))}
      </section>
    </div>
  );
};
export default Statues;
