import Breadcrumb from '@/components/ui/Breadcrumb';

const Blogs = () => {
  return (
    <div>
      Blogs
      <Breadcrumb
        items={[
          { name: 'Blogs', url: '/' },
          { name: 'Create a Blog'},
        ]}
      />
    </div>
  );
};
export default Blogs;
