import { useState } from 'react'
import { LoaderCircle, Mail, MapPin, Phone } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Button } from '../components/Button'
import { GlassCard } from '../components/GlassCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/profile'
import { isEmailConfigured, sendContactEmail } from '../utils/email'

const initialForm = { name: '', email: '', subject: '', message: '' }


function validate(form) {
  const errors = {}

  if (form.name.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (form.subject.trim().length < 3) {
    errors.subject = 'Please add a subject.'
  }

  if (form.message.trim().length < 12) {
    errors.message = 'Message should be at least 12 characters.'
  }

  return errors
}


export function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  function onChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  async function onSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setStatus('loading')
    setFeedback('')
    try {
      await sendContactEmail(form)
      setStatus('success')
      setFeedback('Message sent. Thank you — I will reply as soon as I can.')
      setForm(initialForm)
    } catch (error) {
      setStatus('error')
      const configured = isEmailConfigured()
      setFeedback(
        configured
          ? 'Something went wrong while sending. Please email me directly.'
          : 'EmailJS keys are missing. Add them to .env, or email me directly.',
      )
      console.error(error)
    }
  }

  const fields = [
    { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
    { name: 'subject', label: 'Subject', type: 'text', autoComplete: 'off' },
  ]

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-22">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about AI/ML roles, internships, and projects."
          description="Use the form or reach out directly. EmailJS keys live in environment variables."
        />
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <GlassCard>
              <form onSubmit={onSubmit} noValidate className="space-y-4">
                {fields.map((field) => (
                  <label key={field.name} className="block">
                    <span className="mb-1.5 block text-sm font-medium text-ink">{field.label}</span>
                    <input
                      name={field.name}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      value={form[field.name]}
                      onChange={onChange}
                      className="w-full rounded-xl border border-line bg-canvas px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-dim focus:border-accent/50"
                      placeholder={field.label}
                    />
                    {errors[field.name] ? <span className="mt-1 block text-xs text-red-300">{errors[field.name]}</span> : null}
                  </label>
                ))}
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-ink">Message</span>
                  <textarea
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={onChange}
                    className="w-full resize-y rounded-xl border border-line bg-canvas px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-dim focus:border-accent/50"
                    placeholder="Message"
                  />
                  {errors.message ? <span className="mt-1 block text-xs text-red-300">{errors.message}</span> : null}
                </label>
                <Button type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending
                    </>
                  ) : (
                    'Send message'
                  )}
                </Button>
                {feedback ? (
                  <p
                    className={`text-sm ${status === 'success' ? 'text-emerald-300' : 'text-red-300'}`}
                    role="status"
                  >
                    {feedback}
                  </p>
                ) : null}
              </form>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.08}>
            <GlassCard className="h-full space-y-5">
              <h3 className="text-lg font-semibold text-ink">Direct contact</h3>
              <a href={`mailto:${profile.email}`} className="flex items-start gap-3 text-sm text-muted hover:text-ink">
                <Mail className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                <span>{profile.email}</span>
              </a>
              <a href={`tel:${profile.phone}`} className="flex items-start gap-3 text-sm text-muted hover:text-ink">
                <Phone className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                <span>{profile.phone}</span>
              </a>
              <p className="flex items-start gap-3 text-sm text-muted">
                <MapPin className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                <span>{profile.location}</span>
              </p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm text-muted hover:text-ink"
              >
                <FaLinkedinIn className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm text-muted hover:text-ink"
              >
                <FaGithub className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
                <span>GitHub</span>
              </a>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
