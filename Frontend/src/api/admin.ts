import type Product from "../interfaces/product";

document.addEventListener("DOMContentLoaded", () => {
  const formCreate = document.getElementById("form-product") as HTMLFormElement;
  const formEdit = document.getElementById("form-edit") as HTMLFormElement;
  const formBg = document.getElementById("form-bg") as HTMLDivElement;

  const msg = document.getElementById("message") as HTMLParagraphElement;
  const productContainer = document.getElementById("products") as HTMLDivElement;

  let editingId: number | null = null;

  async function loadProducts() {
    const res = await fetch("http://localhost:3000/products");
    const products: Product[] = await res.json();

    productContainer.innerHTML = products
      .map(
        (p: any) => `
        <div class='product-card'>
          <h3>${p.name}</h3>
          <p>Precio: $${p.price}</p>
          <img src="${p.image}" width="100">
          <br>
          <button data-edit="${p.id}">Editar</button>
          <button data-delete="${p.id}">Eliminar</button>
        </div>
        <hr>
      `
      )
      .join("");

    attachEvents();
  }

  function attachEvents() {
    document.querySelectorAll("[data-edit]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = Number((btn as HTMLElement).dataset.edit);
        startEdit(id);
      });
    });

    document.querySelectorAll("[data-delete]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = Number((btn as HTMLElement).dataset.delete);
        deleteProduct(id);
      });
    });
  }

  formCreate.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const price = (document.getElementById("price") as HTMLInputElement).value;
    const image = (document.getElementById("image") as HTMLInputElement).value;

    try {
      const res = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price, image })
      });

      const data = await res.json();

      msg.textContent = data.message;
      msg.style.color = "green";

      formCreate.reset();
      loadProducts();
    } catch {
      msg.textContent = "Error al agregar producto";
      msg.style.color = "red";
    }
  });


  async function startEdit(id: number) {
    editingId = id;

    const res = await fetch(`http://localhost:3000/products/${id}`);
    const product = await res.json();

    (document.getElementById("edit-name") as HTMLInputElement).value =
      product.name;
    (document.getElementById("edit-price") as HTMLInputElement).value =
      product.price;
    (document.getElementById("edit-image") as HTMLInputElement).value =
      product.image;

    formEdit.style.display = "flex"
    formBg.style.display = "block"
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }


  formEdit.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!editingId) return;

    const name = (document.getElementById("edit-name") as HTMLInputElement).value;
    const price = (document.getElementById("edit-price") as HTMLInputElement).value;
    const image = (document.getElementById("edit-image") as HTMLInputElement).value;

    await fetch(`http://localhost:3000/products/${editingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price, image }),
    });

    msg.textContent = "Producto actualizado";
    msg.style.color = "blue";

    formEdit.style.display = "none";
    editingId = null;

    loadProducts();
  });

  formBg.addEventListener("click", () => {
    formBg.style.display = "none"
    formEdit.style.display = "none"
  })


  async function deleteProduct(id: number) {
    if (!confirm("¿Seguro que queres eliminar este producto?")) return;

    await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });

    msg.textContent = "Producto eliminado";
    msg.style.color = "red";

    loadProducts();
  }

  loadProducts();
});
