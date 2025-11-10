import express from "express";
import env from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import productRouter from "./routes/product.js";
import cartRouter from "./routes/cart.js";
import favoriteRouter from "./routes/favorite.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { seedProducts } from "./services/productServices/seedProducts.js";

env.config();
const app = express();
app.use(cookieParser());
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://exclusive-frontend-tau.vercel.app",
];

// CORS middleware - MUST come before routes
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Set-Cookie"],
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Vary", "Origin");
  next();
});

const { DB_USERNAME, DB_PASSWORD, PORT } = process.env;

mongoose
  .connect(
    `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.zvczkti.mongodb.net/Exclusive?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected with DB"))
  .catch((err) => console.error("DB Error:", err));

app.get("/", (req, res) => {
  res.send("API working fine!");
});

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/favorite", favoriteRouter);

seedProducts();

app.listen(PORT || 5000, () => {
  console.log(`Server running on port ${PORT || 5000}`);
});
