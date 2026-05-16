import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { Header } from './components/header/Header';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pearl Remote',
  description: 'Remote staffing services for growing teams.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className='flex min-h-full flex-col'>
        <Header />
        {children}
      </body>
    </html>
  );
}
