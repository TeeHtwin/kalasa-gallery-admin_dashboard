'use client';
import Link from 'next/link';
import UEvent from './UEvent';
import Contact from './Contact';
import { get } from '@/utils/apiFetch';
import { API } from '@/lib/routes';
import { useQuery } from '@tanstack/react-query';
import { TokenProps } from './Statues';
import RecentContact from './Contact';

const upcomingEvents = [
  {
    id: 1,
    name: 'Discovering The Beauty of Nature',
    startDate: '23 July, 2023',
    endDate: '30 July, 2023',
  },
  {
    id: 2,
    name: 'Discovering The Beauty of Nature',
    startDate: '23 July, 2023',
    endDate: '30 July, 2023',
  },
  {
    id: 3,
    name: 'discovering the beauty of nature',
    startDate: '23 July, 2023',
    endDate: '30 July, 2023',
  },
  {
    id: 4,
    name: 'discovering the beauty of nature',
    startDate: '23 July, 2023',
    endDate: '30 July, 2023',
  },
];

const ContactAndEvents = ({ token }: TokenProps) => {
  const { data: contactData, isLoading } = useQuery({
    queryKey: ['contactData'],
    queryFn: () =>
      get(`${API.contacts}`, {
        Authorization: `Bearer ${token}`,
      }),
  });

  console.log(contactData?.data);
  return (
    <div className="basis-[300px] py-6 pl-4 pr-8 flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg text-primary">Recent Contact</h2>
          <Link href="/contact" className="text-black-200 text-sm ">
            See more
          </Link>
        </div>

        {contactData ? (
          <div className="flex flex-col gap-5">
            {contactData?.data
              .slice(0, 5)
              .map((contact: any) => (
                <RecentContact key={contact?.id} contact={contact} />
              ))}
          </div>
        ) : (
          ''
        )}
      </section>

      {/* <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg text-primary">Upcoming Events</h2>
          <Link href="#" className="text-black-200 text-sm ">
            See more
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          {upcomingEvents.map((event) => (
            <UEvent key={event.id} event={event} />
          ))}
        </div>
      </section> */}
    </div>
  );
};
export default ContactAndEvents;
