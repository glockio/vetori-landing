// Shared interaction behaviors for every Vetori landing page.
//
// Includes:
//   - window.handleSignIn / handleSignUp / handleWaitlist (URL redirects)
//   - Closed-beta vs open-signup CTA copy toggle
//   - Smooth scroll for in-page anchors
//   - Scroll-reveal IntersectionObserver for [data-animate] elements
//
// All authoring-app URLs come from src/config.js — never hardcoded.

import { APP_URL, IS_CLOSED_REGISTRATION } from '../config.js'

// ─── Navigation handlers (consume APP_URL) ─────────────────────────────
window.handleSignIn  = () => { window.location.href = `${APP_URL}/login` }
window.handleSignUp  = () => { window.location.href = `${APP_URL}/signup` }
window.handleWaitlist = () => { window.location.href = `${APP_URL}/waitlist` }

// ─── CTA copy toggle (closed beta vs open signup) ──────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (IS_CLOSED_REGISTRATION) {
    document.querySelectorAll('[data-closed-text]').forEach((el) => {
      el.classList.remove('hidden')
    })
    document.querySelectorAll('[data-open-text]').forEach((el) => {
      el.classList.add('hidden')
    })
  }
})

// ─── Smooth scroll for in-page anchors ─────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

// ─── Scroll-reveal observer ────────────────────────────────────────────
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -80px 0px',
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0
      setTimeout(() => entry.target.classList.add('animate-in'), delay)
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
})
