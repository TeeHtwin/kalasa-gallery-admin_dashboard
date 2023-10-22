'use client';
import { useState } from 'react';
import Header from '@/components/common/PageHeader';
import { TableCom } from '@/components';
import PagiBtn from '@/components/common/PagiBtn';
import IconChevron from '@/icons/common/IconChevron';
import ImageIconCom from '@/components/common/ImageIconCom';
import searchIcon from '@/assets/icons/search.svg';
import calendarIcon from '@/assets/icons/calendar.svg';
import chevronDown from '@/assets/icons/chevrondown.svg';

const Contact = () => {
  const [page_number, setPageNumber] = useState(1);
  const tableHeader = [
    'no',
    'customer_name',
    'subject',
    'email',
    'phone_number',
    ' ',
  ];
  const data = [
    {
      no: 1,
      customer_name: 'kaung khant min',
      subject: 'I want to know about detail...',
      email: 'text@test.gmail.com',
      phone_number: '09250344244',
    },
  ];

  const pagiBtnQty = 3;
  const prevBtnFun = () => {};
  const nextBtnFun = () => {};

  return (
    <section className="min-h-full p-4">
      <Header title="Contacts" />

      <div className="flex gap-5 items-center mb-2">
        <p className="text-primary font-serif">Total Contacts</p>
        <div className="w-8 rounded-md border-2 h-7 flex justify-center text-medium items-center">
          15
        </div>
      </div>

      <section className="w-full">
        <article className="w-full min-h-[55px] max-h-[60px] flex flex-row-reverse justify-between gap-3 my-3 text-btnText">
          <div className="w-[30%] border rounded flex  bg-[#f4f4f4]">
            <button className="w-[45px] pl-1 block center h-full">
              <ImageIconCom src={searchIcon} />
            </button>
            <input
              type="text"
              id="search_input"
              placeholder="Search By Name"
              className="flex-1 outline-none px-2 bg-transparent"
            />
          </div>

          <button className="w-[30%] block border rounded gap-3 center py-1 px-3">
            <ImageIconCom src={calendarIcon} />
            <p className="flex-1 text-start">Sep 16th 2022 - Sep 27th 2022</p>
          </button>
        </article>

        <div className="flex justify-between items-center text-primary py-2 text-btnText">
          <div>
            <label htmlFor="checkbox" className="ml-2 cursor-pointer">
              <input
                type="checkbox"
                id="checkbox"
                className="apperance-none mr-1"
              />
              Quick Action
            </label>
          </div>
          <div className="center gap-2 text-primary">
            Sort By <ImageIconCom src={chevronDown} />
          </div>
        </div>
      </section>

      <TableCom path="/contact" tableHeader={tableHeader} data={data} />

      <div className="py-2 mt-2 flex justify-end items-center gap-3">
        <button
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
export default Contact;
