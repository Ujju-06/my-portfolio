import { Award, GraduationCap } from 'lucide-react'
import { GlassCard } from '../components/GlassCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/profile'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-22">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="About"
          title="A practical AI/ML foundation, with evaluation at the center."
          description={profile.summary}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {profile.highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <GlassCard>
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <Reveal>
            <GlassCard className="h-full">
              <div className="mb-3 flex items-center gap-2 text-accent">
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Education</h3>
              </div>
              <p className="font-semibold text-ink">{profile.education.degree}</p>
              <p className="mt-1 text-sm text-muted">{profile.education.institution}</p>
              <p className="mt-3 text-sm text-muted">Class XII: {profile.education.classXii}</p>
              <p className="text-sm text-muted">Class X: {profile.education.classX}</p>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.06}>
            <GlassCard className="h-full">
              <div className="mb-3 flex items-center gap-2 text-violet">
                <Award className="h-4 w-4" aria-hidden="true" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {profile.certifications.map((cert) => (
                  <li key={cert.name}>
                    <p className="font-medium text-ink">{cert.name}</p>
                    <p className="text-sm text-muted">{cert.issuer}</p>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.12}>
            <GlassCard className="h-full">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Career focus</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{profile.careerFocus}</p>
              <p className="mt-4 text-sm leading-6 text-muted">{profile.lookingFor}</p>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
