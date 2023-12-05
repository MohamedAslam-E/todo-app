import TodoService from "../service/todoService.js";
import todoValidation from "../validation/todoValidation.js";

export const createTask = async (req, res) => {
  try {
    const { error } = todoValidation.validate(req.body, {
      allowUnknown: false,
    });
    if (error) {
      return res
        .status(400)
        .json({ error: error.details[0].message, data: null });
    }
    const task = await TodoService.createTodo(req.body);
    return res.status(200).json({ error: null, data: task });
  } catch (e) {
    return res.status(500).json({ error: e, data: null });
  }
};

export const getTask = async (req, res) => {
  try {
    const tasks = await TodoService.getTodo();
    res.status(200).json({ error: null, data: tasks });
  } catch (e) {
    res.status(500).json({ error: e, data: null });
    console.log(e);
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await TodoService.updateTodo(req.params.id, req.body);
    res.status(200).json({ error: null, data: task });
  } catch (error) {
    res.status(500).json({ error: error, data: null });
    console.log(error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deleteTask = await TodoService.deleteTask(req.params.id);
    res.status(200).json({ error: null, data: null });
  } catch (error) {
    res.status(500).json({ error: error, data: null });
    console.log(error);
  }
};
