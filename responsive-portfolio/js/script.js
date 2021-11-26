const humburgerContainer = document.querySelector('.header__main-nav')
const humburger = document.querySelector('.header__main-nav--humburger')
const links = document.querySelectorAll('.header__main-nav--links li')

humburger.addEventListener('click', () => {
  humburgerContainer.classList.toggle('clicked')
  links.forEach((link) => link.classList.toggle('fade'))
})
