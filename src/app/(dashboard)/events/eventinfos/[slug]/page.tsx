'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Breadcrumbs } from '@/components/common';
import PageheaderSubNav from '@/components/common/PageheaderSubNav';
import eventIcon from '@/assets/icons/gallery.svg';
import editIcon from '@/assets/icons/edit.svg';
import EventInfosCom from '../../components/EventInfosCom';
import { ModalBox } from '@/components';
import { modalBoxQNAEvent } from '@/constants/ques';
import { ModalBoxStyleFun } from '@/utils/ModalBox';

const EventInfos = () => {
  const [showModal, setShowModal] = useState(false);
  const path = usePathname();

  return (
    <section className="min-h-full p-4 relative overflow-hidden">
      <ModalBox
        {...modalBoxQNAEvent}
        cn={ModalBoxStyleFun(showModal)}
        confirmFun={() => {}}
        closeFun={() => setShowModal(false)}
      />
      <Breadcrumbs icon={eventIcon} breadcrumbs={['events', 'event infos']} />

      <PageheaderSubNav
        link={`${path}/editevent`}
        headerLabel="event infos"
        btnLabel="edit event"
        deleteLabel="delete event"
        icon={editIcon}
        handleModalBox={() => setShowModal(!showModal)}
      />

      <EventInfosCom />
    </section>
  );
};

export default EventInfos;
