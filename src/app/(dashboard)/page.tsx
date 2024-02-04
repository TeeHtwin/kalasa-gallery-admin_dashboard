import ContactAndEvents from '@/components/dashboard/ContactAndEvents';
import InquireReport from '@/components/dashboard/InquireReport';
import Statues from '@/components/dashboard/Statues';

const Home = () => {
  return (
    <div className="flex min-h-screen">
      <div className="grow border-r border-l py-6 px-4 flex flex-col gap-14">
        <Statues />
        <InquireReport />
      </div>

      <ContactAndEvents />
    </div>
  );
};
export default Home;
