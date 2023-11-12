'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import FormHeader from '@/components/login/FormHeader';
import FormInput from '@/components/login/FormInput';
import { FormEvent, useState } from 'react';
import { FORGOT_PASSWORD } from '@/constants/routes';
import { signIn } from 'next-auth/react';

const page = () => {
  const router = useRouter();
  const [loginFail, setLoginFail] = useState({
    status: false,
    msg: '',
  });

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    if (!data.get('email') || !data.get('password')) {
      setLoginFail({
        msg: 'Please provide valid email and password',
        status: true,
      });
    }

    const respStatus = await signIn('credentials', {
      email: data.get('email'),
      password: data.get('password'),
      redirect: false,
    });

    if (respStatus && respStatus.status === 200) {
      router.push('/');
      setLoginFail({ ...loginFail, status: false });
    } else {
      setLoginFail({ msg: 'wrong email and password', status: true });
      router.push('/login');
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 h-full">
      {loginFail.status && (
        <p className="bg-red flex justify-between items-center text-white p-1 rounded font-semibold tracking-wider font-ariel">
          <span>{loginFail.msg}</span>
          <button
            onClick={() => setLoginFail({ status: false, msg: '' })}
            className="bg-white hover:bg-slate-200 text-red inline-block p-1 rounded drop-shadow-md"
          >
            X
          </button>
        </p>
      )}
      <FormHeader
        title="Login to the dashboard"
        description="Welcome back! Please enter your details."
      />

      <fieldset className="flex flex-col gap-4 grow justify-between">
        <FormInput
          id="email"
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
        />
        <FormInput
          id="password"
          name="password"
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
