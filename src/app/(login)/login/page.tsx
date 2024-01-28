'use client';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import FormHeader from '@/components/login/FormHeader';
import FormInput from '@/components/login/FormInput';
import { FormEvent } from 'react';
import { FORGOT_PASSWORD } from '@/constants/routes';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {};

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 h-full">
      <FormHeader
        title="Login to the dashboard"
        description="Welcome back! Please enter your details."
      />

      <fieldset className="flex flex-col gap-4 grow justify-between">
        <FormInput
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
        />
        <FormInput
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="w-4 h-4 accent-primary-100"
            />
            <label htmlFor="remember-me" className="text-sm">
              Remember for 30 days
            </label>
          </div>

          <Link
            href={FORGOT_PASSWORD}
            className="text-sm font-bold text-primary"
          >
            Forgot password
          </Link>
        </div>
        <button className="font-bold text-white bg-primary rounded-lg h-11">
          Sign In
        </button>
      </fieldset>
    </form>
  );
};
export default page;
