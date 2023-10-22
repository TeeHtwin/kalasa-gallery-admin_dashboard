import React from 'react';

const DataInfo = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => {
  return (
    <p className="flex gap-2 capitalize text-btnText">
      <span className="min-w-[220px] font-ariel text-black-100 capitalize font-extralight flex justify-between items-center">
        {label}
        <span className="ml-3 inline-block w-1.5 h-1.5 rounded-full bg-red" />
      </span>
      <span
        className={`flex-1 font-primary ${
          label === "artist's name" && 'underline text-primary'
        }
        ${!isNaN(Number(value)) ? 'font-semibold' : null}
        ${label.toLowerCase() === 'email' && 'lowercase'}
        `}
      >
        {value}
      </span>
    </p>
  );
};

export default DataInfo;
