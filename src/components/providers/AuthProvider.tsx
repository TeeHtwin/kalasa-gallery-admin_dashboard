'use client';

import { redirect } from 'next/navigation';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  console.log('localstorage::', typeof window);
  return <>{children}</>;
};

export default AuthProvider;
