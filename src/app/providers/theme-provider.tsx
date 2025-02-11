"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React, { useEffect, useState } from "react";

export function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <>{children}</>;

    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
        >
            {children}
        </NextThemesProvider>
    );
}
