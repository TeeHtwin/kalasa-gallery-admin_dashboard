import IconHome from '@/icons/nav/IconHome';
import IconArtwork from '@/icons/nav/IconArtwork';
import IconArtist from '@/icons/nav/IconArtist';
import IconEvent from '@/icons/nav/IconEvent';
import IconCollection from '@/icons/nav/IconCollection';
import IconBlog from '@/icons/nav/IconBlog';
import IconContact from '@/icons/nav/IconContact';

export const menus = [
  {
    label: 'dashboard',
    href: '/',
    icon: IconHome,
  },
  {
    label: 'artwork',
    href: '/artworks',
    icon: IconArtwork,
  },
  {
    label: 'artist',
    href: '/artists',
    icon: IconArtist,
  },
  {
    label: 'events',
    href: '/events',
    icon: IconEvent,
  },
  {
    label: 'collections',
    href: '/collections',
    icon: IconCollection,
  },
  {
    label: 'blogs',
    href: '/blogs',
    icon: IconBlog,
  },
  {
    label: 'contact',
    href: '/contact',
    icon: IconContact,
  },
];
