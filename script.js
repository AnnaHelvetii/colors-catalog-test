/* Cart open + overlay */

const cart = document.querySelector('.cart');
const overlay = document.querySelector('.cart-overlay');
const openCartButton = document.getElementById('cart-button-open');
const closeCartButton = document.querySelector('.cart__close-button');

function toggleCart() {
	document.body.classList.toggle('cart-open');
	const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

	if (document.body.classList.contains('cart-open')) {
		document.body.style.overflow = 'hidden';
		document.body.style.paddingRight = `${scrollBarWidth}px`;
	} else {
		document.body.style.overflow = '';
		document.body.style.paddingRight = '';
	}
};

openCartButton.addEventListener('click', (event) => {
	event.preventDefault();
	toggleCart();
});

closeCartButton.addEventListener('click', toggleCart);

overlay.addEventListener('click', toggleCart);

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

window.addEventListener('click', function(event) {
	const modal = document.getElementById('sortModal');
	const overlay = document.getElementById('overlay');

	if (event.target === overlay) {
		modal.classList.remove('show-modal');
		overlay.classList.remove('show-overlay');
	}
});