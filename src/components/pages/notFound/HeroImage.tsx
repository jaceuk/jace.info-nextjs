'use client';

import * as React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Borg from '@/images/borg.jpg';
import BorgDark from '@/images/borg-dark.jpg';
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
      <Image src={theme === 'dark' ? BorgDark : Borg} alt="" fill priority />
    </div>
  );
}
