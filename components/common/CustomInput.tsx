'use client';

import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import cn from 'classnames';
import IconEyeClosed from '../../icons/login/IconEyeClosed';
import IconEyeOpened from '../../icons/login/IconEyeOpened';
import { useCallback } from 'react';
import { memo } from 'react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
}

const CustomInput = ({
  name,
  onChange,
  errorMessage,
  title,
  ...inputAttribute
}: CustomInputProps) => {
  const [show, setShow] = useState(false);
  const { type } = inputAttribute;
  const handleClick = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  return (
    <div
      className={cn('flex flex-col gap-2', type === 'password' && 'relative')}
    >
      <label htmlFor={name}>{title}</label>
      <input
        onChange={onChange}
        className={cn(
          'h-11 border focus:outline-none focus:border focus:border-zinc-400/80 rounded-lg pl-4',
          type === 'password' ? 'pr-12' : 'pr-4',
          errorMessage && 'border-red-600',
        )}
        {...inputAttribute}
      />

      {type === 'password' && (
        <button
          type="button"
          onClick={handleClick}
          className={cn(
            'absolute top-1/2',
            errorMessage
              ? 'right-2 transform -translate-y-1/2'
              : 'right-2 -translate-x-1/2 translate-y-1/2',
          )}
        >
          {show ? <IconEyeOpened /> : <IconEyeClosed />}
        </button>
      )}
      {errorMessage && <p className="text-red-700 ">{errorMessage}</p>}
    </div>
  );
};

export default memo(CustomInput);
