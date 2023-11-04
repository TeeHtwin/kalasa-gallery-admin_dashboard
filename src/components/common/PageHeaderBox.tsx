import ImageIconCom from './ImageIconCom';
import searchIcon from '@/assets/icons/search.svg';
import calendarIcon from '@/assets/icons/calendar.svg';
import { FormatDate } from '@/utils/FormatDate';
import { FormEvent } from 'react';

interface IFilterDate {
  startDate: string;
  endDate: string;
}
interface IPageHeaderBox {
  handleDatePicker: () => void;
  handlerSearch: (e: FormEvent) => void;
  searchText: any;
  filterDate: IFilterDate | null;
}

const PageHeaderBox = ({
  handlerSearch,
  searchText,
  filterDate,
  handleDatePicker,
}: IPageHeaderBox) => {
  return (
    <article className="w-full max-h-[60px] flex justify-between gap-3 my-3 text-btnText">
      <button
        onClick={handleDatePicker}
        className="w-[30%] block border rounded center py-1 px-3"
      >
        <p className="flex-1 text-start text-grey">
          {filterDate !== null
            ? `${FormatDate(
                filterDate.startDate,
                'MMM do yyyy',
              )} - ${FormatDate(filterDate.endDate, 'MMM do yyyy')}`
            : 'From Date - To Date'}
        </p>
        <ImageIconCom src={calendarIcon} />
      </button>

      <form
        onSubmit={handlerSearch}
        className="border w-[30%] rounded overflow-hidden flex"
      >
        <button
          type="submit"
          onClick={handlerSearch}
          className="w-[45px] pl-1 block center h-full"
        >
          <ImageIconCom src={searchIcon} />
        </button>
        <input
          type="text"
          id="search_input"
          placeholder="Search By Name"
          className="flex-1 outline-none px-2"
          ref={searchText}
          onChange={(e) => (searchText.current = e.target.value.toLowerCase())}
        />
      </form>
    </article>
  );
};

export default PageHeaderBox;
