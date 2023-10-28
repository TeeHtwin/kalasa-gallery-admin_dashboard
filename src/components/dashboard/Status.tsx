import cn from 'classnames';
import Link from 'next/link';

type StatusProps = {
  status: { label: string; amount: number; href: string; isHighlight: boolean };
};

const Status = ({ status }: StatusProps) => {
  return (
    <div
      className={cn(
        'h-[98px] rounded-2xl flex flex-col gap-1 py-[18px] px-[22px] justify-between text-btnText',
        status.isHighlight ? 'bg-secondary' : 'bg-secondary-200',
      )}
    >
      <span className="font-semibold text-small text- capitalize">
        {status.label}
      </span>
      <div className="flex items-baseline justify-between text-[22px]">
        <span>{status.amount}</span>

        <Link href={status.href} className="flex gap-2 text-xs capitalize">
          see all &nbsp; &gt;
        </Link>
      </div>
    </div>
  );
};
export default Status;
