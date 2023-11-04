'use client';

import { FormEvent, useRef, useState } from 'react';
import TableCom from '@/components/table/TableCom';
import { usePathname } from 'next/navigation';
import { handleArtworkSort } from '@/utils/Sorting';
import IconChevron from '@/icons/common/IconChevron';
import { TextSearchFun } from '@/utils/macellanous';
import {
  PageTotalListBox,
  PageHeaderBox,
  Header,
  PagiBtn,
} from '@/components/common';

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

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    setArtistData(TextSearchFun(data, searchText.current));
  };

  const page_number = 1;

  const [artistData, setArtistData] = useState(data);
  return (
    <section className="min-h-full p-4">
      <Header title="Artists" />

      <PageTotalListBox
        totalLabel="Total Artists"
        totalValue={15}
        path="/artists/addartist"
        ctaBtnTitle="Create Artists"
      />

      <PageHeaderBox
        searchText={searchText}
        filterDate={null}
        handleDatePicker={() => {}}
        handlerSearch={handleSearch}
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

      <div className="py-2 mt-2 flex justify-end items-center gap-3">
        <button
          disabled={page_number === 1}
          className={`page_prev_btn w-7 h-7 text-2xl text-btnText center border rounded-md bg-secondary-200 ${
            page_number === 1 && 'cursor-not-allowed bg-gray-100'
          }`}
          // onClick={prevBtnFun}
        >
          <IconChevron />
        </button>

        {Array.from({ length: 2 }).map((_, idx) => (
          <PagiBtn
            key={idx}
            title={String(idx + 1)}
            // fun={() => setPageNumber(idx + 1)}
            containerStyle={
              page_number === idx + 1
                ? 'border-primary bg-primary text-white'
                : undefined
            }
          />
        ))}

        <button
          // disabled={page_number === pagiBtnQty}
          className={`page_next_btn  w-7 h-7 text-2xl text-btnText center border rounded-md bg-secondary-200 ${
            // page_number === pagiBtnQty && 'cursor-not-allowed bg-gray-100'
            ''
          }`}
          // onClick={nextBtnFun}
        >
          <IconChevron />
        </button>
      </div>
    </section>
  );
};
export default Artist;
