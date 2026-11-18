import { cn } from '../utils/cn'

const variants = {
  primary:
    'bg-accent text-canvas hover:bg-accent-strong shadow-glow border-transparent',
  secondary:
    'bg-transparent text-ink border-line hover:border-accent/50 hover:bg-accent-muted',
  ghost: 'bg-transparent text-muted border-transparent hover:text-ink hover:bg-elevated',
}

export function Button({
  as: Component = 'button',
  variant = 'primary',
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold tracking-tight transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
