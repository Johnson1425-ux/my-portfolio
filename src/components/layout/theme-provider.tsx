"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      // Dark is the intended default; visitors can still switch and we remember it.
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      storageKey="portfolio-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
