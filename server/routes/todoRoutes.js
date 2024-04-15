import express from "express";
import {
  addTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.route("/").get(getTodo).post(addTodo);
router.route("/:id").delete(deleteTodo).patch(updateTodo).g;

export default router;
