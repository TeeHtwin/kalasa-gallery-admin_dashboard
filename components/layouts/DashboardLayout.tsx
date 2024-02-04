import { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header>Header Section</header>
      <aside>navbar</aside>
      <main>{children}</main>
    </div>
  );
};
export default DashboardLayout;
