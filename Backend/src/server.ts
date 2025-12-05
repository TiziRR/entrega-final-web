import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("API corriendo en http://localhost:3000");
});
