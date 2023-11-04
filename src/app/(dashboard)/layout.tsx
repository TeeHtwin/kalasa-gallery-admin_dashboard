import Sidebar from '@/components/Sidebar/Sidebar';

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex">
      <Sidebar />
      <main className="flex-1 min-h-screen">{children}</main>
    </section>
  );
};
export default layout;
