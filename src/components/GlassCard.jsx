import { cn } from '../utils/cn'

export function GlassCard({ as: Component = 'div', className, hover = false, children, ...props }) {
  return (
    <Component
      className={cn(
        'glass rounded-2xl p-6 shadow-card',
        hover && 'transition-transform duration-300 hover:-translate-y-1 hover:border-accent/30',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
