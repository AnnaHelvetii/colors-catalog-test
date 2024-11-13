import './css/style.css';

const API_BASE_URL = 'https://67309b8066e42ceaf160cbf8.mockapi.io/api/v1/products';

let localCart = [];

const productsContainer = document.getElementById('products-list');
const productsCount = document.querySelector('.products__count span');

let allProducts = [];
let filteredProducts = [];

document.addEventListener('DOMContentLoaded', () => {
	fetchProducts();
	loadCartFromStorage();
	displayCartItems();
});

async function fetchProducts() {
	try {
		const response = await fetch(`${API_BASE_URL}/products`);
		allProducts = await response.json();
		filteredProducts = allProducts;
		displayProducts(filteredProducts);
	} catch (error) {
		console.error('При загрузке товаров произошла ошибка', error);
	}
};

function displayProducts(products) {
	const noProductsMessage = document.createElement('p');
	noProductsMessage.classList.add('no-products-message');
	noProductsMessage.textContent = "Товары не найдены";

	productsContainer.innerHTML = '';

	if (products.length === 0) {
		productsContainer.classList.add('empty');
		productsContainer.appendChild(noProductsMessage);
	} else {
		productsContainer.classList.remove('empty');

		products.forEach(product => {
			const productCard = document.createElement('div');
			productCard.className = 'product-card';

			productCard.innerHTML = `
				<div class="product-card__img-wrapper">
					<img class="product-card__img" src="${product.image}" alt="${product.name}">
				</div>
				<div class="product-card__content">
					<p class="product-card__title">
						${product.name}
					</p>
					<div class="product-card__footer">
						<p class="product-card__price">${product.price} ₽</p>
						<button class="product-card__button"></button>
					</div>
				</div>
			`;

			const button = productCard.querySelector('.product-card__button');
			button.addEventListener('click', () => addToCart(product.id));

			productsContainer.appendChild(productCard);
		});
	}

	productsCount.textContent = products.length;
}

function applyFilters() {
	const isNewChecked = document.getElementById('filterSwitch1').checked;
	const isInStockChecked = document.getElementById('filterSwitch2').checked;
	const isContractChecked = document.getElementById('filterSwitch3').checked;
	const isExclusiveChecked = document.getElementById('filterSwitch4').checked;
	const isSaleChecked = document.getElementById('filterSwitch5').checked;

	filteredProducts = allProducts.filter(product => {
		const addedAtDate = new Date(product.addedAt);
		const filterDate = new Date("2024-05-07T14:30:00Z");

		return (
			(!isNewChecked || addedAtDate >= filterDate) &&
			(!isInStockChecked || product.inStock) &&
			(!isContractChecked || (Array.isArray(product.category)) && product.category.includes("contract")) &&
			(!isExclusiveChecked || (Array.isArray(product.category)) && product.category.includes("exclusive")) &&
			(!isSaleChecked || (Array.isArray(product.category)) && product.category.includes("sale"))
		);
	});

	displayProducts(filteredProducts);
}

document.querySelectorAll('.filters__item .switch__input').forEach(filter => {
	filter.addEventListener('change', applyFilters);
});

document.addEventListener('DOMContentLoaded', fetchProducts);

async function addToCart(productId) {
	try {
		const response = await fetch(`${API_BASE_URL}/products/${productId}`);
		const product = await response.json();

		const existingCartItem = localCart.find(item => item.id === productId);

		if (existingCartItem) {
			if (product.inStock) {
				existingCartItem.quantity += 1;
			} else {
				existingCartItem = 1;
			}
		} else {
			localCart.push({ ...product, quantity: product.inStock ? 1 : 1 });
		}

		saveCartToStorage();
		displayCartItems();
	} catch (error) {
		console.error('Товар не добавлен:', error);
	}
}

function saveCartToStorage() {
	localStorage.setItem('cart', JSON.stringify(localCart));
}

function loadCartFromStorage() {
	const savedCart = localStorage.getItem('cart');
	localCart = savedCart ? JSON.parse(savedCart) : [];
}


