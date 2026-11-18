import { useEffect, useMemo, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { Button } from './Button'
import { SocialLinks } from './SocialLinks'

export function Navbar() {
  const ids = useMemo(() => navLinks.map((link) => link.id), [])
  const activeId = useActiveSection(ids)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? 'border-line bg-canvas/85 backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8" aria-label="Primary">
        <a href="#home" className="text-sm font-bold tracking-[0.22em] text-ink">
          {profile.logo}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = activeId === link.id
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                    active ? 'bg-elevated text-ink' : 'text-muted hover:text-ink'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <SocialLinks />
          <Button as="a" href={profile.resumePath} download>
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? 'max-h-[32rem] border-t border-line' : 'max-h-0 overflow-hidden'} transition-[max-height] duration-300`}
      >
        <div className="space-y-2 bg-canvas/95 px-4 py-4 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`block rounded-lg px-3 py-3 text-sm ${activeId === link.id ? 'bg-elevated text-ink' : 'text-muted'}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center justify-between pt-2">
            <SocialLinks />
            <Button as="a" href={profile.resumePath} download className="text-xs">
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
