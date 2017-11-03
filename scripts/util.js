function determinePost () {
  return window.location.hash.replace('#/posts/','').replace(/\/.+/,'')
}

function goToPost (post) {
  window.location.hash = `#/posts/${post.id}`
}
