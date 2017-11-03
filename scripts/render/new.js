function createPost (event) {
  event.preventDefault()
  const title = document.querySelector('#title').value
  const content = document.querySelector('#content').value

  Post.create({ title, content })
  .then(({ data: { post } }) => goToPost(post))
  .catch(errorsView.show)
}

window.newPostView = {
  init (post) {
    window.location.hash = '#/posts/new'
    document.querySelector('#view').innerHTML = formTemplate('POST')
    document.querySelector('#post-form').addEventListener('submit', createPost)
  }
}
