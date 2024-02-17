'use client';

import Link from 'next/link';
import FormHeader from '../../../components/login/FormHeader';
import CustomInput from '../../../components/common/CustomInput';
import { FormEvent } from 'react';
import { FORGOT_PASSWORD } from '../../../constants/navRoutes';
import { useState } from 'react';
import { useFormState } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, formAction] = useFormState(authenticate, undefined);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formAction({
      email,
      password,
      callbackUrl: process.env.NEXT_PUBLIC_APP_URL ?? '/',
    });
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 h-full">
      <FormHeader
        title="Login to the dashboard"
        description="Welcome back! Please enter your details."
      />

      <fieldset className="flex flex-col gap-4 grow justify-between">
        <CustomInput
          title="Email"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          placeholder="Enter your email"
          name="Email"
          required
          errorMessage={''}
        />
        <CustomInput
          title="Password"
          name="Password"
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          inputType="password"
          placeholder="Enter your password"
          required
          errorMessage=""
        />

        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="w-4 h-4 accent-primary-100"
            />
            {/* <label htmlFor="remember-me" className="text-sm">
              Remember for 30 days
            </label> */}
          </div>

          {/* <Link
            href={FORGOT_PASSWORD}
            className="text-sm font-bold text-primary"
          >
            Forgot password
          </Link> */}
        </div>
        <button className="font-bold text-white bg-primary rounded-lg h-11">
          Sign In
        </button>
      </fieldset>
    </form>
  );
};

export default LoginPage;
