

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CtaBtn = ({ children, ...rest }: BtnProps) => {
  return (
    <button {...rest} className="bg-primary py-2 px-4 flex justify-center items-center gap-1 text-white rounded-lg">
      {children}
    </button>
  );
};
export default CtaBtn;
