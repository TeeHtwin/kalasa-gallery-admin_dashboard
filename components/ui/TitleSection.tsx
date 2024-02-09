import CtaBtn from './CtaBtn';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  title: string;
}

const TitleSection = ({ title, children }: Props) => {
  return (
    <div className="flex justify-between items-center text-primary">
      <p className='text-xl'>{title}</p>
      {children}
    </div>
  );
};
export default TitleSection;
