window.errorsView = {
  show (error) {
    const alert = document.querySelector('#errors')
    alert.innerHTML = error.response.data.error.message
    alert.style.display = 'block'
  },
  hide () {
    const alert = document.querySelector('#errors')
    alert.innerHTML = ''
    alert.style.display = 'none'
  }
}
