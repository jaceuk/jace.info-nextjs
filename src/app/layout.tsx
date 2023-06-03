import '@css/vars.css';
import '@css/normalize.css';
import '@css/reset.css';
import '@/css/typography.scss';
import '@/css/global.scss';
import Script from 'next/script';
import { Providers } from './providers';
import { Poppins } from 'next/font/google';
import CookieNotice from '@/components/shared/CookieNotice';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { GA_MEASUREMENT_ID, RECAPTCHA_SITE_KEY } from '@/constants/global';

const poppins = Poppins({ weight: ['300', '400', '600', '700', '900'], subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>
          <CookieNotice />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>

      <Script src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`} />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics">
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
