import BlogForm from '@/components/blog/BlogForm';
import Breadcrumb from '@/components/ui/Breadcrumb';

const page = () => {
  const blog = {
    title: 'Blessing & Peace Among Chaos',
    description: `Artist Htoo Aung Kyaw was born in Kyaukpadaung , a small town on the
  way to Bagan , Mandalay Regain . He is a Bachelor’s degree holder in
  philosophy and studied art , especially in paintings , at the State
  School of Fine Art in Yangon . He has great interest in history and
  philosophy . Since he was child , he usually goes to Bagan and studied
  about See more...`,
  };
  return (
    <main>
      <Breadcrumb
        items={[
          { name: 'Blogs', url: '/', icon: '/vercel.svg' },
          { name: 'Edit a Blog' },
        ]}
      />
      <p className="text-xl text-primary pb-4">Edit the Blog</p>
      <BlogForm blogDetails={blog} />
    </main>
  );
};
export default page;
