'use client';
import React from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const monthNames = [2019, 2020, 2021, 2022, 2023];

interface IListBoxProps {
  reportMonth: Number;
  setReportMonth: any;
}

const ListBoxCom = ({ reportMonth, setReportMonth }: IListBoxProps) => {
  return (
    <main
      style={{
        zIndex: 999,
      }}
      className="w-full h-full absolute top-0 left-0"
    >
      <Listbox value={reportMonth} onChange={setReportMonth}>
        <Listbox.Button
          className={
            'w-full h-full text-btnText flex  border px-3 rounded-full center'
          }
        >
          <span className="flex-1 text-small">
            {String(reportMonth) || 2023}
          </span>
          <span>
            <ChevronDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={React.Fragment}
          enter="transition duration-150 ease-in"
          enterFrom="opactiy-0 translate-y-5"
          enterTo="opactiy-100 translate-y-0"
          leave="transition duration-150 ease-out"
          leaveFrom="opactiy-100 translate-y-5"
          leaveTo="opacity-0 translate-y-0"
        >
          <Listbox.Options
            className={
              'w-full text-center max-h-[240px] overflow-y-scroll bg-white drop-shadow-xl text-small'
            }
          >
            {monthNames.map((month, idx) => (
              <Listbox.Option
                key={`${month}_${idx}`}
                value={month}
                className={'cursor-pointer px-2 py-1 border-b mb-1'}
              >
                {month}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </main>
  );
};

export default ListBoxCom;
