import ImageIconCom from '../common/ImageIconCom';
import searchIcon from '@/assets/icons/search.svg';
import calendarIcon from '@/assets/icons/calendar.svg';
import { FormatDate } from '@/utils/FormatDate';
import { FormEvent } from 'react';

const SearchForm = ({ handlerSearch, searchText }: any) => {
  return (
    <form
      onSubmit={handlerSearch}
      className="border w-[20%] bg-grey-dark rounded overflow-hidden flex"
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
        className="flex-1 outline-none bg-transparent text-black-400 px-2 text-medium"
        ref={searchText}
        onChange={(e) => (searchText.current = e.target.value.toLowerCase())}
      />
    </form>
  );
};

export default SearchForm;
