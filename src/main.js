import './style.css'

// Environment variable for app URL
const APP_URL = import.meta.env.VITE_APP_URL || 'http://localhost:3000'

// Navigation handlers
window.handleSignIn = () => {
  window.location.href = `${APP_URL}/login`
}

window.handleSignUp = () => {
  window.location.href = `${APP_URL}/signup`
}

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
