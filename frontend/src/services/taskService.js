import axios from 'axios';

const API_URL = "http://13.203.160.50:3000/tasks"; // Your backend API URL

// Get all tasks
export const getTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Add a new task
export const addTask = async (title) => {
    const response = await axios.post(API_URL, { title });
    return response.data;
};

// Mark task as completed
export const updateTask = async (id, completed) => {
    const response = await axios.put(`${API_URL}/${id}`, { completed });
    return response.data;
};

// Delete task
export const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
