import ContactAndEvents from '@/components/dashboard/ContactAndEvents';
import EnquireReport from '@/components/dashboard/EnquireReport';
import Statues from '@/components/dashboard/Statues';

const Home = () => {
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