function displayCartItems() {
	const cartList = document.querySelector('.cart_products-list');
	const cartCount = document.querySelector('.cart-count span');
	const iconsItemCartButton = document.querySelector('.icons-item__cart-button p');
	const iconsItemCartButtonMini = document.querySelector('.icons-item__cart-button-mini p');
	const finalPriceElement = document.querySelector('.final-price__price');

	cartList.innerHTML = '';
	let totalPrice = 0;
	let totalItemCount = 0;

	localCart.forEach(item => {
		const cartItem = document.createElement('div');
		cartItem.className = 'cart-item';
		const itemOpacity = item.inStock ? '1' : '0.4';
		const quantityControls = item.inStock ? '' : 'disabled';
		const removeButtonClass = item.inStock ? '' : 'out-of-stock';

		cartItem.innerHTML = `
		<div class="cart-item__image-text" style="opacity: ${itemOpacity}">
			<img src="${item.image}" alt="${item.name}" class="cart-item__image">
			<div class="cart-item__details">
				<h3 class="cart-item__name">${item.name}</h3>
				<p class="cart-item__price">${item.price} ₽</p>
			</div>
		</div>
		<div class="cart-item__button-section">
			<div class="cart-item__set-quantity">
				<button class="button-decrease" ${quantityControls}></button>
				<p class="cart-item__quantity">${item.quantity}</p>
				<button class="button-increase" ${quantityControls}></button>
			</div>
			<button class="cart-item__remove ${removeButtonClass}"></button>
		</div>
		`;

		const buttonDec = cartItem.querySelector('.button-decrease');
		buttonDec.addEventListener('click', () => decreaseQuantity(item.id));

		const buttonInc = cartItem.querySelector('.button-increase');
		buttonInc.addEventListener('click', () => increaseQuantity(item.id));

		const buttonRemove = cartItem.querySelector('.cart-item__remove');
		buttonRemove.addEventListener('click', () => removeFromCart(item.id));

		cartList.appendChild(cartItem);

		if (item.inStock) {
			totalPrice += item.price * item.quantity;
			totalItemCount += item.quantity;
		}
	});

	cartCount.textContent = totalItemCount;
	if (iconsItemCartButton) iconsItemCartButton.textContent = totalItemCount;
	if (iconsItemCartButtonMini) iconsItemCartButtonMini.textContent = totalItemCount;
	finalPriceElement.textContent = `${totalPrice} ₽`;
};

function removeFromCart(productId) {
	localCart = localCart.filter(item => item.id !== productId);
	saveCartToStorage();
	displayCartItems();
};

function decreaseQuantity(productId) {
	const cartItem = localCart.find(item => item.id === productId);
	if (cartItem && cartItem.quantity > 1) {
		cartItem.quantity -= 1;
		saveCartToStorage();
		displayCartItems();
	} else if (cartItem && cartItem.quantity === 1) {
		removeFromCart(productId);
	}
};

function increaseQuantity(productId) {
	const cartItem = localCart.find(item => item.id === productId);
	if (cartItem) {
		cartItem.quantity += 1;
		saveCartToStorage();
		displayCartItems();
	}
};

function clearCart() {
	localCart = [];
	saveCartToStorage();
	displayCartItems();
};

const clearCartButton = document.querySelector('.cart__clear');
clearCartButton.addEventListener('click', clearCart);

/* Cart open + overlay */

const cart = document.querySelector('.cart');
const overlay = document.querySelector('.cart-overlay');
const openCartButton = document.getElementById('cart-button-open');
const openCartButtonMini = document.querySelector('.icons-item__cart-button-mini');
const closeCartButton = document.querySelector('.cart__close-button');

function toggleCart() {
	const isCartOpen = document.body.classList.toggle('cart-open');
	const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

	if (isCartOpen) {
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

document.querySelector('.sort-dropdown__button').addEventListener('click', () => toggleModal());

function toggleModal() {
	const modal = document.getElementById('sortModal');
	const overlay = document.getElementById('overlay');

	modal.classList.toggle('show-modal');
	overlay.classList.toggle('show-overlay');
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

document.querySelectorAll('.modal__item').forEach(item => {
	item.addEventListener('click', function() {
		const optionText = this.getAttribute('data-option');
		selectOption(optionText);
	});
});

/* Burger dropdown for mobile */

document.addEventListener('DOMContentLoaded', () => {
	const burgerIcon = document.getElementById('burger-icon');
	const burgerDropdown = document.getElementById('burger-dropdown');

	function toggleBurgerMenu() {
		burgerDropdown.classList.toggle('show');
	};

	burgerIcon.addEventListener('click', (event) => {
		event.stopPropagation();
		toggleBurgerMenu();
	});

	document.addEventListener('click', (event) => {
		if (!burgerDropdown.contains(event.target) && burgerDropdown.classList.contains('show')) {
			burgerDropdown.classList.remove('show');
		}
	});
});

/* Mobile filters-switchers */

document.addEventListener('DOMContentLoaded', () => {
	const filtersToggleButton = document.querySelector('.filters-toggle-button');
	const filters = document.querySelector('.filters');
	const overlay = document.querySelector('.overlay-mobile');

	function toggleFilters() {
		filters.classList.toggle('show');
		overlay.classList.toggle('show');
	}

	filtersToggleButton.addEventListener('click', toggleFilters);

	overlay.addEventListener('click', toggleFilters);
});
