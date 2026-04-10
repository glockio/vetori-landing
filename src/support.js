import './style.css'

// Support form handler — opens the user's email client with pre-filled fields
document.getElementById('support-form').addEventListener('submit', (e) => {
  e.preventDefault()

  const name = document.getElementById('name').value.trim()
  const email = document.getElementById('email').value.trim()
  const subject = document.getElementById('subject').value.trim()
  const message = document.getElementById('message').value.trim()

  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`

  const mailto = `mailto:info@vetori.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = mailto
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

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-animate]').forEach((el) => {
    observer.observe(el)
  })
})
