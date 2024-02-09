import BlogTable from '@/components/blog/BlogTable';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { auth } from '@/auth';


const Blogs = async() => {
  const session = await auth();

  return (
    <main>
      Blogs
      <Breadcrumb
        items={[
          { name: 'Blogs', url: '/', icon: '/vercel.svg' },
          { name: 'Create a Blog' },
        ]}
      />
      <BlogTable token={session?.api_token ?? ''}/>
    </main>
  );
};
export default Blogs;
