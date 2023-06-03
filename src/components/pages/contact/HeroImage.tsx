'use client';

import * as React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Marty from '@/images/marty.jpg';
import MartyDark from '@/images/marty-dark.jpg';
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
      <Image src={theme === 'dark' ? MartyDark : Marty} alt="" fill priority />
    </div>
  );
}
