import Image from 'next/image';
import imgLogin from '@/assets/backgrounds/login-geo-shapes.png';
import iconLogo from '@/assets/logo/kalasalogo.svg';

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen">
      <div className="h-screen w-[50vw] bg-secondary-100 flex items-center justify-center">
        <header className="p-8 fixed top-0 left-0 right-0 flex">
          <Image src={iconLogo} loading="eager" alt="logo" />
        </header>

        <section className="bg-white rounded-lg">{children}</section>

        <footer className="p-8 fixed bottom-0 left-0 right-0">
          <span className="text-primary text-light tracking-wider font-primary text-24">
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
        className="h-screen fixed right-0 top-0 w-[50vw]"
      />
    </div>
  );
};
export default LoginLayout;
