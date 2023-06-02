'use client';

import * as React from 'react';
import styles from './CookieNotice.module.scss';
import Button from '@/components/shared/Button';
import InnerWrapper from '@/components/shared/InnerWrapper';

export default function CookieNotice() {
  const consent = JSON.parse(window.localStorage.getItem('cookieConsent') || '{}');
  const [cookieConsent, setCookieConsent] = React.useState(consent.value || false);

  function handleAccept() {
    setCookieConsent(!cookieConsent);
  }

  React.useEffect(() => {
    const consent = { value: cookieConsent, timestamp: new Date().getTime() };
    window.localStorage.setItem('cookieConsent', JSON.stringify(consent));
  }, [cookieConsent]);

  return (
    <>
      {!cookieConsent && (
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
