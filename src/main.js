// menu mobile
const mobileButton = document.getElementById('button-mobile')
const mobileMenu = document.getElementById('menu-mobile')

function showMenu() {
  mobileMenu.classList.toggle('hidden')
  mobileMenu.classList.toggle('flex')
  ScrollReveal().reveal('ul', {origin: 'left', duration: 800, distance: '20%'});
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

// troca tela submit
const form = document.querySelector('#form')

function handleSubmit(event) {
  event.preventDefault()
  window.location.href = 'email-sucess.html'
}

form.addEventListener('submit', handleSubmit)

// srollreveal
ScrollReveal().reveal('.text-introduction', {origin: 'left', duration: 1000, distance: '20%'});
ScrollReveal().reveal('.imagem-pessoal', {origin: 'rigth', duration: 1000, distance: '20%'});
ScrollReveal().reveal('.content-sobre', {origin: 'right', duration: 1000, distance: '20%'});
ScrollReveal().reveal('.content-contato', {origin: 'right', duration: 1000, distance: '20%'});
ScrollReveal().reveal('#form', {origin: 'left', duration: 1000, distance: '20%'});