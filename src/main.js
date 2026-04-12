import './style.css'

// Environment variables
const APP_URL = import.meta.env.VITE_APP_URL || 'http://localhost:3000'
const IS_CLOSED_REGISTRATION = import.meta.env.VITE_CLOSED_REGISTRATION === 'true'

// Navigation handlers
window.handleSignIn = () => {
  window.location.href = `${APP_URL}/login`
}

window.handleSignUp = () => {
  window.location.href = `${APP_URL}/signup`
}

window.handleWaitlist = () => {
  window.location.href = `${APP_URL}/waitlist`
}

// Update CTA text based on closed registration setting
document.addEventListener('DOMContentLoaded', () => {
  if (IS_CLOSED_REGISTRATION) {
    // Show closed beta text, hide open beta text
    document.querySelectorAll('[data-closed-text]').forEach((el) => {
      el.classList.remove('hidden')
    })
    document.querySelectorAll('[data-open-text]').forEach((el) => {
      el.classList.add('hidden')
    })
  }
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  })
})

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -80px 0px',
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0
      setTimeout(() => {
        entry.target.classList.add('animate-in')
      }, delay)
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe all elements with data-animate attribute
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-animate]').forEach((el) => {
    observer.observe(el)
  })
})
