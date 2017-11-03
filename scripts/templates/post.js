function postTemplate (post) {
  const converter = new showdown.Converter({ openLinksInNewWindow: true })
  const content = converter.makeHtml(post.content)
  return `
    <section>
      <header>
        <h2>${post.title}</h2>
        <hr>
      </header>
      <article>${content}</article>
      <aside class="my-4">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link" id="edit-post" href="#/posts/${post.id}/edit">Edit</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-danger" id="delete-post" href="#">Delete</a>
          </li>
        </ul>
      </aside>
    </section>
  `
}
