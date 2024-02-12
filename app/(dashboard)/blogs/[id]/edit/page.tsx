import { auth } from '@/auth';
import Breadcrumb from '@/components/ui/Breadcrumb';
import EditBlog from './EditBlog';

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
          { name: 'Blog', url: '/Blogs' },
          { name: 'Edit Blog' },
        ]}
      />
      <EditBlog
        token={session?.api_token ?? ''}
        id={params?.collectionId}
      />
    </div>
  );
}
