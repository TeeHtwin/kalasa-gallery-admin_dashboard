'use client';

import Link from 'next/link';
import FormHeader from '@/components/login/FormHeader';
import FormInput from '@/components/login/FormInput';
import { FormEvent, SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import { FORGOT_PASSWORD } from '@/constants/routes';
import { signIn } from 'next-auth/react';

const Login = () => {
  const router = useRouter();
  const handleFormSubmit = async (e: SyntheticEvent<any>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const resp = await signIn('credentials', {
      username: data.get('username'),
      password: data.get('password'),
      redirect: false,
    });
    if (resp && resp.status === 200) {
      router.push('/');
    } else {
      console.log(resp);
      router.push('/login');
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-full flex flex-col p-5 h-full"
    >
      <FormHeader
        title="Login to the dashboard"
        description="Welcome back! Please enter your details."
      />

      <fieldset className="flex flex-col gap-3 mt-4 grow justify-between">
        <FormInput
          id="email"
          label="Email"
          type="text"
          name="username"
          placeholder="Enter your email"
        />
        <FormInput
          id="password"
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />

        <div className="flex items-center justify-between text-small">
          <div className="flex gap-1.5 items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="w-2 h-2 accent-primary-100"
            />
            <label htmlFor="remember-me">Remember for 30 days</label>
          </div>

          <Link href={FORGOT_PASSWORD} className="font-bold text-primary">
            Forgot password
          </Link>
        </div>
        <button className="py-1.5 text-btnText tracking-wider font-bold text-white bg-primary rounded-lg">
          Sign In
        </button>
      </fieldset>
    </form>
  );
};
export default Login;
