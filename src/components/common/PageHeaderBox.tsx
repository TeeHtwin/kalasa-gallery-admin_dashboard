import SearchForm from '../form/SearchForm';
import DatePicker from './DatePicker';

interface IPageHeaderBox {
  handleDatePicker: () => void;
  setSearchKeyWord: (searchKey: string) => void;
  filterDate: IFilterDate | null;
}

const PageHeaderBox = ({
  filterDate,
  handleDatePicker,
  setSearchKeyWord,
}: IPageHeaderBox) => {
  return (
    <article className="w-full max-h-[60px] font-arial flex justify-between gap-3 my-3 text-btnText">
      <DatePicker handleDatePicker={handleDatePicker} filterDate={filterDate} />

      <SearchForm setSearchKeyWord={setSearchKeyWord} />
    </article>
  );
};

export default PageHeaderBox;
