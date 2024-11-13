/* Cart open + overlay */

const cart = document.querySelector('.cart');
const overlay = document.querySelector('.cart-overlay');
const openCartButton = document.getElementById('cart-button-open');
const openCartButtonMini = document.querySelector('.icons-item__cart-button-mini');
const closeCartButton = document.querySelector('.cart__close-button');

function toggleCart() {
	const isCardOpen = document.body.classList.toggle('cart-open');
	const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

	if (isCardOpen) {
		document.body.style.overflow = 'hidden';
		document.body.style.paddingRight = `${scrollBarWidth}px`;
		localStorage.setItem('isCartOpen', 'true');
	} else {
		document.body.style.overflow = '';
		document.body.style.paddingRight = '';
		localStorage.setItem('isCartOpen', 'false');
	}
};

openCartButton.addEventListener('click', (event) => {
	event.preventDefault();
	toggleCart();
});

if (openCartButtonMini) {
	openCartButtonMini.addEventListener('click', (event) => {
		event.preventDefault();
		toggleCart();
	});
}

closeCartButton.addEventListener('click', toggleCart);

overlay.addEventListener('click', toggleCart);

document.addEventListener('DOMContentLoaded', () => {
	const isCartOpen = localStorage.getItem('isCartOpen') === 'true';
	if (isCartOpen) {
		document.body.classList.add('cart-open');
		const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
		document.body.style.overflow = 'hidden';
		document.body.style.paddingRight = `${scrollBarWidth}px`;
	}
});

/* Slider + arrows */

const indicators = document.querySelectorAll('.indicator');
const leftArrow = document.querySelector('.slider__arrow_left');
const rightArrow = document.querySelector('.slider__arrow_right');

let currentIndex = 0;

function updateActiveIndicator() {
	indicators.forEach((indicator, index) => {
		indicator.classList.toggle('active', index === currentIndex);
	});
}

leftArrow.addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + indicators.length) % indicators.length;
	updateActiveIndicator();
});

rightArrow.addEventListener('click', () => {
	currentIndex = (currentIndex +1) % indicators.length;
	updateActiveIndicator();
});

/* Sort-dropdown + modal + overlay */

function toggleModal() {
	const modal = document.getElementById('sortModal');
	const overlay = document.getElementById('overlay');

	modal.classList.toggle('show-modal');
	overlay.classList.toggle('show-overlay');
};

function selectOption(optionText) {
	const button = document.querySelector('.sort-dropdown__button');
	button.innerText = optionText;
	toggleModal();
};

function selectOption(optionText) {
	const button = document.querySelector('.sort-dropdown__button');
	button.innerText = optionText;

	switch (optionText) {
		case 'Сначала дорогие':
			filteredProducts.sort((a, b) => b.price - a.price);
			break;
		case 'Сначала недорогие':
			filteredProducts.sort((a, b) => a.price - b.price);
			break;
		case 'Сначала популярные':
			filteredProducts.sort((a, b) => b.isPopular - a.isPopular);
			break;
		case 'Сначала новые':
			filteredProducts.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
			break;
		default:
			break;
	}

	displayProducts(filteredProducts);
	toggleModal();
}

window.addEventListener('click', function(event) {
	const modal = document.getElementById('sortModal');
	const overlay = document.getElementById('overlay');

	if (event.target === overlay) {
		modal.classList.remove('show-modal');
		overlay.classList.remove('show-overlay');
	}
});

/* Modal sliders in mobile */

const filtersToggleButton = document.querySelector('.filters-toggle-button');
const filtersModal = document.querySelector('.filters-modal');
const filtersModalClose = document.querySelector('.filters-modal-close');

// Открытие модального окна
filtersToggleButton.addEventListener('click', () => {
	filtersModal.style.display = 'flex';
	document.body.style.overflow = 'hidden'; // Блокируем прокрутку
});



// Закрытие модального окна при клике вне его содержимого
filtersModal.addEventListener('click', (e) => {
	if (e.target === filtersModal) {
		filtersModal.style.display = 'none';
		document.body.style.overflow = '';
	}
});

