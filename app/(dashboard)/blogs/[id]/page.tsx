import DetailsSection from '@/components/blog/DetailsSection';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CtaBtn from '@/components/ui/CtaBtn';
import TitleSection from '@/components/ui/TitleSection';
import Link from 'next/link';

const page = ({ params }: { params: { id: string } }) => {
  return (
    <main className="p-8">
      <Breadcrumb
        items={[
          { name: 'Blogs', url: '/', icon: '/vercel.svg' },
          { name: 'Blog Info' },
        ]}
      />
      <TitleSection title="Blog Infos">
        <CtaBtn>
          <Link href={`/blogs/${params.id}/edit`}>Edit Blog</Link>
        </CtaBtn>
      </TitleSection>
      <DetailsSection />
    </main>
  );
};
export default page;
