import Task from "../models/tasks.js"

export const fetchTasks = async (req, res) => {
    try {
        const tasks = Task.find({ user: req.user.userId });
        res.status(200).json(tasks);
    }
    catch (err) {
        res.status(500).json({ message: "Error fetching tasks", error: err });
    }
}


export const createTask = async (req, res) => {
    const { title, description, status } = req.body
    console.log(title)
    try {
        const newTask = new Task({ title, description, status: status || 'pending', user: req.user.userId, });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: "Error creating task", error: err });
    }
}

export const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id, req.user.userId);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(task);
    }
    catch (err) {
        res.status(500).json({ message: "Error fetching task", error: err });
    }
}

export const updateTask = async (req, res) => {
    const { status } = req.body;
    if (!['pending', 'in-progress', 'completed'].includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
    }
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.user.userId, { status }, { new: true });
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(task);
    }
    catch (err) {
        res.status(500).json({ message: "Error updating task", error: err });
    }
}


export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id, req.user.userId);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(task);
    }
    catch (err) {
        res.status(500).json({ message: "Error deleting task", error: err })
    }
}