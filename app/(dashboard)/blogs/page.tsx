import { auth } from '@/auth';
import Blogs from './Blogs';


const page = async() => {
  const session = await auth();
  return <Blogs token={session?.api_token ?? ''} />;

};
export default page;
