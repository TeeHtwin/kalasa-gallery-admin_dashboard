import EventsTable from "./Events";
import { auth } from '@/auth';

const page = async() => {
  const session = await auth()
  return (
    <div>
      <EventsTable token={session?.api_token ?? ''}/>
    </div>
  );
};
export default page;
