import { loadEnv } from "@/config";
import cors from "cors";
import express from "express";

import "express-async-errors";

import { productsRouter } from "./routers/auth-router";
import { clientsRouter } from "./routers/enrollment-router";

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use("/products", productsRouter)
  .use("/clients", clientsRouter)

export default app;
