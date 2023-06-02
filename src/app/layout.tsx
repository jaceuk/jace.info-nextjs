import '@css/vars.css';
import '@css/normalize.css';
import '@css/reset.css';
import '@css/typography.scss';
import '@css/global.scss';
import Script from 'next/script';
import { Poppins } from 'next/font/google';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const poppins = Poppins({ weight: ['300', '400', '600', '700', '900'], subsets: ['latin'] });
const GA_MEASUREMENT_ID = 'G-VFXHZ7Q5NS';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </html>
  );
}
