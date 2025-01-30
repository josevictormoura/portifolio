const mobileButton = document.getElementById('button-mobile')
const mobileMenu = document.getElementById('menu-mobile')

function showMenu() {
  mobileMenu.classList.toggle('hidden')
  mobileMenu.classList.toggle('flex')
  document.documentElement.style.overflowY = "hidden"
}

function closeMenu({target}) {
 if (target.tagName === "A" || target.id === "button-close-menu") {
  mobileMenu.classList.add('hidden')
  mobileMenu.classList.remove('flex')
  document.documentElement.style.overflowY = ""
 }
}

mobileMenu.addEventListener('click', closeMenu)
mobileButton.addEventListener('click', showMenu)

const form = document.querySelector('#form')

function handleSubmit(event) {
  event.preventDefault()
  window.location.href = 'email-sucess.html'
}

form.addEventListener('submit', handleSubmit)