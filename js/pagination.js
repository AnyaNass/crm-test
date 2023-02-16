const paginationList = document.querySelector('.js-pagination-list');

let currentPage = 1;
const totalPages = 40;

paginationList.innerHTML = renderPaginationList(totalPages, currentPage);
activePage();

function renderPaginationList(totalPages, currentPage) {
	let item = '';
	let maxPage = totalPages;
	let page = currentPage;


	if (totalPages - currentPage < 4) {
		item = `<li class="pagination__page"><button class="pagination__button" data-page="1">1</button></li><li>...</li>`
		let startPage = maxPage - 4;
		let data = maxPage - 4;

		for (let i = 0; i < 4; i += 1) {
			item += `<li class="pagination__page"><button class="pagination__button" data-page='${data += 1}'>${startPage += 1}</button></li>`
		}
		return item;
	}

	if (currentPage < 4) {
		item += `<li class="pagination__page"><button class="pagination__button" data-page="1">1</button></li>`
		let startPage = 1;
		let data = 1;

		for (let i = 0; i < 3; i += 1) {
			item += `<li class="pagination__page"><button class="pagination__button" data-page='${data += 1}'>${startPage += 1}</button></li>`
		}
		item += `<li class="pagination__page">...</li><li><button class="pagination__button" data-page='${maxPage}'>${maxPage}</button></li>`
	}

	if (currentPage >= 4) {
		let data = page;
		item = `<li class="pagination__page"><button class="pagination__button" data-page="1">1</button></li><li>...</li><li class="pagination__page"><button class="pagination__button" data-page='${page}'>${page}</button></li>`


		for (let i = 0; i < 2; i += 1) {
			item += `<li  class="pagination__page"><button class="pagination__button" data-page='${data += 1}'>${page += 1}</button></li>`
		}
		item += `<li class="pagination__page">...</li><li class="pagination__page"><button class="pagination__button" data-page='${totalPages}'>${totalPages}</button></li>`
	}

	return item;
}

function activePage() {
	const activePage = document.querySelector(`button[data-page='${currentPage}']`)
	activePage.classList.add('active')
}

paginationList.addEventListener('click', onPageClick)

function onPageClick({ target }) {
	if (target.nodeName === "BUTTON") {
		currentPage = Number(target.textContent)
		paginationList.innerHTML = renderPaginationList(totalPages, currentPage);
		activePage();
	}
}

const nextPage = document.querySelector('.js-pagination-next')
const prevPage = document.querySelector('.js-pagination-prev')

nextPage.addEventListener("click", () => {
	if (currentPage === totalPages) {
		return;
	}

	currentPage += 1;
	paginationList.innerHTML = renderPaginationList(totalPages, currentPage);
	activePage();
})

prevPage.addEventListener("click", () => {
	if (currentPage < 2) {
		return;
	}

	currentPage -= 1;
	paginationList.innerHTML = renderPaginationList(totalPages, currentPage);
	activePage();
})