'use client';

import { useRef, useState } from 'react';
import PageHeaderBox from '@/components/common/PageHeaderBox';
import TableCom from '@/components/table/TableCom';
import { usePathname } from 'next/navigation';
import { handleArtworkSort } from '@/utils/Sorting';
import Header from '@/components/common/PageHeader';
import Link from 'next/link';
import CTAButton from '@/components/common/CTAButton';
import plusIcon from '@/assets/icons/plus.svg';

const Artist = () => {
  const searchText = useRef();
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
      artist_name: 'kaung Kaung',
      added_date: '22.10.2023',
      total_artworks: 250,
      sold_artworks: 35,
    },
    {
      artist_name: 'aung Kaung',
      added_date: '22.10.2023',
      total_artworks: 250,
      sold_artworks: 35,
    },
    {
      artist_name: 'willian',
      added_date: '22.10.2023',
      total_artworks: 250,
      sold_artworks: 35,
    },
  ];

  const [artistData, setArtistData] = useState(data);
  return (
    <section className="min-h-full p-4">
      <Header title="Artists" />

      <nav className="flex justify-between">
        <div className="flex gap-5 items-center">
          <p className="text-primary font-serif">Total Artists</p>
          <div className="w-12 rounded-md border text-primary font-heading font-ariel h-7 flex justify-center items-center">
            15
          </div>
        </div>
        <Link href={'/artists/addartist'}>
          <CTAButton icon={plusIcon} title="Create Artists" />
        </Link>
      </nav>
      <PageHeaderBox
        searchText={searchText}
        handlerSearch={() => console.log('something ')}
      />
      <TableCom
        path={path}
        tableHeader={tableHeader}
        data={artistData}
        quickAction={false}
        selectedRowCount={[12, 3, 4]}
        emptySelectionRow={() => {}}
        handleMultipleDelete={() => {}}
        handleMultipleDeleteAction={() => {}}
        setQuickAction={() => {}}
        handleSort={() => setArtistData(handleArtworkSort(data))}
      />
    </section>
  );
};
export default Artist;
