const API_BASE_URL = 'https://67309b8066e42ceaf160cbf8.mockapi.io/api/v1/products';

document.addEventListener('DOMContentLoaded', fetchProducts);

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
					<button class="product-card__button" onclick="addToCart('${product.id}')">+</button>
				</div>
			</div>
		`;

		productList.appendChild(productCard);
	});
}