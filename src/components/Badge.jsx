import { cn } from '../utils/cn'

export function Badge({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-line bg-accent-muted px-3 py-1 text-xs font-medium tracking-wide text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}
