import Status from './Status';
import {
  ARTISTS,
  ARTWORKS,
  BLOGS,
  COLLECTIONS,
  EVENTS,
} from '@/constants/routes';

const statues = [
  {
    label: 'total enquires',
    amount: 560,
    href: '#',
    isHighlight: true,
  },
  {
    label: 'total artworks',
    amount: 3400,
    href: ARTWORKS,
    isHighlight: false,
  },
  {
    label: 'total artists',
    amount: 500,
    href: ARTISTS,
    isHighlight: false,
  },
  {
    label: 'total collections',
    amount: 340,
    href: COLLECTIONS,
    isHighlight: false,
  },
  {
    label: 'total blogs',
    amount: 74,
    href: BLOGS,
    isHighlight: false,
  },
  {
    label: 'total events',
    amount: 50,
    href: EVENTS,
    isHighlight: true,
  },
];

const Statues = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-heading font-heading text-primary font-primary">
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
