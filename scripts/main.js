const localhostURL = 'http://localhost:3000/posts'
const herokuURL = 'https://ajax-blog-api.herokuapp.com/posts'
const baseURL = window.location.href.includes('herokuapp') ? herokuURL : localhostURL

homeView.init()

window.onhashchange = () => homeView.init()

document.querySelector('#create-post').addEventListener('click', newPostView.init)
