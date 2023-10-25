'use client';
import { useState } from 'react';
import CreateEventForm from '../../../createevent/Form';
import poster from '@/assets/dummy/poster.png';
import { ModalBox } from '@/components';
import { modalBoxQNAEvent } from '@/constants/ques';
import { ModalBoxStyleFun } from '@/utils/ModalBox';
import PageheaderSubNav from '@/components/common/PageheaderSubNav';
import galleryIcon from '@/assets/icons/galleryWhite.svg';

const EditEvent = () => {
  const [showModalBox, setShowModalBox] = useState(false);

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
        deleteLabel="delete an event"
      />

      <CreateEventForm image={poster} />
    </>
  );
};

export default EditEvent;
