import ContactAndEvents from '../../components/dashboard/ContactAndEvents';
import InquireReport from '../../components/dashboard/InquireReport';
import Statues from '../../components/dashboard/Statues';

export default async function page() {
  const response = await fetch(
    'https://staging.kalasa.gallery/api/enduser/home',
  )
    .then((res) => res.json())
    .catch((error) => console.log('error::', error));

  const data = response?.data;
  console.log(data.events);

  return (
    <div className="flex min-h-screen">
      <div className="grow border-r border-l py-6 px-4 flex flex-col gap-14">
        <Statues />
        <InquireReport />
      </div>

      <ContactAndEvents />
    </div>
  );
}
