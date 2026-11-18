import { navLinks, profile } from '../data/profile'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-surface/70">
      <div className="mx-auto grid max-w-content gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_1fr_auto] lg:px-8">
        <div>
          <p className="text-sm font-bold tracking-[0.22em] text-ink">{profile.logo}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">{profile.title}</p>
        </div>
        <nav aria-label="Footer">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-dim">Quick links</p>
          <ul className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-sm text-muted transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-dim">Connect</p>
          <SocialLinks />
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-content px-4 py-5 text-xs text-dim sm:px-6 lg:px-8">
          © {year} {profile.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
