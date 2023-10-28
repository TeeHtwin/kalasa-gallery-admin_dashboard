'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ModalBox, FormControl } from '@/components';
import { modalBoxQNAEvent } from '@/constants/ques';
import { ModalBoxStyleFun } from '@/utils/ModalBox';
import PageheaderSubNav from '@/components/common/PageheaderSubNav';
import galleryIcon from '@/assets/icons/galleryWhite.svg';
import collection from '@/assets/dummy/collection2.png';

const EditCollection = () => {
  const [showModalBox, setShowModalBox] = useState(false);

  const image = true;
  return (
    <>
      <ModalBox
        {...modalBoxQNAEvent}
        cn={ModalBoxStyleFun(showModalBox)}
        closeFun={() => setShowModalBox(false)}
        confirmFun={() => {}}
      />
      <PageheaderSubNav
        link=""
        headerLabel="Edit an Event"
        btnLabel="save"
        icon={galleryIcon}
        handleModalBox={() => setShowModalBox(!showModalBox)}
        deleteLabel="Delete Cllection"
      />

      <form action="">
        <main className="min-h-[340px]">
          <p className="text-medium capitalize">add a cover image</p>

          {image ? (
            <div className="w-[300px] max-h-[240px]">
              <Image
                src={collection}
                alt="event_poster_img"
                width={1024}
                height={1024}
                quality={100}
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-[50%] h-[340px] bg-black-300 center text-white">
              Add an Image
            </div>
          )}
        </main>

        <div className="w-2/6 mb-2 font-primary">
          <FormControl
            label="title"
            name="collection_titile"
            value="BLESSING & PEACE AMONG CHAOS"
          />
        </div>
        <div className="w-[80%]">
          <label className="block capitalize text-[18px] mb-1 font-semibold tracking-wider font-primary">
            Description
          </label>
          <textarea
            name="collection_desc"
            className="w-full h-[240px] border border-grey-100 rounded-sm px-2 outline-none resize-none text-medium py-2"
          >
            The Amazon CloudFront distribution is configured to block access
            from your country. We can't connect to the server for this app or
            website at this time. There might be too much traffic or a
            configuration error. Try again later, or contact the app or website
            owner.If you provide content to customers through CloudFront, you
            can find steps to troubleshoot and help prevent this error by
            reviewing the CloudFront documentation.
          </textarea>
        </div>
      </form>
    </>
  );
};

export default EditCollection;
