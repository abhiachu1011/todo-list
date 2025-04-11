import React, { useEffect, useState } from "react";
import { getTasks, addTask, updateTask, deleteTask } from "../services/taskService";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    };

    const handleAddTask = async () => {
        if (newTask.trim() === "") return;
        await addTask(newTask);
        setNewTask("");
        fetchTasks();
    };

    const handleToggleComplete = async (id, completed) => {
        await updateTask(id, !completed);
        fetchTasks();
    };

    const handleDeleteTask = async (id) => {
        await deleteTask(id);
        fetchTasks();
    };

    return (
        <div>
            <h2>To-Do List</h2>
            <input 
                type="text" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a task..."
            />
            <button onClick={handleAddTask}>Add</button>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        <span 
                            style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
                            onClick={() => handleToggleComplete(task._id, task.completed)}
                        >
                            {task.title}
                        </span>
                        <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
