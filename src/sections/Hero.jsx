import { ArrowDownRight, Sparkles } from 'lucide-react'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { GlassCard } from '../components/GlassCard'
import { NeuralGraphic } from '../components/NeuralGraphic'
import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'
import { useTypingRoles } from '../hooks/useTypingRoles'

export function Hero() {
  const typedRole = useTypingRoles(profile.roles)

  return (
    <section id="home" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-22 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <Badge>
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            {profile.heroBadge}
          </Badge>
          <h1 className="mt-5 text-display text-ink">{profile.heading}</h1>
          <p className="mt-4 min-h-[2rem] text-lg font-medium text-accent sm:text-xl" aria-live="polite">
            {typedRole}
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 bg-accent align-middle animate-caret" />
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">{profile.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button as="a" href="#projects">
              View Projects
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button as="a" href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative min-h-[20rem]">
          <GlassCard className="relative overflow-hidden p-5 animate-float">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.18em] text-dim">Neural graph</p>
              <span className="rounded-full bg-accent-muted px-2 py-1 text-[11px] text-muted">UKP</span>
            </div>
            <div className="aspect-[6/5]">
              <NeuralGraphic />
            </div>
            <p className="mt-3 text-sm text-muted">LLM, RAG, and ML workflows — connected end to end.</p>
          </GlassCard>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 grid max-w-content gap-3 sm:grid-cols-3">
        {profile.stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.08}>
            <GlassCard className="px-5 py-4">
              <p className="text-2xl font-semibold tracking-tight text-ink">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
