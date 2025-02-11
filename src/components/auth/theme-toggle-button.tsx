"use client";

import { useTheme } from "next-themes";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 cursor-pointer dark:bg-gray-800 relative"
    >
      <IconSun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0" />
      <IconMoon className="top-2 left-2 absolute h-4 w-4 scale-0 transition-all dark:scale-100" />
    </button>
  );
}
