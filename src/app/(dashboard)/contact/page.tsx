'use client';
import { useRef, useState } from 'react';
import Header from '@/components/common/PageHeader';
import { TableCom } from '@/components';
import PagiBtn from '@/components/common/PagiBtn';
import IconChevron from '@/icons/common/IconChevron';
import PageHeaderBox from '@/components/common/PageHeaderBox';
import { customerSearchFun } from '@/utils/macellanous';

const Contact = () => {
  const [page_number, setPageNumber] = useState(1);
  const searchText = useRef();
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
      customer_name: 'kaung khant min',
      subject: 'I want to know about detail...',
      email: 'text@test.gmail.com',
      phone_number: '09250344244',
    },
  ];

  const [tableData, setTableData] = useState(data);

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

      <PageHeaderBox
        filterDate={null}
        handleDatePicker={() => {}}
        handlerSearch={() =>
          setTableData(customerSearchFun(data, searchText.current))
        }
        searchText={searchText}
      />

      <TableCom
        path="/contact"
        tableHeader={tableHeader}
        data={tableData}
        quickAction={false}
        setQuickAction={() => console.log('contact quick action')}
        handleMultipleDelete={() => console.log('multiple deleteion')}
        selectedRowCount={[]}
        handleMultipleDeleteAction={function (): void {
          throw new Error('Function not implemented.');
        }}
        emptySelectionRow={function (): void {
          throw new Error('Function not implemented.');
        }}
        handleSort={function (): void {
          throw new Error('Function not implemented.');
        }}
      />

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
