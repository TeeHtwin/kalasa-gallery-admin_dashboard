import ContactAndEvents from '@/components/dashboard/ContactAndEvents';
import EnquireReport from '@/components/dashboard/EnquireReport';
import Statues from '@/components/dashboard/Statues';
import { loginRequiredServer } from '../api/auth/protected/Protect';

const Home = async () => {
  await loginRequiredServer();

  return (
    <div className="flex min-h-screen">
      <div className="grow border-r border-l py-6 px-4 flex flex-col gap-14">
        <Statues />
        <EnquireReport />
      </div>

      <ContactAndEvents />
    </div>
  );
};
export default Home;
