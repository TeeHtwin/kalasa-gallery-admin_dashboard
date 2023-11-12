import Image from 'next/image';
import imgLogin from '@/assets/backgrounds/login-geo-shapes.png';
import iconLogo from '@/assets/logo/kalasalogo.svg';
import { getServerSession } from 'next-auth/next';
import { Options } from '../api/auth/protected/Protect';
import { redirect } from 'next/navigation';

const LoginLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(Options);

  if (session) return redirect('/');
  return (
    <div className="h-screen">
      <div className="h-screen w-full lg:w-[50vw] absolute z-10 bg-transparent lg:bg-secondary-100 flex items-center justify-center">
        <header className="p-8 fixed top-0 left-0 right-0 flex">
          <Image src={iconLogo} loading="eager" alt="logo" />
        </header>

        <section className="w-full sm:w-[60%] bg-white rounded-lg px-10 py-[46px] text-black">
          {children}
        </section>

        <footer className="text-black p-8 fixed bottom-0 left-0 right-0">
          <span className="text-lg font-primary">
            © Kalasa. Art Space.2023
          </span>
        </footer>
      </div>

      <Image
        src={imgLogin}
        alt=""
        width={1440}
        height={960}
        loading="eager"
        className="h-screen lg:fixed right-0 top-0 w-full lg:w-[50vw] absolute"
      />
    </div>
  );
};
export default LoginLayout;
