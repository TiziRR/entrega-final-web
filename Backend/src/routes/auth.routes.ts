import { Router } from "express";
import { openDb } from "../db/database";

const router = Router();

router.post("/register", async (req, res) => {
  const { email, password, role } = req.body;

  const db = await openDb();
  await db.run(
    "INSERT INTO users (email, password, role) VALUES (?, ?, ?)",
    [email, password, role]
  );

  res.json({ message: "Usuario registrado" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const db = await openDb();
  const user = await db.get(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password]
  );

  if (!user) return res.status(401).json({ message: "Credenciales inválidas" });

  res.json({ message: "OK", role: user.role });
});

export default router;
