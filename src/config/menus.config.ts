import IconHome from '@/icons/nav/IconHome';
import IconArtwork from '@/icons/nav/IconArtwork';
import IconArtist from '@/icons/nav/IconArtist';
import IconEvent from '@/icons/nav/IconEvent';
import IconCollection from '@/icons/nav/IconCollection';
import IconBlog from '@/icons/nav/IconBlog';
import IconContact from '@/icons/nav/IconContact';
import {
  HOME,
  ARTISTS,
  ARTWORKS,
  BLOGS,
  COLLECTIONS,
  CONTACTS,
  EVENTS,
} from '@/constants/routes';

export const menus = [
  {
    label: 'dashboard',
    href: HOME,
    icon: IconHome,
  },
  {
    label: 'artwork',
    href: ARTWORKS,
    icon: IconArtwork,
  },
  {
    label: 'artist',
    href: ARTISTS,
    icon: IconArtist,
  },
  {
    label: 'events',
    href: EVENTS,
    icon: IconEvent,
  },
  {
    label: 'collections',
    href: COLLECTIONS,
    icon: IconCollection,
  },
  {
    label: 'blogs',
    href: BLOGS,
    icon: IconBlog,
  },
  {
    label: 'contact',
    href: CONTACTS,
    icon: IconContact,
  },
];
