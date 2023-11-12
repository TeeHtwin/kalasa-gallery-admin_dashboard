'use client';
import { TableCom } from '@/components';
import IconChevron from '@/icons/common/IconChevron';
import { handleArtworkSort, FilterBoxStyle } from '@/utils';
import {
  PageTotalListBox,
  PageHeaderBox,
  Header,
  PagiBtn,
} from '@/components/common';
import { DateFilterPopup } from '@/components';
import { useArtist } from '@/hook/useArtist';

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

const Artist = () => {
  const { path, foundData, setFoundData, searchText, handleSearch } =
    useArtist(data);

  const page_number = 1;

  return (
    <section className="min-h-full p-4">
      <Header title="Artists" />

      <PageTotalListBox
        totalLabel="Total Artists"
        totalValue={15}
        path="/artists/addartist"
        ctaBtnTitle="Create Artists"
      />

      <div className="relative">
        <PageHeaderBox
          setSearchKeyWord={(e) => console.log(e)}
          filterDate={null}
          handleDatePicker={() => {}}
        />
        <div className={`duration-200 ${FilterBoxStyle(true)}`}>
          <DateFilterPopup setFilterDateToParent={(e: any) => {}} />
        </div>
      </div>

      <TableCom
        path={path}
        tableHeader={tableHeader}
        data={foundData}
        quickAction={false}
        selectedRowCount={[12, 3, 4]}
        emptySelectionRow={() => {}}
        handleMultipleDelete={() => {}}
        handleMultipleDeleteAction={() => {}}
        setQuickAction={() => {}}
        handleSort={() => setFoundData(handleArtworkSort(data))}
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
