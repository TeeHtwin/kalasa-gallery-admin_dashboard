'use client';
import React, { useState } from 'react';
import { Breadcrumbs, PageHeader, DataInfo } from '@/components/common';
import galleryIcon from '@/assets/icons/gallery.svg';
import { ModalBox } from '@/components';
import { modalBoxQNAContact } from '@/constants/ques';
import cn from 'classnames';

const ContactInfo = () => {
  const [showModalBox, setShowModalBox] = useState(false);

  const modalStyle = cn({
    'visible opacity-100 scale-100': showModalBox,
    'invisible opacity-0 scale-50': !showModalBox,
  });

  const hadleDeleteBtn = () => setShowModalBox(true);
  const handleModal = () => setShowModalBox(false);
  const handleDeleteActionConfirm = () => console.log('contact delete confirm');

  return (
    <section id="artworkinfo" className="min-h-full relative">
      <ModalBox
        cn={modalStyle}
        {...modalBoxQNAContact}
        closeFun={handleModal}
        confirmFun={handleDeleteActionConfirm}
      />
      <article className="px-3 pt-5">
        <Breadcrumbs
          icon={galleryIcon}
          breadcrumbs={['contact', 'contact infos']}
        />

        <div className="flex justify-between items-center my-3 text-small">
          <PageHeader title="Contact Infos" />
          <button
            onClick={hadleDeleteBtn}
            className="underline underline-offset-2 text-red"
          >
            Delete Contact
          </button>
        </div>

        {/* contact information */}
        <article>
          <div className="flex flex-col gap-4">
            <DataInfo label="Name" value={'Thomas Jhonson'} />
            <DataInfo label="Email" value={'thomas@jhonson.gmail.com'} />
            <DataInfo label="Phone Number" value={'09250250250'} />
          </div>

          <hr className="w-full bg-black-100 my-5" />

          <h5 className="text-primary font-ariel font-heading">
            I want to know about the detail price of artwork
          </h5>

          <p className="w-[70%] mt-3 text-medium text-grey">
            Artist Htoo Aung Kyaw was born in Kyaukpadaung , a small town on the
            way to Bagan , Mandalay Regain . He is a Bachelor’s degree holder in
            philosophy and studied art , especially in paintings , at the State
            School of Fine Art in Yangon . He has great interest in history and
            philosophy . Since he was child , he usually goes to Bagan and
            studied about See more...
          </p>

          <hr className="w-full bg-black-100 my-5" />
        </article>
      </article>
    </section>
  );
};

export default ContactInfo;
