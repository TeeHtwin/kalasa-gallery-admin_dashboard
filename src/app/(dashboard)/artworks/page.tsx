'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import CTAButton from '@/components/common/CTAButton';
import Header from '@/components/common/PageHeader';
import Link from 'next/link';
import TableCom from '@/components/table/TableCom';
import artwork from '../../../data/artdata.json';
import PagiBtn from '@/components/common/PagiBtn';

import IconChevron from '@/icons/common/IconChevron';
import PageHeaderBox from '@/components/common/PageHeaderBox';
import { useRouter } from 'next/router';

const ArtWork = () => {
  const path = usePathname();

  const tableHeader = [
    'no',
    'artwork_name',
    'artist_name',
    'medium',
    'upload_date',
    'artwork_status',
    ' ',
  ];

  const [page_number, setPageNumber] = useState<number>(1);
  const page_size = 10;
  const pagiBtnQty = Math.ceil(artwork.length / page_size);

  const filterData = artwork.slice(
    (page_number - 1) * page_size,
    page_number * page_size,
  );

  const nextBtnFun = () => {
    // check the page is only one or the page_number reach to the end
    if (page_number === pagiBtnQty) {
      //disabled the next button
      return null;
    } else {
      setPageNumber((prev) => prev + 1);
    }
  };

  const prevBtnFun = () => {
    // check the page is only one or the page_number reach to the end
    if (page_number === 1) {
      //disabled the next button
      return null;
    } else {
      setPageNumber((prev) => prev - 1);
    }
  };

  return (
    <section className="min-h-full p-4">
      <Header title="Galleries" />

      <nav className="flex justify-between">
        <div className="flex gap-5 items-center">
          <p className="text-primary font-serif">Total Material Lists</p>
          <div className="w-12 rounded-md border border-grey h-7 flex justify-center items-center">
            15
          </div>
        </div>
        <Link href={'/artworks/createartwork'}>
          <CTAButton title="Create Artwork" />
        </Link>
      </nav>

      <main>
        {/* that gonna be CSR */}
        <PageHeaderBox />

        <TableCom path={path} tableHeader={tableHeader} data={filterData} />

        <div className="py-2 mt-2 flex justify-end items-center gap-3">
          <button
            disabled={page_number === 1}
            className={`page_prev_btn w-7 h-7 text-2xl text-btnText center border rounded-md bg-secondary-200 ${
              page_number === 1 && 'cursor-not-allowed bg-gray-100'
            }`}
            onClick={prevBtnFun}
          >
            <IconChevron />
          </button>

          {Array.from({ length: pagiBtnQty }).map((_, idx) => (
            <PagiBtn
              key={idx}
              title={String(idx + 1)}
              fun={() => setPageNumber(idx + 1)}
              containerStyle={
                page_number === idx + 1
                  ? 'border-primary bg-primary text-white'
                  : undefined
              }
            />
          ))}

          <button
            disabled={page_number === pagiBtnQty}
            className={`page_next_btn  w-7 h-7 text-2xl text-btnText center border rounded-md bg-secondary-200 ${
              page_number === pagiBtnQty && 'cursor-not-allowed bg-gray-100'
            }`}
            onClick={nextBtnFun}
          >
            <IconChevron />
          </button>
        </div>
      </main>
    </section>
  );
};
export default ArtWork;
