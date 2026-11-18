import { Badge } from './Badge'

export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : ''

  return (
    <div className={`mb-10 flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow ? <Badge className="w-fit">{eyebrow}</Badge> : null}
      <h2 className="text-title text-ink">{title}</h2>
      {description ? <p className="text-sm leading-7 text-muted sm:text-base">{description}</p> : null}
    </div>
  )
}
