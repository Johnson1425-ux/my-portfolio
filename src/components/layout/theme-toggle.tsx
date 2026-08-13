"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

/**
 * The server can't know the visitor's stored theme, so which icon to show is
 * decided by CSS off the `.dark` class that next-themes sets before paint.
 * That avoids both a hydration mismatch and a flash of the wrong icon.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface",
        "text-muted transition-colors duration-200 hover:border-accent-line hover:bg-accent-soft hover:text-accent",
        className,
      )}
      aria-label="Toggle between light and dark theme"
      title="Toggle between light and dark theme"
    >
      <Sun className="hidden size-[1.05rem] dark:block" aria-hidden="true" />
      <Moon className="size-[1.05rem] dark:hidden" aria-hidden="true" />
    </button>
  );
}
