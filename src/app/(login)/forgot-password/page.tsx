'use client';

import Link from 'next/link';
import FormHeader from '@/components/login/FormHeader';
import FormInput from '@/components/login/FormInput';
import { LOGIN, RESET_PASSWORD } from '@/constants/routes';
import { useRouter } from 'next/navigation';

const ForgotPassword = () => {
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log('t');
        router.push(RESET_PASSWORD);
      }}
      className="flex flex-col gap-6 h-full justify-center"
    >
      <FormHeader
        title="Forgot Password?"
        description="Enter the email address associated with your account."
      />

      <fieldset className="flex flex-col gap-4 justify-between">
        <FormInput
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
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
export default ForgotPassword;
