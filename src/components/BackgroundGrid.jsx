export function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute inset-0 bg-grid-fade bg-grid [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
      <div className="absolute left-1/2 top-[-8rem] h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
    </div>
  )
}
