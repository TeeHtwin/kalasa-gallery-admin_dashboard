'use client';
import {
  Breadcrumbs,
  PageHeader,
  PageheaderSubnav,
  DataInfo,
} from '@/components/common';
import { GalleryCard, ModalBox } from '@/components';
import React from 'react';
import artIcon from '@/assets/icons/artists.svg';
import Image from 'next/image';
import artist from '@/assets/dummy/artistprofile.jpg';
import { usePathname } from 'next/navigation';
import PagiBtn from '@/components/common/PagiBtn';
import IconChevron from '@/icons/common/IconChevron';
import { modalboxQNAArtist } from '@/constants/ques';

const ArtistInfos = () => {
  const currentPath = usePathname();
  return (
    <PageheaderSubnav
      link={`${currentPath}/editartistprofile`}
      headerLabel="artist's infos"
      btnLabel="edit artist"
      deleteLabel="delete an artwork"
    />
  );
};

export default ArtistInfos;
