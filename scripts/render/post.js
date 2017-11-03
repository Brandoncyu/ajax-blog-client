function editPostEventHandler (event) {
  const id = determinePost()
  Post.find(id).then(({ data: { post }}) => editPostView.init(post))
}

function deletePostEventHandler (event) {
  event.preventDefault()

  const id = determinePost()
  Post.destroy(id).then(() => goToPost({ id: '' }))
}

window.postView = {
  init (post) {
    document.querySelector('#view').innerHTML = postTemplate(post)
    document.querySelector('#edit-post').addEventListener('click', editPostEventHandler)
    document.querySelector('#delete-post').addEventListener('click', deletePostEventHandler)
  }
}
