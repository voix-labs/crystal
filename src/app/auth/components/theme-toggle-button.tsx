"use client";
import { useTheme } from "next-themes";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ThemeToggleButton() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
        >
            {theme === "dark" ? (
                <IconSun className="w-6 h-6 text-yellow-500" />
            ) : (
                <IconMoon className="w-6 h-6 text-gray-900" />
            )}
        </button>
    );
}
