const burger = document.querySelector('.js-burger')
const menu = document.querySelector('.js-mobile-menu')
const body = document.querySelector('body')
const icon = document.querySelector('.mobile-header__icon')
console.log(icon);
burger.addEventListener('click', onBurgerClick)

function onBurgerClick({ target }) {
	burger.classList.toggle('menu-is-opened')
	menu.classList.toggle('is-opened')
	body.classList.toggle('no-scroll')

	if (target.classList.contains('menu-is-opened')) {
		icon.setAttribute("href", 'images/sprite/sprite.svg#close')
	} else {
		icon.setAttribute("href", 'images/sprite/sprite.svg#burger')
	}
}