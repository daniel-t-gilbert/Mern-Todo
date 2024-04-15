import Todo from "../model/todoModel.js";

const addTodo = async (req, res) => {
  try {
    const todo = await Todo.create({
      title: req.body.title,
      desc: req.body.desc,
    });

    res.json(todo);
  } catch (error) {
    res.json(error.message);
  }
};

const getTodo = async (req, res) => {
  const todos = await Todo.find();

  res.json(todos);
};

const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.send("deleted");
  } catch (error) {
    res.json(error);
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const { title, desc } = req.body;

    const todo = await Todo.findById(id);

    todo.title = title || todo.title;
    todo.desc = desc || todo.desc;

    const updatedTodo = await todo.save();

    res.json(updatedTodo);
  } catch (error) {
    res.json(error);
  }
};

export { addTodo, getTodo, deleteTodo, updateTodo };
