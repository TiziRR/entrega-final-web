import type Product from "../interfaces/product.js";

export default function product_component(product: Product) {
  return `
    <div class="product-card">
      <img src="${product.image}" width="150">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button 
        class="add-cart" 
        data-id="${product.id}">
        Agregar al carrito
      </button>
    </div>
  `;
}
