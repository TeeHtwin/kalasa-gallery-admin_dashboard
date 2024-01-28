import React, { InputHTMLAttributes } from 'react';

type Props = {
  title: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  key: string;
  error: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

const FormInputBox = ({
  title,
  key,
  error,
  onChange,
  ...inputProps
}: Props) => {
  return (
    <div>
      <label htmlFor={key}>{title}</label>
      <input id={key} name={key} {...inputProps} onChange={onChange} />
      {error && <span>{error}</span>}
    </div>
  );
};

export default FormInputBox;
