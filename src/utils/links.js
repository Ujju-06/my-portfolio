export function isActionableUrl(value) {
  if (!value || typeof value !== 'string') return false
  const trimmed = value.trim()
  if (!trimmed || trimmed.startsWith('[')) return false
  return /^https?:\/\//i.test(trimmed)
}
