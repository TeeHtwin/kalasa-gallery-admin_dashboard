import * as React from 'react';

export interface InputProps {
  name: string;
  title: string;
  inputAttribute: React.InputHTMLAttributes<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size: 'normal' | 'large';
  isError: boolean;
  errorMessage: string;
}

export default function Input({
  name,
  title,
  onChange,
  size,
  isError,
  errorMessage,
  ...inputAttribute
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className={`text-base text-black  ${isError ? 'text-red-700' : ''} `}
        htmlFor={name}
      >
        {title}
      </label>
      <div className="w-full flex flex-col">
        <input
          id={name}
          name={name}
          onChange={onChange}
          className={`p-2  border rounded focus:outline-none focus:ring-1 focus:ring-zinc-400 border-[#E9E8E8] ${
            size === 'normal' ? 'max-h-none' : 'h-36'
          } ${isError ? 'border-red-600' : ''}`}
          {...inputAttribute}
        />
        {isError && <p className="text-red-600">{errorMessage}</p>}
      </div>
    </div>
  );
}
