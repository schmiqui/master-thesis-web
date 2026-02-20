// Smooth scroll and active nav (top bar)
document.querySelectorAll('.topbar-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href')
    if (href?.startsWith('#')) {
      e.preventDefault()
      const id = href.slice(1)
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

function setActiveNav() {
  const sections = document.querySelectorAll('.section')
  const navLinks = document.querySelectorAll('.topbar-link')
  let current = ''
  const top = window.scrollY + 100

  sections.forEach((section) => {
    const offsetTop = section.offsetTop
    if (top >= offsetTop - 20) current = section.id
  })

  navLinks.forEach((link) => {
    link.classList.remove('active')
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active')
  })
}

window.addEventListener('scroll', setActiveNav)
window.addEventListener('load', setActiveNav)
