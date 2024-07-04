import express from "express";
import cors from "cors";
import router from "./router";
import * as dotenv from "dotenv";
import morgan from "morgan";
import { protect } from "./modules/auth";
import { createNewUser, singIn } from "./handlers/user";

dotenv.config();
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.json({ message: "hello" });
});

app.use("/api", protect, router);
app.post("/signup", createNewUser);
app.post("/signin", singIn);

app.use((err, req, res, next) => {
  if (err.type === "auth") {
    res.status(401).json({ message: "Unauthorized" });
  } else if (err.type === "input") {
    res.status(400).json({ message: "Invalid Input" });
  } else {
    res.status(500).json({ message: "Server Error" });
  }
});

export default app;
