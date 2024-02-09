import Breadcrumb from '@/components/ui/Breadcrumb';
import CtaBtn from '@/components/ui/CtaBtn';
import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <div className="px-4">
      <Breadcrumb
        items={[
          { name: 'Collection', url: '/collections' },
          { name: 'Create Collection' },
        ]}
      />
      <div className="flex justify-between items-center text-primary h-6">
        <h2 className="text-xl font-medium">Create Collection</h2>
        <CtaBtn>Submit</CtaBtn>
      </div>
      <form></form>
    </div>
  );
}
