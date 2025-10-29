import express from "express";
import env from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/user.js"
env.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/eCommerce")
  .then(() => {
    console.log("connected with DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());



  app.use("/users", userRouter)


app.listen(PORT, () => {
  try {
    console.log("the server is running");
  } catch (err) {
    console.log(err);
  }
});
