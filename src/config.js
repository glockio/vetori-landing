// Single source of truth for the authoring app URL.
// Read from VITE_PUBLIC_APP_URL at build time; falls back to the current
// canonical default (region-prefixed). Never hardcode app.vetori.ai or
// app.us.vetori.ai elsewhere — import APP_URL from here.
//
// The legacy VITE_APP_URL name is also accepted as a fallback so older
// deploys/.env files keep working until the rename propagates.
export const APP_URL =
  import.meta.env.VITE_PUBLIC_APP_URL ||
  import.meta.env.VITE_APP_URL ||
  'https://app.us.vetori.ai'

export const IS_CLOSED_REGISTRATION =
  import.meta.env.VITE_CLOSED_REGISTRATION === 'true'
