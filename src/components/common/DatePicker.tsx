import ImageIconCom from './ImageIconCom';
import calendarIcon from '@/assets/icons/calendar.svg';
import { FormatDate } from '@/utils/FormatDate';
import { twMerge } from 'tailwind-merge';

const DatePicker = ({
  handleDatePicker,
  filterDate,
  customeStyle,
}: {
  customeStyle?: string;
  handleDatePicker: () => void;
  filterDate: IFilterDate | null;
}) => {
  return (
    <button
      onClick={handleDatePicker}
      className={twMerge(
        `w-[20%] block border-2 rounded-lg center py-2 px-3 ${customeStyle}`,
      )}
    >
      <p className="flex-1 text-start text-grey text-medium">
        {filterDate !== null
          ? `${FormatDate(filterDate.startDate, 'MMM do yyyy')} - ${FormatDate(
              filterDate.endDate,
              'MMM do yyyy',
            )}`
          : 'From Date - To Date'}
      </p>
      <ImageIconCom src={calendarIcon} />
    </button>
  );
};

export default DatePicker;
