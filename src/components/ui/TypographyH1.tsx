import { cn } from '@/lib/utils';
import React from 'react';
interface TypographyH1Props {
  children: React.ReactNode;
  font?: 'normal' | 'serif';
}

const TypographyH1 = ({ children, font = 'normal' }: TypographyH1Props) => {
  return (
    <h1
      className={cn(
        `text-2xl mt-5 tracking-wide text-primary `,
        font === 'serif' && 'font-[cardo]',
      )}
    >
      {children}
    </h1>
  );
};
export default TypographyH1;
