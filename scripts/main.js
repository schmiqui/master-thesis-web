import {
  meta,
  links,
  weeklyLog,
  literature,
  documents,
} from '../content/site-content.js'

const base = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/')

function withBase(path) {
  const normalized = String(path).replace(/^\//, '')
  return `${base}${normalized}`
}

function renderProgress(root) {
  if (!root) return
  root.innerHTML = ''
  const list = document.createElement('ol')
  list.className = 'progress-timeline'

  weeklyLog.forEach((entry) => {
    const li = document.createElement('li')
    li.className = 'progress-item'

    const aside = document.createElement('div')
    aside.className = 'progress-aside'
    const week = document.createElement('span')
    week.className = 'progress-week'
    week.textContent = entry.weekLabel
    aside.appendChild(week)
    if (entry.dateRange) {
      const range = document.createElement('span')
      range.className = 'progress-range'
      range.textContent = entry.dateRange
      aside.appendChild(range)
    }

    const body = document.createElement('div')
    body.className = 'progress-body'
    const title = document.createElement('h3')
    title.className = 'progress-title'
    title.textContent = entry.title
    body.appendChild(title)

    const ul = document.createElement('ul')
    ul.className = 'progress-bullets'
    ;(entry.bullets || []).forEach((text) => {
      const b = document.createElement('li')
      b.textContent = text
      ul.appendChild(b)
    })
    body.appendChild(ul)

    li.appendChild(aside)
    li.appendChild(body)
    list.appendChild(li)
  })

  root.appendChild(list)
}

function renderLiterature(root) {
  if (!root) return
  root.innerHTML = ''
  const list = document.createElement('ul')
  list.className = 'literature-list'

  literature.forEach((item) => {
    const li = document.createElement('li')
    li.className = 'literature-item'

    const cite = document.createElement('div')
    cite.className = 'literature-cite'
    cite.innerHTML = item.citation

    li.appendChild(cite)

    if (item.role) {
      const role = document.createElement('p')
      role.className = 'literature-role'
      role.textContent = item.role
      li.appendChild(role)
    }

    list.appendChild(li)
  })

  root.appendChild(list)
}

function renderDocuments(root) {
  if (!root) return
  root.innerHTML = ''

  if (!documents.length) {
    const p = document.createElement('p')
    p.className = 'documents-empty'
    p.innerHTML =
      'No PDFs listed yet. Add files under <code>public/thesis/</code> and entries to the <code>documents</code> array in <code>content/site-content.js</code>.'
    root.appendChild(p)
    return
  }

  const list = document.createElement('ul')
  list.className = 'documents-list'

  documents.forEach((doc) => {
    const li = document.createElement('li')
    li.className = 'document-item'

    const a = document.createElement('a')
    a.className = 'document-link'
    a.href = withBase(doc.path)
    a.target = '_blank'
    a.rel = 'noopener noreferrer'

    const label = document.createElement('span')
    label.className = 'document-label'
    label.textContent = doc.label

    const metaSpan = document.createElement('span')
    metaSpan.className = 'document-meta'
    metaSpan.textContent = doc.date

    a.appendChild(label)
    a.appendChild(metaSpan)
    li.appendChild(a)

    if (doc.note) {
      const note = document.createElement('p')
      note.className = 'document-note'
      note.textContent = doc.note
      li.appendChild(note)
    }

    list.appendChild(li)
  })

  root.appendChild(list)
}

function renderContact(root) {
  if (!root) return
  root.innerHTML = ''

  const items = [
    { label: 'Email', href: links.email, text: links.email.replace(/^mailto:/i, '') },
    { label: 'GitHub', href: links.github, text: links.github.replace(/^https?:\/\//i, '') },
  ]

  if (links.orcid) {
    items.push({ label: 'ORCID', href: links.orcid, text: links.orcid })
  }

  items.forEach(({ label, href, text }) => {
    const li = document.createElement('li')
    li.className = 'contact-item'
    const dt = document.createElement('span')
    dt.className = 'contact-label'
    dt.textContent = label
    const a = document.createElement('a')
    a.href = href
    a.className = 'contact-value'
    a.textContent = text
    if (label === 'GitHub') {
      a.target = '_blank'
      a.rel = 'noopener noreferrer'
    }
    li.appendChild(dt)
    li.appendChild(a)
    root.appendChild(li)
  })

  if (links.institution) {
    const li = document.createElement('li')
    li.className = 'contact-item contact-item--block'
    const lab = document.createElement('span')
    lab.className = 'contact-label'
    lab.textContent = 'Affiliation'
    const val = document.createElement('span')
    val.className = 'contact-value contact-value--plain'
    val.textContent = links.institution
    li.appendChild(lab)
    li.appendChild(val)
    root.appendChild(li)
  }
}

function renderFooter() {
  const github = document.getElementById('footer-github')
  const email = document.getElementById('footer-email')
  const metaEl = document.getElementById('footer-meta')
  if (github) {
    github.href = links.github
    github.textContent = 'GitHub repository'
  }
  if (email) {
    email.href = links.email
    email.textContent = links.email.replace(/^mailto:/i, '')
  }
  if (metaEl) {
    metaEl.textContent = `Last updated: ${meta.lastUpdated} · ${meta.authorName}`
  }
}

function setHeroAuthor() {
  const el = document.getElementById('hero-author')
  if (el) el.textContent = meta.authorName
}

document.querySelectorAll('.topbar-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href')
    if (href?.startsWith('#')) {
      e.preventDefault()
      const id = href.slice(1)
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

document.querySelector('.topbar-brand')?.addEventListener('click', (e) => {
  e.preventDefault()
  document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
})

function setActiveNav() {
  const sections = document.querySelectorAll('.section')
  const navLinks = document.querySelectorAll('.topbar-link')
  let current = ''
  const top = window.scrollY + 120

  sections.forEach((section) => {
    if (top >= section.offsetTop - 40) current = section.id
  })

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`)
  })
}

setHeroAuthor()
renderProgress(document.getElementById('progress-root'))
renderLiterature(document.getElementById('literature-root'))
renderDocuments(document.getElementById('documents-root'))
renderContact(document.getElementById('contact-root'))
renderFooter()

window.addEventListener('scroll', setActiveNav)
window.addEventListener('load', setActiveNav)
