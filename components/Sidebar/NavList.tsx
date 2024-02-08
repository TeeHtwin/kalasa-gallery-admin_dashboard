'use client';

import React from 'react';
import { menus } from '@/config/menus.config';
import NavLink from './NavLink';
import { usePathname } from 'next/navigation';

const NavList = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {menus.map((menu) => (
          <NavLink key={menu.href} menu={menu} pathname={pathname} />
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
