import Sidebar from '@/components/Sidebar/Sidebar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <main className="fixed left-[300px] top-0 w-[calc(100vw-300px)] min-h-screen p-4">
        {children}
      </main>
    </>
  );
};
export default layout;
