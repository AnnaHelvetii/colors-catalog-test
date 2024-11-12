const API_BASE_URL = 'https://67309b8066e42ceaf160cbf8.mockapi.io/api/v1/products';

let localCart = [];

document.addEventListener('DOMContentLoaded', () => {
	fetchProducts();
	loadCartFromStorage();
	displayCartItems();
});

async function fetchProducts() {
	try {
		const response = await fetch(`${API_BASE_URL}/products`);
		const products = await response.json();
		displayProducts(products);
	} catch (error) {
		console.error('При загрузке товаров произошла ошибка', error);
	}
};

function displayProducts(products) {
	const productList = document.getElementById('products-list');
	productList.innerHTML = '';

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
					<button class="product-card__button" onclick="addToCart('${product.id}')"></button>
				</div>
			</div>
		`;

		productList.appendChild(productCard);
	});
}

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
				<button class="button-decrease" onclick="decreaseQuantity('${item.id}')" ${quantityControls}></button>
				<p class="cart-item__quantity">${item.quantity}</p>
				<button class="button-increase" onclick="increaseQuantity('${item.id}')" ${quantityControls}></button>
			</div>
			<button class="cart-item__remove ${removeButtonClass}" onclick="removeFromCart('${item.id}')"></button>
		</div>
		`;

		cartList.appendChild(cartItem);

		if (item.inStock) {
			totalPrice += item.price * item.quantity;
			totalItemCount += item.quantity;
		}
	});

	cartCount.textContent = totalItemCount;
	iconsItemCartButton.textContent = totalItemCount;
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