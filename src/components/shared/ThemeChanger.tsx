import * as React from 'react';
import { useTheme } from 'next-themes';
import { HalfMoon } from 'iconoir-react';
import { SunLight } from 'iconoir-react';
import styles from './ThemeChanger.module.scss';

export function ThemeChanger() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={styles.button}
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      {theme === 'dark' ? <SunLight /> : <HalfMoon />}
      <span className="sr-only">Enable {theme === 'dark' ? 'light' : 'dark'} mode</span>
    </button>
  );
}
