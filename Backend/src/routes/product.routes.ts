import { Router } from "express";
import { openDb } from "../db/database";

const router = Router();

router.get("/", async (req, res) => {
  const db = await openDb();
  const products = await db.all("SELECT * FROM products");
  res.json(products);
});

router.post("/", async (req, res) => {
  const { name, price, image } = req.body;
  const db = await openDb();

  await db.run(
    "INSERT INTO products (name, price, image) VALUES (?, ?, ?)",
    [name, price, image]
  );

  res.json({ message: "Producto creado" });
});

router.get("/:id", async (req, res) => {
  const db = await openDb();
  const product = await db.get("SELECT * FROM products WHERE id = ?", [req.params.id]);

  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.json(product);
});

router.put("/:id", async (req, res) => {
  const { name, price, image } = req.body;

  const db = await openDb();
  await db.run(
    "UPDATE products SET name = ?, price = ?, image = ? WHERE id = ?",
    [name, price, image, req.params.id]
  );

  res.json({ message: "Producto actualizado" });
});

router.delete("/:id", async (req, res) => {
  const db = await openDb();
  await db.run("DELETE FROM products WHERE id = ?", [req.params.id]);

  res.json({ message: "Producto eliminado" });
});

export default router;
