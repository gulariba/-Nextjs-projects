'use client'; // Required for client-side rendering

import { useState, ChangeEvent, MouseEvent } from 'react';  // We import React’s hooks and types to manage state and handle events properly.


// Define the shape of a task
interface Task {
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  // State to store tasks
  const [tasks, setTasks] = useState<Task[]>([]);
  
  // State to store user input
  const [input, setInput] = useState<string>('');

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Add a new task
  const addTask = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default form behavior
    if (input.trim() !== '') {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput(''); // Clear input field
    }
  };

  // Toggle task completion
  const toggleTask = (index: number) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  // Delete a task
  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <main style={{ maxWidth: '600px', margin: '50px auto', textAlign: 'center' }}>
      <h1>My Stylish To-Do List</h1>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Add a new task..."
          style={{ flex: 1, padding: '10px' }}
        />
        <button onClick={addTask} style={{ padding: '10px' }}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              marginBottom: '10px',
            }}
          >
            <span onClick={() => toggleTask(index)}>{task.text}</span>
            <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
