import { getCart, saveCart } from "../utils/cart.js";

export async function renderCart() {
  const res = await fetch("http://localhost:3000/products");
  const products = await res.json();

  const cart = getCart();
  const container = document.getElementById("cart-items")!;
  const totalSpan = document.getElementById("cart-total")!;

  let html = "";
  let total = 0;

  for (const item of cart) {
    const product = products.find((p: any) => p.id === item.id);
    if (!product) continue;

    const subtotal = product.price * item.quantity;
    total += subtotal;

    html += `
      <div class="cart-item">
        <p>${product.name} x${item.quantity}</p>
        <p>$${subtotal}</p>
      </div>
      <hr>
    `;
  }

  container.innerHTML = html;
  totalSpan.textContent = String(total);
}

export function setupCartModal() {
  const modal = document.getElementById("cart-modal")!;
  const openBtn = document.getElementById("open-cart-btn")!;
  const closeBtn = document.getElementById("close-cart-btn")!;
  const clearBtn = document.getElementById("clear-cart-btn")!;

  openBtn.addEventListener("click", () => {
    renderCart();
    modal.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  clearBtn.addEventListener("click", () => {
    saveCart([]);
    renderCart();
  });
}

setupCartModal();
