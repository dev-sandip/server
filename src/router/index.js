import { Router } from "express";
import homeRouter from "./home.route.js";

const appRouter = Router();

appRouter.use("/home", homeRouter);

export default appRouter;
