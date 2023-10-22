'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import navLogo from '@/assets/logo/kalasalogo.svg';
import { menus } from '@/config/menus.config';
import NavLink from './NavLink';
import IconLogout from '@/icons/dashboard/IconLogout';

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="w-[30%] xl:w-[20%] sticky top-0 p-4 h-full max-h-[851px] flex flex-col gap-4 py-6">
      <header>
        <Image
          src={navLogo}
          width={124}
          height={80}
          quality={100}
          loading="lazy"
          alt="logo"
          className="object-cover"
        />
      </header>
      <nav>
        <ul className="flex flex-col gap-2">
          {menus.map((menu) => (
            <NavLink key={menu.href} menu={menu} pathname={pathname} />
          ))}
        </ul>
      </nav>

      <div className="mt-auto flex justify-between items-start border-t border-black-100 px-2 pt-4">
        <div className="flex flex-col text-sm">
          <span className="font-bold text-24">Olivia Rhye</span>
          <span className="text-grey text-medium">olivia@untitledui.com</span>
        </div>

        <button aria-label="log out">
          <IconLogout />
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;
