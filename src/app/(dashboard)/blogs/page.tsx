import Breadcrumb from '@/components/ui/Breadcrumb';

const Blogs = () => {
  return (
    <div>
      Blogs
      <Breadcrumb
        items={[
          { name: 'Blogs', url: '/', icon: '/vercel.svg' },
          { name: 'Create a Blog'},
        ]}
      />
    </div>
  );
};
export default Blogs;
