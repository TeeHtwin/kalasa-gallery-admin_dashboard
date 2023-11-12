import React, { useRef } from 'react';
import DatePicker from '@/components/common/DatePicker';
import SearchForm from '@/components/form/SearchForm';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const EVENT_OPTIONS = ['finished', 'present', 'upcoming'];

const EventHeaderBox = () => {
  const searchText = useRef();
  return (
    <article className="w-full max-h-[60px] font-arial flex justify-between gap-3 my-3 text-btnText">
      <div className="flex-1 flex gap-3">
        <DatePicker
          handleDatePicker={() => {}}
          filterDate={null}
          customeStyle="min-w-[320px]"
        />

        <EventListBox />
      </div>

      <SearchForm handlerSearch={() => {}} searchText={searchText} />
    </article>
  );
};

export const EventListBox = () => {
  return (
    <main
      style={{
        zIndex: 999,
      }}
      className="w-[140px] h-full relative font-arial"
    >
      <Listbox value={'hi'} onChange={() => {}}>
        <Listbox.Button
          className={
            'w-full h-full text-btnText flex  border-2 px-3 py-2 rounded-lg center'
          }
        >
          <span className="flex-1 text-small">All Events</span>
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
              'w-full text-center absolute bg-white drop-shadow-xl text-small'
            }
          >
            {EVENT_OPTIONS.map((month, idx) => (
              <Listbox.Option
                key={`${month}_${idx}`}
                value={month}
                className={
                  'cursor-pointer p-2 border-b mb-1 capitalize tracking-wider'
                }
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

export default EventHeaderBox;
