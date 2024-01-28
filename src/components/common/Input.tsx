import * as React from 'react';

export interface InputProps {
  htmlFor: string;
  name: string;
  title: string;
  inputAttribute: React.InputHTMLAttributes<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size: 'normal' | 'large';
}

export default function Input({
  htmlFor,
  name,
  title,
  onChange,
  inputAttribute,
  size,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base text-black " htmlFor={htmlFor} name={name}>
        {title}
      </label>
      <input
        onChange={onChange}
        className={`p-2  border rounded focus:outline-none focus:ring-1 focus:ring-zinc-400 border-[#E9E8E8] ${
          size === 'normal' ? 'max-h-none' : 'h-36'
        }`}
        {...inputAttribute}
      />
    </div>
  );
}
