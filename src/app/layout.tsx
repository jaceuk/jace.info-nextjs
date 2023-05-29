import '@css/vars.css';
import '@css/normalize.css';
import '@css/reset.css';
import '@css/typography.scss';
import '@css/global.scss';
import { Poppins } from 'next/font/google';
import NavBar from '@components/shared/NavBar';
import Footer from '@/components/shared/Footer';

const poppins = Poppins({ weight: ['300', '400', '600', '700', '900'], subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
