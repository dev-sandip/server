import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./router/index.js";

config();
const app = express();
app.use(express.json());

// remove it in production
app.use(morgan("dev"));
app.use("/api/v1", appRouter);

export { app };
