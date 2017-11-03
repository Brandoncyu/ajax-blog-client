window.homeView = {
  init () {
    Post.index()
      .then(({ data: { posts } }) => {
        errorsView.hide()

        let id = determinePost()

        if (!id && posts[0]) {
          goToPost(posts[0])
          id = determinePost()
        }

        if (Number.isNaN(parseInt(id))) return false
        
        if (id) {
          const selected = posts.find(post => post.id == id)
          sidebarView.init(posts, id)
          postView.init(selected)
        }

        if (!posts.length) {
          document.querySelector('#sidebar').innerHTML = ''
          document.querySelector('#view').innerHTML = welcomeTemplate()
        }
      })
  }
}
