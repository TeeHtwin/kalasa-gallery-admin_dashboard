import React from 'react';

const FormControl = ({
  label,
  name,
  type = 'text',
  value,
}: {
  label: string;
  name: string;
  type?: string;
  value?: string;
}) => {
  return (
    <div className="w-full">
      <label className="block capitalize text-[18px] mb-1 font-semibold tracking-wider font-primary">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        className="w-full border py-0.5 border-grey-100 rounded-sm px-2"
      />
    </div>
  );
};

export default FormControl;
