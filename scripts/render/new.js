function createPost (event) {
  event.preventDefault()
  const title = document.querySelector('#title').value
  const content = document.querySelector('#content').value

  Post.create({ title, content })
  .then(({ data: { post } }) => {
    window.location.hash = `#/posts/${post.id}`
    homeView.init()
  })
  .catch(errorsView.show)
}

window.newPostView = {
  init (post) {
    document.querySelector('#view').innerHTML = formTemplate('POST')
    document.querySelector('#post-form').addEventListener('submit', createPost)
  }
}
