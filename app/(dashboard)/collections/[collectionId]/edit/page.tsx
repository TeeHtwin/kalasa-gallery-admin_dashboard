import { auth } from '@/auth';
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
