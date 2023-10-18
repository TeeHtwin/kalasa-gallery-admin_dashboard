'use client';

import Header from '@/components/common/PageHeader';
import Link from 'next/link';
import CTAButton from '@/components/common/CTAButton';
import PageHeaderBox from '@/components/common/PageHeaderBox';
import TableCom from '@/components/table/TableCom';
import { usePathname } from 'next/navigation';

const Artist = () => {
  const path = usePathname();
  const tableHeader = [
    'no',
    "artist's_name",
    'added_date',
    'total_artworks',
    'sold_artworks',
    ' ',
  ];
  const data = [
    {
      no: 1,
      artist_name: 'Kaung Kaung',
      added_date: '22.10.2023',
      total_artworks: 250,
      sold_artworks: 35,
    },
  ];
  return (
    <section className="min-h-full p-4">
      <Header title="Artists" />

      <nav className="flex justify-between">
        <div className="flex gap-5 items-center">
          <p className="text-primary font-serif">Total Artists</p>
          <div className="w-12 rounded-md border border-grey h-7 flex justify-center items-center">
            15
          </div>
        </div>
        <Link href={'/artists/addartist'}>
          <CTAButton title="Create Artists" />
        </Link>
      </nav>

      <main>
        <PageHeaderBox />
        <TableCom path={path} tableHeader={tableHeader} data={data} />
      </main>
    </section>
  );
};
export default Artist;
