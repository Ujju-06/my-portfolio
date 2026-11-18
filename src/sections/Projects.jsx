import { useMemo, useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { projectCategories, projects } from '../data/projects'

export function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  )

  return (
    <section id="projects" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-22">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work in GenAI and machine learning."
          description="Selected work spanning retrieval-augmented generation and classical machine learning workflows."
        />
        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
          {projectCategories.map((category) => {
            const active = filter === category
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(category)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active
                    ? 'border-accent bg-accent text-canvas'
                    : 'border-line bg-transparent text-muted hover:text-ink'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {visible.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
