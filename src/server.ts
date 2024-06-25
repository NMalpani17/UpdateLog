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

// app.use((req, res, next) => {
//   res.status(401);
//   res.send("Nope");
// });

app.get("/", (req, res) => {
  console.log("Successful request");
  res.status(200);
  res.json({ message: "Json message" });
});

app.use("/api", protect, router);
app.post("/signup", createNewUser);
app.post("/signin", singIn);

export default app;
