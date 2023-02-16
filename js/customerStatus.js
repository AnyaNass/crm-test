const tableBody = document.querySelector('.table__body')
const tableBodyMobile = document.querySelector('.table-mobile__body')

tableBody.addEventListener('click', onCustomerStatusButtonClick)
tableBodyMobile.addEventListener('click', onCustomerStatusButtonClick)

function onCustomerStatusButtonClick({ target }) {

	if (target.nodeName === "BUTTON") {
		if (target.classList.contains('active')) {
			target.classList.replace('active', 'inactive');
			target.textContent = "Inactive";
			return;
		}

		target.classList.replace('inactive', 'active');
		target.textContent = "Active";
	}

	return;
}