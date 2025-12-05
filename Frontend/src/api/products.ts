import { renderCart } from "../components/cart_component.js";
import product_component from "../components/product_component.js";
import type Product from "../interfaces/product.js";
import { addToCart } from "../utils/cart.js";

export async function loadProducts() {
  const res = await fetch("http://localhost:3000/products");
  const products: Product[] = await res.json();

  const container = document.getElementById("products")!;
  container.innerHTML = products.map(product_component).join("");

  document.querySelectorAll(".add-cart").forEach(btn =>
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-id"));
      addToCart(id);
      renderCart()
    })
  );
}

loadProducts();