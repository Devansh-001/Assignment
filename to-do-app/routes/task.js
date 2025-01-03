import express from "express"
import { fetchTasks, createTask, getTask, updateTask, deleteTask } from "../controller/task.js"
import authenticate from "../middleware/auth.js";
const router = express.Router();


router.get('/', authenticate, fetchTasks);

router.post('/', authenticate, createTask);

router.get('/:id', authenticate, getTask);

router.put('/:id', authenticate, updateTask);

router.delete('/:id', authenticate, deleteTask);



export default router;