const navigation = document.querySelector('.js-nav');
const mobileNav = document.querySelector('.js-mobile-nav');

navigation.addEventListener('click', onNavCategoryClick);
mobileNav.addEventListener('click', onNavCategoryClick);

function onNavCategoryClick({ target }) {
	if (target.nodeName === "LI") {

		for (const child of this.children) {
			child.classList.remove("active")
		}

		target.classList.add("active")
	}
}


if (mobileNav) {
	for (let i = 0; i < mobileNav.children.length; i += 1) {
		if (i === 2) {
			mobileNav.children[i].classList.add("active");
			break;
		}
	}
}

if (navigation) {
	for (let i = 0; i < navigation.children.length; i += 1) {
		if (i === 2) {
			navigation.children[i].classList.add("active");
			break;
		}
	}
}

