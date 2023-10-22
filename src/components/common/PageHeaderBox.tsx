import React from 'react';
import ImageIconCom from './ImageIconCom';
import searchIcon from '@/assets/icons/search.svg';
import chevronDown from '@/assets/icons/chevrondown.svg';
import calendarIcon from '@/assets/icons/calendar.svg';

interface IPageHeaderBox {
  handlerSearch: () => void;
  searchText: any;
}

const PageHeaderBox = ({ handlerSearch, searchText }: IPageHeaderBox) => {
  return (
    <section className="w-full">
      <article className="w-full min-h-[55px] 2xl:w-[70%] max-h-[60px] flex gap-3 my-3 text-btnText">
        <div className="border flex-1 rounded flex">
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
            onChange={(e) =>
              (searchText.current = e.target.value.toLowerCase())
            }
          />
        </div>

        <div className="w-[15%] border rounded center py-1 px-3">
          <p className="flex-1">Sort By</p>
          <ImageIconCom src={chevronDown} />
        </div>

        <button className="w-fit block border rounded center flex-1 py-1 px-3">
          <p className="flex-1 text-start">Sep 16th 2022 - Sep 27th 2022</p>
          <ImageIconCom src={calendarIcon} />
        </button>
      </article>
      <div className="flex justify-between items-center text-primary py-2 text-btnText">
        <div>
          <label htmlFor="checkbox" className="ml-2 cursor-pointer">
            <input
              type="checkbox"
              id="checkbox"
              className="apperance-none mr-1"
            />
            Quick Action
          </label>
        </div>
        <div className="center gap-2 text-primary">
          Sort By <ImageIconCom src={chevronDown} />
        </div>
      </div>
    </section>
  );
};

export default PageHeaderBox;
