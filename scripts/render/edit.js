function editPost (event) {
  event.preventDefault()
  const id = determinePost()
  const title = document.querySelector('#title').value
  const content = document.querySelector('#content').value

  Post.update(id, { title, content })
  .then(({ data: { post } }) => {
    window.location.hash = `#/posts/${post.id}`
    homeView.init()
  })
  .catch(errorsView.show)
}

window.editPostView = {
  init (post) {
    document.querySelector('#view').innerHTML = formTemplate('UPDATE', post)
    document.querySelector('#post-form').addEventListener('submit', editPost)
  }
}
