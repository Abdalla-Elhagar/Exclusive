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
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose
  .connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.zvczkti.mongodb.net/Exclusive?retryWrites=true&w=majority&appName=Cluster0
`)
  .then(() => {
    console.log("connected with DB");
  })
  .catch((err) => {
    console.log(err);
  });

const allowedOrigins = [
  "http://localhost:5173",
  "https://exclusive-mauve-eight.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
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

// app.listen(PORT || 5000, () => {
//   try {
//     console.log("the server is running");
//   } catch (err) {
//     console.log(err);
//   }
// });

export default app;
