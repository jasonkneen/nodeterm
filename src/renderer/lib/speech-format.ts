/** Display formatting for Whisper speech models, shared by Settings → Speech and the onboarding
 *  flow so the two screens can never render the same model differently. */

/** `large-v3-turbo` -> `"Large V3 Turbo"`. */
export function modelLabel(id: string): string {
  return id
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

/** `1600` -> `"1.6 GB"`, `142` -> `"142 MB"`. Used for both the approximate (undownloaded) and
 *  real (downloaded) size, so the two read consistently in the same row. */
export function formatSize(mb: number): string {
  return mb >= 1000 ? `${(mb / 1000).toFixed(1)} GB` : `${Math.round(mb)} MB`
}
