const Todo = require("../Models/todo");


exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user.userId }).sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch todos", error: err.message });
  }
};





exports.addTodo = async (req, res) => {
  const { title, description } = req.body;
  try {
    const todo = await Todo.create({
      userId: req.user.userId,
      title,
      description
    });
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ message: "Failed to add todo", error: err.message });
  }
};





exports.updateTodo = async (req, res) => {
  const { title, description, isCompleted } = req.body;
  try {
    const updated = await Todo.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      { title, description, isCompleted },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Todo not found" });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update todo", error: err.message });
  }
};





exports.deleteTodo = async (req, res) => {
  try {
    const result = await Todo.deleteOne({ _id: req.params.id, userId: req.user.userId });

    if (result.deletedCount === 0) return res.status(404).json({ message: "Todo not found" });

    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete todo", error: err.message });
  }
};
