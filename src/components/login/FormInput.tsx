'use client';

import { ChangeEvent, useState } from 'react';
import cn from 'classnames';
import IconEyeClosed from '@/icons/login/IconEyeClosed';
import IconEyeOpened from '@/icons/login/IconEyeOpened';

/**
 * todo
 * - switch icon to state
 */

type FormInputProps = {
  id: string;
  label: string;
  type: string;
  htmlFor: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  errorMessage: string;
};

const FormInput = ({
  id,
  label,
  type,
  htmlFor,
  placeholder,
  onChange,
  isError,
  errorMessage,
}: FormInputProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col relative gap-2 ">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        onChange={onChange}
        type={type === 'password' ? (show ? 'text' : 'password') : type}
        id={id}
        className={cn(
          'h-11 border focus:outline-none focus:border focus:border-zinc-700 rounded-lg pl-4',
          type === 'password' ? 'pr-12' : 'pr-4',
          isError && 'border-red-600',
        )}
        placeholder={placeholder}
      />

      {type === 'password' && (
        <button
          type="button"
          onClick={() => {
            setShow((prev) => !prev);
          }}
          className={cn(
            'absolute top-1/2',
            isError
              ? 'right-2 transform -translate-y-1/2'
              : 'right-2 -translate-x-1/2 translate-y-1/2',
          )}
        >
          {show ? <IconEyeOpened /> : <IconEyeClosed />}
        </button>
      )}
      {isError && <p className="text-red-700 ">{errorMessage}</p>}
    </div>
  );
};

export default FormInput;
