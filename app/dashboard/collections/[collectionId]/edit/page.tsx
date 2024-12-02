import { auth } from '@/auth';
import Breadcrumb from '@/components/ui/Breadcrumb';
import EditCollection from './EditCollection';

type Props = {};

export default async function page({
  params,
}: {
  params: { collectionId: string };
}) {
  const session = await auth();
  return (
    <div className="px-4 overflow-scroll">
      <Breadcrumb
        items={[
          { name: 'Collection', url: '/collections' },
          { name: 'Edit Collection' },
        ]}
      />
      <EditCollection
        token={session?.api_token ?? ''}
        id={params?.collectionId}
      />
    </div>
  );
}
