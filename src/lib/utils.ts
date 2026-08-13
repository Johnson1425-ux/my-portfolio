export type ClassValue = string | false | null | undefined;

/** Tiny class-name joiner — avoids pulling in clsx for the handful of cases we need. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatCompactNumber(value: number): string {
  return new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(
    value,
  );
}
