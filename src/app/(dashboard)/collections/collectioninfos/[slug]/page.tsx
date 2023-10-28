'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Breadcrumbs } from '@/components/common';
import PageheaderSubNav from '@/components/common/PageheaderSubNav';
import eventIcon from '@/assets/icons/gallery.svg';
import editIcon from '@/assets/icons/edit.svg';
import { ModalBox } from '@/components';
import { modalBoxQNAEvent } from '@/constants/ques';
import { ModalBoxStyleFun } from '@/utils/ModalBox';
import CollectionInfoCom from '@/components/infoscom/CollectionInfoCom';

const CollectionInfos = () => {
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
      <Breadcrumbs
        icon={eventIcon}
        breadcrumbs={['collection', 'collection infos']}
      />

      <PageheaderSubNav
        link={`${path}/editcollection`}
        headerLabel="collection infos"
        btnLabel="edit collection"
        deleteLabel="delete collection"
        icon={editIcon}
        handleModalBox={() => setShowModal(!showModal)}
      />

      <CollectionInfoCom />
    </section>
  );
};

export default CollectionInfos;
