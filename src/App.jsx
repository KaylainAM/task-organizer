import React, { useState } from 'react';

function TaskOrganizer() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Add a new task
  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  // Delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Move task up
  const moveUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      // Swap elements using destructuring
      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  // Move task down
  const moveDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-lg">
      
      <div className="flex gap-2 mb-6">
        <input 
          type="text" 
          placeholder="Enter a task..." 
          className="flex-1 border p-2 rounded"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
       <button 
  onClick={addTask}
  className="colorass"
>
  Add
</button>
      </div>

      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center justify-between border-b pb-2">
            <span className="text-lg">{task}</span>
            <div className="flex gap-2">
              <button onClick={() => moveUp(index)} className="px-2 py-1 bg-gray-200 rounded disabled:opacity-30" disabled={index === 0}>⬆️</button>
              <button onClick={() => moveDown(index)} className="px-2 py-1 bg-gray-200 rounded disabled:opacity-30" disabled={index === tasks.length - 1}>⬇️</button>
              <button onClick={() => deleteTask(index)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskOrganizer;