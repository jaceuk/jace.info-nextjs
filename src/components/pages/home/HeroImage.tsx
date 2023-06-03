'use client';

import * as React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Spock from '@/images/spock.jpg';
import SpockDark from '@/images/spock-dark.jpg';
import styles from './HeroImage.module.scss';

export default function Hero() {
  const [mounted, setMounted] = React.useState(false);
  const { theme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.image}>
      <Image src={theme === 'dark' ? SpockDark : Spock} alt="" fill priority />
    </div>
  );
}
