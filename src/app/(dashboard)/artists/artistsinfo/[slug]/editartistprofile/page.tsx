'use client';
import { useState } from 'react';
import { Breadcrumbs, PageheaderSubnav } from '@/components/common';
import { FormControl, ModalBox } from '@/components';
import artIcon from '@/assets/icons/artists.svg';
import Image from 'next/image';
import artist from '@/assets/dummy/artistprofile.jpg';
import { modalboxQNAArtist } from '@/constants/ques';
import { ModalBoxStyleFun } from '@/utils/ModalBox';

const EditProfile = () => {
  // const currentPath = usePathname();
  const [showModalBox, setShowModalBox] = useState(false);
  const currentPath = '';
  return (
    <section className="py-6 mb-3 bg-white drop-shadow-md">
      <ModalBox
        {...modalboxQNAArtist}
        cn={ModalBoxStyleFun(showModalBox)}
        closeFun={() => setShowModalBox(!showModalBox)}
        confirmFun={() => {}}
      />

      <main className="px-3 py-4">
        <div className="w-full border mb-8" />
        <Breadcrumbs
          icon={artIcon}
          breadcrumbs={['artists', "artist's infos"]}
        />
        <PageheaderSubnav
          link={`${currentPath}/editartistprofile`}
          headerLabel="edit artist"
          btnLabel="Submit"
          deleteLabel="delete artist"
          handleModalBox={() => setShowModalBox(true)}
        />

        <article className="font-ariel">
          <div>
            <p>add a profile image</p>
            <div className="w-[300px] h-[300px]">
              <Image
                src={artist}
                alt="artist_img"
                width={1024}
                height={1024}
                quality={100}
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-[30%] my-4">
            <FormControl
              label="artist's name"
              name="artist_name"
              value="aung myine thein"
            />
          </div>

          <div className="w-[80%]">
            <label
              htmlFor="artist_desc"
              className="block capitalize text-[18px] mb-1 font-semibold tracking-wider font-primary"
            >
              Description
            </label>
            <textarea
              name="artist_desc"
              id="artist_desc"
              className="w-full h-32 border py-0.5 border-grey-100 rounded-sm px-2 outline-none"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              nihil deserunt laborum debitis eius similique. Quis at, aperiam
              possimus hic asperiores consequatur voluptatum, voluptas nesciunt
              officiis omnis repellendus libero magni?
            </textarea>
          </div>
        </article>
      </main>
    </section>
  );
};

export default EditProfile;
