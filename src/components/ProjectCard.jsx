import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { GlassCard } from './GlassCard'
import { isActionableUrl } from '../utils/links'

export function ProjectCard({ project }) {
  const githubUrl = isActionableUrl(project.github) ? project.github : null
  const liveUrl = isActionableUrl(project.live) ? project.live : null

  return (
    <GlassCard as="article" hover className="flex h-full flex-col">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight text-ink">{project.title}</h3>
        <span className="shrink-0 rounded-full border border-line bg-violet-muted px-2.5 py-1 text-[11px] font-medium text-muted">
          {project.category}
        </span>
      </div>
      <p className="mb-5 flex-1 text-sm leading-6 text-muted">{project.description}</p>
      <div className="mb-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-md border border-line bg-canvas/60 px-2 py-1 text-xs text-muted">
            {tag}
          </span>
        ))}
      </div>
      {(githubUrl || liveUrl) && (
        <div className="flex flex-wrap gap-3">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              <FaGithub className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          ) : null}
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live Demo
            </a>
          ) : null}
        </div>
      )}
    </GlassCard>
  )
}
