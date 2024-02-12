'use client';

import BlogCrateForm from '@/components/blog/BlogForm';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CtaBtn from '@/components/ui/CtaBtn';
import TitleSection from '@/components/ui/TitleSection';
import { Title } from '@radix-ui/react-alert-dialog';
import { HiOutlinePlus } from 'react-icons/hi';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { auth } from '@/auth';
import CreateBlog from './CreateBlog';

const page = async() => {
  const session = await auth();

  return (
    <main>
      <Breadcrumb
        items={[
          { name: 'Blogs', url: '/blogs', icon: '/vercel.svg' },
          { name: 'Create Blog' },
        ]}
      />
      <CreateBlog token={session?.api_token ?? ''} />
    </main>
  );
};
export default page;
