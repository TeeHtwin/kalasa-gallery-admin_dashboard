'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import navLogo from '@/assets/logo/nav-logo.svg';
import { menus } from '@/config/menus.config';
import NavLink from './NavLink';

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="w-[300px] fixed left-0 top-0 p-4 h-full max-h-[851px] flex flex-col gap-2">
      <header className="py-4">
        <Image src={navLogo} width={124} height={47} alt="logo" />
      </header>

      <nav>
        <ul className="flex flex-col gap-2">
          {menus.map((menu) => (
            <NavLink key={menu.href} menu={menu} pathname={pathname} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;
