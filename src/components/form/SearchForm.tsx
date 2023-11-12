import ImageIconCom from '../common/ImageIconCom';
import searchIcon from '@/assets/icons/search.svg';
import { useArtWorkStore } from '@/store/artStore';

const SearchForm = ({
  setSearchKeyWord,
}: {
  setSearchKeyWord: (e: string) => void;
}) => {
  return (
    <div className="border w-[20%] bg-grey-dark rounded overflow-hidden flex">
      <span className="w-[45px] pl-1 block center h-full">
        <ImageIconCom src={searchIcon} />
      </span>
      <input
        type="text"
        id="search_input"
        placeholder="Search By Name"
        className="flex-1 outline-none bg-transparent text-black-400 px-2 text-medium"
        onChange={(e) => setSearchKeyWord(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchForm;
