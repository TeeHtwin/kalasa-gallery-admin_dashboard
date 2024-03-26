import { auth } from '@/auth';
import Breadcrumb from '@/components/ui/Breadcrumb';
import EditEvent from './EditEvent';


export default async function page({
  params,
}: {
  params: { eventId: string };
}) {
  const session = await auth();
  return (
    <div className="px-4 overflow-scroll">
      <Breadcrumb
        items={[
          { name: 'Events', url: '/events' },
          { name: 'Edit Event' },
        ]}
      />
      <EditEvent token={session?.api_token ?? ''} id={params?.eventId} />
    </div>
  );
}
