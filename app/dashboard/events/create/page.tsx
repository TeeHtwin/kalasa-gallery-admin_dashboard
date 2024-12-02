import Breadcrumb from '@/components/ui/Breadcrumb';
import CreateEvent from './CreateEvent';
import { auth } from '@/auth';

const page = async () => {
  const session = await auth();

  return (
    <div className="px-4 overflow-scroll">
      <Breadcrumb
        items={[{ name: 'Event', url: '/events' }, { name: 'Create Event' }]}
      />

      <CreateEvent token={session?.api_token ?? ''} />
    </div>
  );
};
export default page;
