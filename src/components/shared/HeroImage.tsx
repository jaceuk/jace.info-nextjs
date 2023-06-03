'use client';

import * as React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useTheme } from 'next-themes';
import styles from './HeroImage.module.scss';

interface props {
  image: StaticImageData;
  darkImage: StaticImageData;
}

export default function Hero({ image, darkImage }: props) {
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
      <Image src={theme === 'dark' ? darkImage.src : image.src} alt="" fill priority />
    </div>
  );
}
