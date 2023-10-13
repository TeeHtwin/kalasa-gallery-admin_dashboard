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
  placeholder: string;
};

const FormInput = ({ id, label, type, placeholder }: FormInputProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-2 relative">
      <label htmlFor="email">{label}</label>
      <input
        type={type === 'password' ? (show ? 'text' : 'password') : type}
        id={id}
        className={cn(
          'h-11 border border-white-100 rounded-lg pl-4 focus-within:outline-primary-100',
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
