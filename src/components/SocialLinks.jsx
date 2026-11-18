import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { profile } from '../data/profile'
import { cn } from '../utils/cn'

const links = [
  { href: profile.github, label: 'GitHub', icon: FaGithub },
  { href: profile.linkedin, label: 'LinkedIn', icon: FaLinkedinIn },
]

export function SocialLinks({ className, iconClassName = 'h-4 w-4' }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent/40 hover:text-ink"
        >
          <Icon className={iconClassName} aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}
