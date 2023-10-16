'use client';

import FormHeader from '@/components/login/FormHeader';
import FormInput from '@/components/login/FormInput';
import { LOGIN } from '@/constants/routes';
import Link from 'next/link';
import { FormEvent } from 'react';

const page = () => {
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('not implemented yet');
  };
  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 h-full">
      <FormHeader
        title="Reset Password"
        description="Enter the new password that you want to be added to your email."
      />

      <fieldset className="flex flex-col gap-4 grow justify-between">
        <FormInput
          id="password"
          label="New Password"
          type="password"
          placeholder="Enter your password"
        />

        <FormInput
          id="password"
          label="Confirm New Password"
          type="password"
          placeholder="Confirm your password"
        />

        <div className="flex flex-col gap-1">
          <button className="font-bold text-white bg-primary rounded-lg h-11">
            Send
          </button>

          <p className="text-primary text-sm">
            Back to login?{' '}
            <Link href={LOGIN} className="underline">
              Click here
            </Link>
          </p>
        </div>
      </fieldset>
    </form>
  );
};
export default page;
