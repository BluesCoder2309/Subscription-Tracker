import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => res.send("Get all Users"));

userRouter.get("/:id", (req, res) => res.send("Get User with id"));

userRouter.post("/", (req, res) => res.send("Create new User"));

userRouter.put("/:id", (req, res) => res.send("Update User"));

userRouter.delete("/:id", (req, res) => res.send("Delete User"));

export default userRouter;
