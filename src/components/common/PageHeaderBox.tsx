import React from 'react';

const PageHeaderBox = () => {
  return (
    <>
      <article className="w-[75%] flex gap-3 my-3 text-btnText">
        <div className="border flex-1 rounded flex py-1 px-3">
          <span>icon</span>
          <input type="text" placeholder="Search By Name" />
        </div>

        <div className="w-[15%] border rounded flex py-1 px-3">
          <p>Sort By</p>
          <span>i</span>
        </div>

        <div className="border rounded flex flex-1 py-1 px-3">
          <p>Sep 16th 2022 - Sep 27th 2022</p>
          <span>icon</span>
        </div>
      </article>
      <div className="flex justify-between items-center text-primary py-2 text-btnText">
        <div>
          <input type="checkbox" />
          <label htmlFor="" className="ml-2">
            Quick Action
          </label>
        </div>
        <div className="">
          Sort By <span>icon</span>
        </div>
      </div>
    </>
  );
};

export default PageHeaderBox;
