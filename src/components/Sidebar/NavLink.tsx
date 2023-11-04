import Link from 'next/link';
import cn from 'classnames';
import IconChevron from '@/icons/common/IconChevron';

type NavLinkProps = {
  pathname: string;
  menu: {
    label: string;
    href: string;
    icon: ({ fill }: { fill?: string }) => JSX.Element;
  };
};

const NavLink = ({ menu, pathname }: NavLinkProps) => {
  const isActive = pathname === menu.href;

  return (
    <Link
      href={`${menu.href}`}
      className="flex gap-4 text-btnText rounded-full bg-white py-1.5 pl-6 pr-4 items-center shadow-100"
    >
      <menu.icon fill={isActive ? '#803806' : '#8A8A8A'} />
      <span
        className={cn(
          'capitalize',
          isActive ? 'text-primary' : 'text-black-100',
        )}
      >
        {menu.label}
      </span>

      <button aria-hidden className="ml-auto">
        <IconChevron />
      </button>
    </Link>
  );
};
export default NavLink;
