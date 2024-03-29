'use client';

import Image from 'next/image';
import navLogo from '@/assets/logo/nav-logo.svg';
import IconLogout from '../../icons/dashboard/IconLogout';
import NavList from './NavList';
import { signOut } from 'next-auth/react';
import { Session } from 'next-auth';

export default function Sidebar({ session }: { session: Session | null }) {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <aside className="w-[300px] fixed left-0 top-0 p-4 h-full max-h-[851px] flex flex-col gap-4 py-6 border-r">
      <header>
        <Image src={navLogo ?? ''} width={124} height={47} alt="logo" />
      </header>
      <NavList />

      <div className="mt-auto flex justify-between items-start border-t border-black-100 px-2 pt-4">
        <div className="flex flex-col text-sm">
          <span className="font-bold">{session?.user?.name}</span>
          <span>{session?.user?.email}</span>
        </div>
        <button onClick={handleSignOut}>
          <IconLogout />
        </button>
      </div>
    </aside>
  );
}
