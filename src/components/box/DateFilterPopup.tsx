'use client';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Image from 'next/image';
import calendarIcon from '@/assets/icons/calendar.svg';
import { CTAButton } from '..';
import './DateFilter.css';
import { FormatDate } from '@/utils/FormatDate';

const DateFilterPopup = ({ setFilterDateToParent }: any) => {
  const [filterDate, setFilterDate] = useState<any>({
    startDate: null,
    endDate: null,
  });

  const [showCalendar, setShowCalendar] = useState({ from: false, to: false });

  return (
    <div className="w-[30%] z-20 p-5 absolute top-[60px] left-0- bg-white drop-shadow-lg rounded">
      <div className="relative">
        <fieldset className="rounded-full border px-2 text-small mb-4">
          <legend className="ml-5 px-1 font-primary font-semibold text-toggleText text-grey">
            From
          </legend>
          <button
            onClick={() => setShowCalendar({ to: false, from: true })}
            className="w-full py-0.5 pb-1 px-3 text-start flex items-start justify-start text-black-100 gap-2"
          >
            <Image
              src={calendarIcon}
              width={25}
              height={25}
              alt="calendar_icon"
            />
            <span>{FormatDate(filterDate.startDate) || 'Choose Date'}</span>
          </button>
        </fieldset>

        {showCalendar.from && (
          <div className="w-full absolute bg-white z-40 rounded">
            <Calendar
              onChange={(e) => {
                setFilterDate({ ...filterDate, startDate: e });
                setShowCalendar({ from: false, to: false });
              }}
              calendarType="hebrew"
              next2Label={null}
              prev2Label={null}
            />
          </div>
        )}
      </div>

      <div className="relative">
        <fieldset className="rounded-full border px-2 text-small">
          <legend className="ml-5 px-1 font-primary font-semibold text-toggleText text-grey">
            To
          </legend>
          <button
            onClick={() => setShowCalendar({ to: true, from: false })}
            className="w-full py-0.5 pb-1 px-3 text-start flex items-start justify-start text-black-100 gap-2"
          >
            <Image
              src={calendarIcon}
              width={25}
              height={25}
              alt="calendar_icon"
            />
            <span>{FormatDate(filterDate.endDate) || 'Choose Date'}</span>
          </button>
        </fieldset>

        {showCalendar.to && (
          <div className="w-full absolute top-12 bg-white z-40 rounded">
            <Calendar
              onChange={(e) => {
                setFilterDate({ ...filterDate, endDate: e });
                setShowCalendar({ from: false, to: false });
              }}
              calendarType="hebrew"
              next2Label={null}
              prev2Label={null}
            />
          </div>
        )}
      </div>

      <div className="center mt-3">
        <CTAButton
          title="save"
          fun={() => setFilterDateToParent(filterDate)}
          style="rounded-full px-8"
        />
      </div>
    </div>
  );
};

export default DateFilterPopup;
