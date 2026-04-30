// Lightweight cn — joins truthy class strings (no clsx/tailwind-merge dep needed)
export function cn(...classes: (string | undefined | null | false | 0)[]): string {
  return classes.filter(Boolean).join(' ')
}
