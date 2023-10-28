import Link from 'next/link';
import UEvent from './UEvent';
import Contact from './Contact';

const recentContacts = [
  {
    id: 1,
    name: 'Hnin Cheery',
    email: 'yukisaku1023@gmail.com',
  },
  {
    id: 2,
    name: 'Hnin Cheery',
    email: 'yukisaku1023@gmail.com',
  },
  {
    id: 3,
    name: 'Hnin Cheery',
    email: 'yukisaku1023@gmail.com',
  },
  {
    id: 4,
    name: 'Hnin Cheery',
    email: 'yukisaku1023@gmail.com',
  },
];

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

const ContactAndEvents = () => {
  return (
    <div className="basis-[300px] py-6 pl-4 pr-8 flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-btnText text-primary">
            Recent Contact
          </h2>
          <Link href="#" className="text-black-200 text-small">
            See more
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          {recentContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-btnText text-primary">
            Upcoming Events
          </h2>
          <Link href="#" className="text-black-200 text-small">
            See more
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          {upcomingEvents.map((event) => (
            <UEvent key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default ContactAndEvents;
