const taskSchema = require("../models/taskSchema");

const getAllTasks = (req, res) => {
  res.send("get all the tasks");
};

const createTask = async (req, res) => {
  const task = await taskSchema.create(req.body);
  res.status(201).json({ task });
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update a task");
};

const deleteTask = (req, res) => {
  res.send("delete a task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
