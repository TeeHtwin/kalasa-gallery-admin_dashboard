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
      <label className="block capitalize text-btnText mb-1 font-semibold tracking-wider font-primary">
        {label}
      </label>
      <input
        name={name}
        type={type}
        defaultValue={value}
        className="w-full border py-2 border-grey-100 rounded-sm px-2 outline-none text-btnText tracking-wide"
      />
    </div>
  );
};

export default FormControl;
