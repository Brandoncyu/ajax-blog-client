function goHome (event) {
  event.preventDefault()

  const hash = event.target.getAttribute('href')
  window.location.hash = hash
}

function addLinkEventHandler (link) {
  link.addEventListener('click', goHome)
}

function initLinks () {
  const navLinks = Array.from(document.querySelectorAll('a.list-group-item'))
  navLinks.forEach(addLinkEventHandler)
}

window.sidebarView = {
  init (posts, id) {
    document.querySelector('#sidebar').innerHTML = sidebarTemplate(posts)

    const active = document.querySelector(`[href="#/posts/${id}"]`)
    if (active) active.classList.add('active')

    initLinks()
  }
}
