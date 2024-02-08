'use client';

import BlogCrateForm from '@/components/blog/BlogForm';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CtaBtn from '@/components/ui/CtaBtn';
import TitleSection from '@/components/ui/TitleSection';
import { Title } from '@radix-ui/react-alert-dialog';
import { HiOutlinePlus } from 'react-icons/hi';
import { HiOutlinePencilAlt } from 'react-icons/hi';

const page = () => {
  const handleCreate = () => {
    console.log('Create Artist');
  };

  return (
    <main>
      <Breadcrumb
        items={[
          { name: 'Blogs', url: '/', icon: '/vercel.svg' },
          { name: 'Create a Blog' },
        ]}
      />
      <TitleSection title={'Create a Blog'}>
        <CtaBtn onClick={handleCreate}>
          <HiOutlinePlus />
          Submit
        </CtaBtn>
      </TitleSection>
      <BlogCrateForm />
    </main>
  );
};
export default page;
