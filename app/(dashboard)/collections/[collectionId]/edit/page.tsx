import { auth } from '@/auth';
import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';

type Props = {};

export default async function page({}: Props) {
  const session = await auth();
  return (
    <div className="px-4 overflow-scroll">
      <Breadcrumb
        items={[
          { name: 'Collection', url: '/collections' },
          { name: 'Edit Collection' },
        ]}
      />
    </div>
  );
}
