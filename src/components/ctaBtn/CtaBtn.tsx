

import Image from "next/image";

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  src: string;
}

const CtaBtn = ({ children, src, ...rest }: BtnProps) => {
  return (
    <button {...rest} className="bg-primary py-2 px-4 flex">
      <Image 
      src={src}
      width={50}
      height={50}
      alt="icon"
      />
      {children}
    </button>
  );
};
export default CtaBtn;
