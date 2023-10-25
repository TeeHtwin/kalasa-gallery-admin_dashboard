'use client';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import CTAButton from '@/components/common/CTAButton';
import Header from '@/components/common/PageHeader';
import Link from 'next/link';
import TableCom from '@/components/table/TableCom';
import PagiBtn from '@/components/common/PagiBtn';
import IconChevron from '@/icons/common/IconChevron';
import PageHeaderBox from '@/components/common/PageHeaderBox';
import plusIcon from '@/assets/icons/plus.svg';
import { handleArtworkSort } from '@/utils/Sorting';
import { handleSelectedRow } from '@/utils/RowSelection';
//dummy data
import artwork from '../../../data/artdata.json';

const ArtWork = () => {
  const path = usePathname();
  const ref = useRef();
  const [quickAction, setQuickAction] = useState(false);
  const [selectedRow, setSelectedRow] = useState<string[]>([]);

  const tableHeader = [
    'action',
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

  const filterData = artwork.slice(
    (page_number - 1) * page_size,
    page_number * page_size,
  );

  const [tableData, setTableData] = useState(filterData);
  const pagiBtnQty = Math.ceil(artwork.length / page_size);

  useEffect(() => {
    setTableData(filterData);
  }, [page_number]);

  const handlerSearch = () => {
    if (ref.current === '') {
      setTableData(filterData);
    } else {
      const data = artwork.filter((d) =>
        d.artist_name.toLowerCase().includes(ref.current || ''),
      );
      setTableData(data);
    }
  };

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

  const handleMultipleDeleteAction = () => {
    const newData = artwork.filter(
      (d) => !selectedRow.includes(d.artwork_name),
    );
    setQuickAction(false);
    setSelectedRow([]);
    setTableData(newData);
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
          <CTAButton title="Create Artwork" icon={plusIcon} />
        </Link>
      </nav>

      {/* that gonna be CSR */}
      <PageHeaderBox handlerSearch={handlerSearch} searchText={ref} />

      <TableCom
        quickAction={quickAction}
        path={path}
        tableHeader={tableHeader}
        data={tableData}
        selectedRowCount={selectedRow}
        emptySelectionRow={() => setSelectedRow([])}
        handleSort={() => setTableData(handleArtworkSort(tableData))}
        handleMultipleDeleteAction={handleMultipleDeleteAction}
        setQuickAction={setQuickAction}
        handleMultipleDelete={(idx: any) =>
          setSelectedRow(handleSelectedRow(idx, selectedRow))
        }
      />

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
    </section>
  );
};
export default ArtWork;
