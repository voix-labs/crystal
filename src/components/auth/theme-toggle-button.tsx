'use client';

import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';

export default function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="relative cursor-pointer rounded-full bg-gray-200 p-2 dark:bg-gray-800"
    >
      <IconSun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0" />
      <IconMoon className="absolute top-2 left-2 h-4 w-4 scale-0 transition-all dark:scale-100" />
    </button>
  );
}
