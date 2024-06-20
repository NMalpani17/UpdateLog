import express from "express";
import cors from "cors";
import router from "./router";

import morgan from "morgan";

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

app.use("/api", router);

export default app;
