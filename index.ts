//initial config
const express = require("express");
import { ErrorRequestHandler, Request, Response } from "express";
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

//read JSON
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//rotas
const itemRoutes = require("./routes/itemRoutes");

app.use("/item", itemRoutes);

//first route
app.get("/", (req: Request, res: Response) => {
  res.send("OK");
});

//deliver a port

mongoose
  .connect(process.env.MONGO_CONNECT)
  .then(() => {
    console.log("Banco conectado!");
  })
  .catch((err: ErrorRequestHandler) => console.log(err));
app.listen(3001);
