import BlogTable from '@/components/blog/BlogTable';
import Breadcrumb from '@/components/ui/Breadcrumb';

const Blogs = () => {
  return (
    <main>
      Blogs
      <Breadcrumb
        items={[
          { name: 'Blogs', url: '/', icon: '/vercel.svg' },
          { name: 'Create a Blog' },
        ]}
      />
      <BlogTable />
    </main>
  );
};
export default Blogs;
