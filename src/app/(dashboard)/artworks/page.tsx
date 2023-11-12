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

const ArtWork = () => {
  const {
    loading,
    path,
    ref,
    quickAction,
    showFilterBox,
    setQuickAction,
    filterDate,
    tableData,
    setFilterDate,
    handleMultipleDeleteAction,
    prevBtnFun,
    nextBtnFun,
    handlerSearch,
    sortingFun,
    setSelectedRow,
    selectedRow,
    page_number,
    setPageNumber,
    pagiBtnQty,
    setShowFilterBox,
  } = useArtWork(artwork);

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
          handleDatePicker={() => setShowFilterBox(!showFilterBox)}
          handlerSearch={handlerSearch}
          filterDate={filterDate}
          searchText={ref}
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

      {!loading ? (
        <TableCom
          quickAction={quickAction}
          path={path}
          tableHeader={tableHeader}
          data={tableData}
          selectedRowCount={selectedRow}
          emptySelectionRow={() => setSelectedRow([])}
          handleSort={sortingFun}
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
