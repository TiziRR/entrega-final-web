export function getCart() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

export function saveCart(cart: any[]) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId: number) {
  const cart = getCart();

  const existing = cart.find((item: any) => item.id === productId);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  saveCart(cart);
  console.log("Producto agregado:", cart);
}
