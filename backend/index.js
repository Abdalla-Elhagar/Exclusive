import express from "express";
import env from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import productRouter from "./routes/product.js";
import cartRouter from "./routes/cart.js"
import favoriteRouter from "./routes/favorite.js"
import cookieParser from "cookie-parser";
import cors from "cors"
import { seedProducts } from "./services/productServices/seedProducts.js";

env.config();

const app = express();
const PORT = process.env.PORT;

mongoose
  .connect("mongodb://localhost:27017/eCommerce")
  .then(() => {
    console.log("connected with DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.get("/api/test", (req, res) => {
  res.send("API working fine!");
});

app.use(cookieParser());
app.use(express.json());

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/favorite", favoriteRouter);


seedProducts()

app.listen(PORT, () => {
  try {
    console.log("the server is running");
  } catch (err) {
    console.log(err);
  }
});
