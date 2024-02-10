import { auth } from '@/auth';
import Sidebar from '../../components/Sidebar/Sidebar';

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <>
      <Sidebar session={session} />
      <main className="sticky left-[300px] top-0 w-[calc(100vw-300px)] min-h-screen">
        {children}
      </main>
    </>
  );
}
