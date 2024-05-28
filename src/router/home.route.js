import { Router } from "express";
const homeRouter = Router();

homeRouter.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Welcome to the Backend!",
    data: {
      github: "git-sandip",
      name: "Sandip Sapkota",
      age: 20,
      role: "Backend Developer",
      experience: "0 years",
    },
  });
});

export default homeRouter;
