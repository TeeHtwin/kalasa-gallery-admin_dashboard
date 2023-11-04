'use client';
import { useRef } from 'react';
import CollectionCard from '@/components/card/collections/Card';
import chevronDown from '@/assets/icons/chevrondown.svg';
import ImageIconCom from '@/components/common/ImageIconCom';
import PageHeaderBox from '@/components/common/PageHeaderBox';
import Header from '@/components/common/PageHeader';
import PagiBtn from '@/components/common/PagiBtn';
import IconChevron from '@/icons/common/IconChevron';
import { PageTotalListBox } from '@/components/common';

const Collections = () => {
  const searchText = useRef();
  const page_number = 1;
  return (
    <section className="min-h-full p-2">
      <Header title="Collections" />

      <PageTotalListBox
        totalLabel="Total Collections"
        totalValue={14}
        path="/collections/createcollection"
        ctaBtnTitle="Create Collection"
      />

      <section className="min-h-full py-1">
        <PageHeaderBox
          searchText={searchText.current}
          filterDate={null}
          handleDatePicker={() => {}}
          handlerSearch={() => console.log('hi')}
        />

        <div className="flex justify-between items-center text-primary py-2 text-btnText">
          <div>
            {false ? (
              <div className="flex gap-2 bg-secondary-light border border-primary py-1 rounded-full px-2">
                <button onClick={() => {}}>multiple delete</button>
                <button onClick={() => {}}>X</button>
              </div>
            ) : (
              <label htmlFor="checkbox" className="ml-2 cursor-pointer">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="apperance-none mr-1"
                  // onClick={() => setQuickAction(!quickAction)}
                />
                Quick Action
              </label>
            )}
          </div>
          <button
            // onClick={() => handleSort()}
            className="block center gap-2 text-primary"
          >
            Sort By <ImageIconCom src={chevronDown} />
          </button>
        </div>

        <div className="columns-1 md:columns-2 gap-2">
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </div>
      </section>

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
export default Collections;
