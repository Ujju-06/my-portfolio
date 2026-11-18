import emailjs from '@emailjs/browser'

export function getEmailConfig() {
  return {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  }
}

export function isEmailConfigured() {
  const { serviceId, templateId, publicKey } = getEmailConfig()
  return Boolean(serviceId && templateId && publicKey)
}

export async function sendContactEmail({ name, email, subject, message }) {
  const { serviceId, templateId, publicKey } = getEmailConfig()

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS is not configured. Add keys in your .env file.')
  }

return emailjs.send(
  serviceId,
  templateId,
  {
    name,
    email,
    subject,
    message,
  },
  {
    publicKey,
  },
)
}
