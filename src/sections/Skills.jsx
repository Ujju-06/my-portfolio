import { GlassCard } from '../components/GlassCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { currentlyLearning, skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-22">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Skills"
          title="Grouped capabilities, without inflated scores."
          description="Skills are listed as working knowledge — not percentage bars."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <GlassCard className="h-full">
                <h3 className="mb-4 text-base font-semibold text-ink">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-canvas/70 px-3 py-1.5 text-xs text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-4">
          <GlassCard>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">Currently learning</h3>
            <div className="flex flex-wrap gap-2">
              {currentlyLearning.map((item) => (
                <span key={item} className="rounded-full border border-accent/30 bg-accent-muted px-3 py-1.5 text-xs text-ink">
                  {item}
                </span>
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  )
}
