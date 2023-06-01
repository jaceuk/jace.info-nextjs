import '@css/vars.css';
import '@css/normalize.css';
import '@css/reset.css';
import '@css/typography.scss';
import '@css/global.scss';
import { Poppins } from 'next/font/google';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const poppins = Poppins({ weight: ['300', '400', '600', '700', '900'], subsets: ['latin'] });

export const metadata = {
  title: 'Jason Newington - helping make the web a better place',
  description: 'A Front End Developer with an eye for UX and a passion for accessibility and helping people.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
