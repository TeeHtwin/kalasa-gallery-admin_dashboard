'use client';

import FormHeader from '../../../components/login/FormHeader';
import CustomInput from '../../../components/common/CustomInput';
import { redirect } from 'next/navigation';
import { authenticate } from '@/lib/actions';
import { useFormState } from 'react-dom';

const LoginPage = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <form action={dispatch} className="flex flex-col gap-6 h-full">
      <FormHeader
        title="Login to the dashboard"
        description="Welcome back! Please enter your details."
      />

      <fieldset className="flex flex-col gap-4 grow justify-between">
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />{' '}
        <div className="flex items-center justify-between">
          {' '}
          <div className="flex gap-2 items-center">
            {' '}
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
