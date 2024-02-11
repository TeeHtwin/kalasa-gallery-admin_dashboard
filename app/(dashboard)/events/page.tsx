import EventsTable from "./Events";
import { auth } from '@/auth';

const page = async() => {
  const session = await auth()
  return (
    <>
      <EventsTable token={session?.api_token ?? ''}/>
    </>
  );
};
export default page;
