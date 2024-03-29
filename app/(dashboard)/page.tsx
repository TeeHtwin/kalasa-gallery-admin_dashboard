import { auth } from '@/auth';
import ContactAndEvents from '../../components/dashboard/ContactAndEvents';
import InquireReport from '../../components/dashboard/InquireReport';
import Statues from '../../components/dashboard/Statues';

export default async function page() {
  const session = await auth();

  return (
    <div className="flex min-h-screen">
      <div className="grow border-r border-l py-6 px-4 flex flex-col gap-14">
        <Statues token={session?.api_token ?? ''} />
        <InquireReport />
      </div>

      <ContactAndEvents />
    </div>
  );
}
