function showMenu() {
  document.querySelector(".menubar").classList.toggle("active");
  document.querySelector(".toggle-btn-menu").classList.toggle("active");
}

function showCart() {
  document.querySelector(".cart-page").classList.toggle("active");
  document.querySelector(".toggle-btn-cart").classList.toggle("active");
}

let products = [
  {
    id: 0,
    title: "Product 1",
    price: "$ 1 0 0",
    image: "./Media/Product 1.jpg",
  },
  {
    id: 1,
    title: "Product 2",
    price: "$ 2 0 0",
    image: "./Media/Product 2.jpg",
  },
  {
    id: 2,
    title: "Product 3",
    price: "$ 3 0 0",
    image: "./Media/Product 3.jpg",
  },
  {
    id: 3,
    title: "Product 4",
    price: "$ 4 0 0",
    image: "./Media/Product 4.jpg",
  },
  {
    id: 4,
    title: "Product 5",
    price: "$ 5 0 0",
    image: "./Media/Product 5.jpg",
  },
];

let productDiv = document.querySelector(".products");

products.forEach(
  (item) =>
    (productDiv.innerHTML += `
<div class="product">
                        <img class="product-img img1" src="${item.image}" alt="Product1">
                        <p class="product-name name1">${item.title}</p>
                        <p class="product-price price1">${item.price}</p>
                        <button class="addToCart" onclick="cartAdd(${item.id})">Add to Cart</button>
                    </div>
                    `)
);

let val = 0;
let cartPage = document.querySelector(".cartItems");
let cartProducts = [];
function cartAdd(i) {
  if (!cartProducts.includes(i)) {
    cartProducts.push(i);

    cartPage.innerHTML = "";
    cartProducts.forEach((item) => {
      let product = products[item];
      cartPage.innerHTML += `
    <img class="product-img img1" src="${product.image}" alt="Product1">
                        <p class="product-name name1">${product.title}</p>
                        <p class="product-price price1">${product.price}</p>
    `;
    });
    val = val + 1;
    document.querySelector(".cart-total-items").innerHTML = val;
    document.querySelector(
      ".cartItemTotal"
    ).innerHTML = `<p>Your Cart Has ${val} Items</p>`;
    document.querySelector(".cart-product-info").innerHTML = ``;
  }
}
