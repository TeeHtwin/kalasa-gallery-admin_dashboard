import ImageIconCom from './ImageIconCom';
import searchIcon from '@/assets/icons/search.svg';
import calendarIcon from '@/assets/icons/calendar.svg';

interface IPageHeaderBox {
  handlerSearch: () => void;
  searchText: any;
}

const PageHeaderBox = ({ handlerSearch, searchText }: IPageHeaderBox) => {
  return (
    <article className="w-full max-h-[60px] flex justify-between gap-3 my-3 text-btnText">
      <button className="w-[30%] block border rounded center py-1 px-3">
        <p className="flex-1 text-start">Sep 16th 2022 - Sep 27th 2022</p>
        <ImageIconCom src={calendarIcon} />
      </button>

      <div className="border w-[30%] rounded overflow-hidden flex">
        <button
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
          defaultValue={searchText}
          onChange={(e) => (searchText.current = e.target.value.toLowerCase())}
        />
      </div>
    </article>
  );
};

export default PageHeaderBox;
