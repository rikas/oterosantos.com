'use client';

import { LinkStyles } from '@components/atoms';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const DarkmodeToggle = (): JSX.Element => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const { systemTheme, theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  const description = `Activate ${isDarkMode ? 'light' : 'dark'} mode`;

  return (
    <>
      {!hasMounted && (
        <button
          type="button"
          className={LinkStyles['nav']}
          aria-label="Activate light mode"
          title="Activate light mode"
        >
          <SunIcon className="w-6 h-6" />
        </button>
      )}
      {hasMounted && (
        <button
          type="button"
          className={LinkStyles['nav']}
          aria-label={description}
          title={description}
          onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
        >
          {isDarkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
        </button>
      )}
    </>
  );
};

export default DarkmodeToggle;
