import * as React from 'react';

export interface InputProps {
  htmlFor: string;
  name: string;
  title: string;
  inputAttribute: React.InputHTMLAttributes<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size: 'normal' | 'large';
  isError: boolean;
  errorMessage: string;
}

export default function Input({
  htmlFor,
  name,
  title,
  onChange,
  inputAttribute,
  size,
  isError,
  errorMessage,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className={`text-base text-black  ${isError ? 'text-red-700' : ''} `}
        htmlFor={htmlFor}
        name={name}
      >
        {title}
      </label>
      <div className="w-full flex flex-col">
        <input
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
