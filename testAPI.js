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
		console.error('Товары не загружены', error);
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
			existingCartItem.quantity += 1;
		} else {
		localCart.push({ ...product, quantity: 1 });
		}

		saveCartToStorage();
		displayCartItems();
	} catch (error) {
		console.error('Ошибка добавления товара в корзину:', error);
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
	const finalPriceElement = document.querySelector('.final-price__price');

	cartList.innerHTML = '';
	let totalPrice = 0;

	localCart.forEach(item => {
		const cartItem = document.createElement('div');
		cartItem.className = 'cart-item';

		cartItem.innerHTML = `
		<img src="${item.image}" alt="${item.name}" class="cart-item__image">
		<div class="cart-item__details">
			<h3 class="cart-item__name">${item.name}</h3>
			<p class="cart-item__price">${item.price} ₽</p>
			<p class="cart-item__quantity">Количество: ${item.quantity}</p>
		</div>
		<button class="cart-item__remove" onclick="removeFromCart('${item.id}')">Удалить</button>
		`;

		cartList.appendChild(cartItem);
		totalPrice += item.price * item.quantity;
	});

	cartCount.textContent = localCart.length;
	finalPriceElement.textContent = `${totalPrice} ₽`;
}

function removeFromCart(productId) {
	localCart = localCart.filter(item => item.id !== productId);
	saveCartToStorage();
	displayCartItems();
}