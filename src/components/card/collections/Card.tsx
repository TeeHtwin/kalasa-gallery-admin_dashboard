import React from 'react';
import collection from '@/assets/dummy/collection.jpg';
import Image from 'next/image';
import Link from 'next/link';

const CollectionCard = ({ poster }: { poster?: any }) => {
  return (
    <Link href={`/dashboard/collections/collectioninfos/${132}`}>
      <article
        className="mb-2 flex gap-2 border rounded-lg
     p-2"
      >
        <div className="h-[180px]">
          <Image
            src={poster || collection}
            alt="collection_image"
            width={650}
            quality={100}
            objectFit="cover"
            height={180}
          />
        </div>
        <div className="p-1">
          <h2 className="font-semibold text-24 tracking-wider">
            BLESSING & PEACE AMONG CHAOS
          </h2>
          <p className="text-medium my-1">
            The Amazon CloudFront distribution is configured to block access
            from your country to your anty...See more
          </p>

          <p className="text-small">Uploaded on October 28, 2022</p>
        </div>
      </article>
    </Link>
  );
};

export default CollectionCard;
