import { Cardo, Arima, Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const cardo = Cardo({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-cardo',
});

export const arial = localFont({
  src: './arial.ttf',
  display: 'swap',
  style: 'normal',
  variable: '--font-ariel',
});

export const inter = Inter({
  weight: ['400', '500', '600'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
});
