'use client';
import {
  TableCom,
  PagiBtn,
  Header,
  PageHeaderBox,
  DateFilterPopup,
} from '@/components';
import IconChevron from '@/icons/common/IconChevron';
import { tableHeader } from './constants';
import { FilterBoxStyle, handleSelectedRow } from '@/utils';
//dummy data
import artwork from '../../../data/artdata.json';
import { PageTotalListBox } from '@/components/common';
import { useArtWork } from '@/hook/useArtwork';
import { useArtWorkStore } from '@/store/artStore';

const ArtWork = () => {
  const {
    path,
    quickAction,
    showFilterBox,
    setQuickAction,
    filterDate,
    setFilterDate,
    handleMultipleDeleteAction,
    prevBtnFun,
    nextBtnFun,
    setSelectedRow,
    selectedRow,
    setShowFilterBox,
    isLoading,
    artworks,
  } = useArtWork();
  const {
    handleSort,
    setSearchKeyWord,
    page_number,
    total_page_size,
    handlePagi,
  } = useArtWorkStore();

  return (
    <section className="min-h-full p-4">
      <Header title="Galleries" />

      <PageTotalListBox
        totalLabel="Total Material Lists"
        totalValue={15}
        path={'/artworks/createartwork'}
        ctaBtnTitle="Create Artwork"
      />

      <div className="relative">
        <PageHeaderBox
          setSearchKeyWord={(e: string) => setSearchKeyWord(e)}
          handleDatePicker={() => setShowFilterBox(!showFilterBox)}
          filterDate={filterDate}
        />
        <div className={`duration-200 ${FilterBoxStyle(showFilterBox)}`}>
          <DateFilterPopup
            setFilterDateToParent={(e: any) => {
              setFilterDate(e);
              setShowFilterBox(false);
            }}
          />
        </div>
      </div>

      {!isLoading && artworks ? (
        <TableCom
          quickAction={quickAction}
          path={path}
          tableHeader={tableHeader}
          data={artworks}
          selectedRowCount={selectedRow}
          emptySelectionRow={() => setSelectedRow([])}
          handleSort={handleSort}
          handleMultipleDeleteAction={handleMultipleDeleteAction}
          setQuickAction={setQuickAction}
          handleMultipleDelete={(idx: any) =>
            setSelectedRow(handleSelectedRow(idx, selectedRow))
          }
        />
      ) : null}

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

        {Array.from({ length: total_page_size }).map((_, idx) => (
          <PagiBtn
            key={idx}
            title={String(idx + 1)}
            fun={() => handlePagi(idx + 1)}
            containerStyle={
              page_number === idx + 1
                ? 'border-primary bg-primary text-white'
                : undefined
            }
          />
        ))}

        <button
          disabled={page_number === total_page_size}
          className={`page_next_btn  w-7 h-7 text-2xl text-btnText center border rounded-md bg-secondary-200 ${
            page_number === total_page_size && 'cursor-not-allowed bg-gray-100'
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
