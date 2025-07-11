const express = require("express");
const router = express.Router();
const auth = require("../middleware/samplemiddleware"); 

const {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo} = require("../Controllers/todoController");

router.post("/", auth, addTodo);
router.get("/", auth, getTodos);
router.put("/:id", auth, updateTodo);
router.delete("/:id", auth, deleteTodo);


module.exports = router;
