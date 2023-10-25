'use client';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const DatePickerCom = () => {
  return (
    <div className="h-auto">
      <p className="text-medium mt-2 mb-0.5">Available Date</p>

      {/* date picker/ */}
      <div className="flex justify-between gap-3">
        <div className="w-[45%]">
          <DatePicker onChange={() => {}} />
        </div>

        <div className="center">
          <div className="w-2 h-[1px] bg-grey" />
        </div>
        <div className="w-[45%]">
          <DatePicker onChange={() => {}} />
        </div>
      </div>

      {/* time picker */}
      <p className="text-medium mt-2">Available Time</p>
      <div className="flex justify-between gap-3">
        <div className="w-[45%]">
          <DatePicker onChange={() => {}} />
        </div>

        <div className="center">
          <div className="w-2 h-[1px] bg-grey" />
        </div>
        <div className="w-[45%]">
          <DatePicker onChange={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default DatePickerCom;
