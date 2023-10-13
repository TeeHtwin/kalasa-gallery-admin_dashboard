import IconUser from '@/icons/dashboard/IconUser';

type UEventProps = {
  event: {
    name: string;
    startDate: string;
    endDate: string;
  };
};

const UEvent = ({ event }: UEventProps) => {
  return (
    <div className="flex gap-2">
      <div className="">
        <IconUser />
      </div>

      <div className="flex flex-col justify-center">
        <span className="text-black line-clamp-1">{event.name}</span>
        <div className="flex gap-1 text-black-200 text-sm flex-nowrap">
          <span className="tracking-tight">{event.startDate}</span>-
          <span className="tracking-tight">{event.endDate}</span>
        </div>
      </div>
    </div>
  );
};
export default UEvent;
