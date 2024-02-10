import Breadcrumb from '@/components/ui/Breadcrumb';
import React from 'react';
import CreateCollection from './CreateCollection';
import { auth } from '@/auth';

export default async function page() {
  const session = await auth();
  return (
    <div className="px-4 overflow-scroll">
      <Breadcrumb
        items={[
          { name: 'Collection', url: '/collections' },
          { name: 'Create Collection' },
        ]}
      />

      <CreateCollection token={session?.api_token ?? ''} />
    </div>
  );
}
