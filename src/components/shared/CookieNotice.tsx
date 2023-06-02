'use client';

import * as React from 'react';
import styles from './CookieNotice.module.scss';
import Button from '@/components/shared/Button';
import InnerWrapper from '@/components/shared/InnerWrapper';

export default function CookieNotice() {
  const [cookieConsent, setCookieConsent] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  function handleAccept() {
    setCookieConsent(!cookieConsent);
  }

  React.useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setCookieConsent(true);
    }
  }, []);

  React.useEffect(() => {
    if (cookieConsent) {
      const cookieDetails = { value: cookieConsent, timestamp: new Date().getTime() };
      localStorage.setItem('cookieConsent', JSON.stringify(cookieDetails));
    }
    setLoading(false);
  }, [cookieConsent]);

  return (
    <>
      {!cookieConsent && !loading && (
        <div className={styles.cookieNotice}>
          <InnerWrapper>
            <div className={styles.content}>
              <p>
                This website uses cookies for analytical purposes. By continuing to use this website you are indicating
                that you are happy with this.
              </p>
              <Button onClick={handleAccept}>Accept</Button>
            </div>
          </InnerWrapper>
        </div>
      )}
    </>
  );
}
