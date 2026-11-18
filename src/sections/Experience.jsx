import { Briefcase, GraduationCap } from 'lucide-react'
import { GlassCard } from '../components/GlassCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { confidentialityNote, experience } from '../data/experience'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-22">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Experience"
          title="Roles, internship, and education."
          description={confidentialityNote}
        />
        <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
          {experience.map((item, index) => {
            const Icon = item.type === 'education' ? GraduationCap : Briefcase
            return (
              <li key={item.id} className="relative">
                <span className="absolute -left-[2.05rem] top-6 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface text-accent sm:-left-[2.55rem]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <Reveal delay={index * 0.05}>
                  <GlassCard>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-ink">{item.role}</h3>
                        <p className="text-sm text-muted">{item.organization}</p>
                      </div>
                      <p className="text-xs font-medium uppercase tracking-wider text-dim">{item.period}</p>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="text-sm leading-6 text-muted">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
