import Sidebar from '@/components/Sidebar/Sidebar';
import { loginRequiredInServer } from '../api/auth/protected/Protected';

const layout = async ({ children }: { children: React.ReactNode }) => {
  await loginRequiredInServer();

  return (
    <section className="flex">
      <Sidebar />
      <main className="flex-1 min-h-screen">{children}</main>
    </section>
  );
};
export default layout;
