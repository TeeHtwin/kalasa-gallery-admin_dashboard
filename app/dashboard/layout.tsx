import Sidebar from '../../components/Sidebar/Sidebar';

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Sidebar />
      </div>
      <div className="flex-grow md:overflow-y-auto md:px-12">{children}</div>
    </div>
  );
}
