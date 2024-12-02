
import Breadcrumb from '@/components/ui/Breadcrumb';
import CtaBtn from '@/components/ui/CtaBtn';
import TitleSection from '@/components/ui/TitleSection';
import Link from 'next/link';
import { auth } from '@/auth';
import  BlogDetails from './BlogDetails'


const page = async({ params }: { params: { id: string } }) => {
  const session = await auth();

  return (
    <main className="p-8">
      <Breadcrumb
        items={[
          { name: 'Blogs', url: '/blogs', icon: '/vercel.svg' },
          { name: 'Blog Info' },
        ]}
      />
      <TitleSection title="Blog Infos">
        <CtaBtn>
          <Link href={`/blogs/${params.id}/edit`}>Edit Blog</Link>
        </CtaBtn>
      </TitleSection>
      <BlogDetails token={session?.api_token ?? ''}
        id={params?.id}/>
    </main>
  );
};
export default page;
