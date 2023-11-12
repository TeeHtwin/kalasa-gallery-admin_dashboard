import { FormEvent } from 'react';
import SearchForm from '../form/SearchForm';
import DatePicker from './DatePicker';

interface IPageHeaderBox {
  handleDatePicker: () => void;
  filterDate: IFilterDate | null;
  handlerSearch: (e: FormEvent) => void;
  searchText: any;
}

const PageHeaderBox = ({
  handlerSearch,
  searchText,
  filterDate,
  handleDatePicker,
}: IPageHeaderBox) => {
  return (
    <article className="w-full max-h-[60px] font-arial flex justify-between gap-3 my-3 text-btnText">
      <DatePicker handleDatePicker={handleDatePicker} filterDate={filterDate} />

      <SearchForm handlerSearch={handlerSearch} searchText={searchText} />
    </article>
  );
};

export default PageHeaderBox;
