'use client';

import { useState } from 'react';
import cn from 'classnames';
import IconEyeClosed from '@/icons/login/IconEyeClosed';

/**
 * todo
 * - switch icon to state
 */

type FormInputProps = {
  id: string;
  label: string;
  type: string;
  name: string;
  placeholder: string;
};

const FormInput = ({ id, label, type, placeholder, name }: FormInputProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-0.5 relative">
      <label htmlFor="email" className="font-ariel text-small">
        {label}
      </label>
      <input
        type={type === 'password' ? (show ? 'text' : 'password') : type}
        id={id}
        name={name}
        className={cn(
          'w-full py-1.5 text-medium border border-white-100 rounded-lg pl-2 focus-within:outline-primary-100',
          type === 'password' ? 'pr-12' : 'pr-4',
        )}
        placeholder={placeholder}
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={() => {
            setShow((prev) => !prev);
          }}
          className="absolute top-1/2 right-2 -translate-x-1/2 translate-y-1/2"
        >
          <IconEyeClosed />
        </button>
      )}
    </div>
  );
};
export default FormInput;
