import * as React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import TypographyH1 from '@/components/ui/TypographyH1';
import CtaBtn from '@/components/ui/CtaBtn';
import Image from 'next/image';

export interface IAppProps {}

export default function Page(props: IAppProps) {
  return (
    <div>
      <Breadcrumb
        items={[
          {
            name: 'Artists',
            url: '/artists',
            icon: '/IconArtist.svg',
          },
          {
            name: 'Artwork Infos',
          },
        ]}
      />
      <div className="flex justify-between pr-8">
        <TypographyH1>Artist's Infos</TypographyH1>
        {/* <Link href={`/${}`} type="submit">
          <Image
            src="/IconGalleryUpload.svg"
            alt="IconGalleryUpload"
            width={15}
            height={15}
          />
          Submit
        </Link> */}
      </div>
    </div>
  );
}
