'use client';

import { ChangeEvent, useState } from 'react';
import cn from 'classnames';
import IconEyeClosed from '@/icons/login/IconEyeClosed';
import IconEyeOpened from '@/icons/login/IconEyeOpened';
import { useCallback } from 'react';
import { memo } from 'react';

type InputProps = {
  title: string;
  name: string;
  inputAttribute: React.InputHTMLAttributes<HTMLInputElement>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
};

const Input = ({
  name,
  onChange,
  errorMessage,
  title,
  ...inputAttribute
}: InputProps) => {
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
        {...inputAttribute}
        onChange={onChange}
        className={cn(
          'h-11 border focus:outline-none focus:border focus:border-zinc-400/80 rounded-lg pl-4',
          type === 'password' ? 'pr-12' : 'pr-4',
          errorMessage && 'border-red-600',
        )}
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

export default memo(Input);
