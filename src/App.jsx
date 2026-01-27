import React, { useState } from 'react';

function TaskOrganizer() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Add a new task
  const addTask = () => {
  if (taskInput.trim() !== "") {
    setTasks([...tasks, taskInput]); // Adds the new task to the list
    setTaskInput(""); // This clears the input box after adding
  }
    }

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
  <div className="app-container">
    <div className="input-group">
      <input type="text" placeholder="Enter a task..." />
      <button className="btn btn-add">Add</button>
    </div>

    <div className="task-list">
      {/* Example of one task item */}
      <div className="task-row">
        <span className="task-text">Go to work</span>
        <button className="btn btn-delete">Delete</button>
       {/* Move Up Button */}
<button className="btn-arrow" onClick={() => moveTaskUp(index)}>
  ☝️
</button>

{/* Move Down Button */}
<button className="btn-arrow" onClick={() => moveTaskDown(index)}>
  👇
</button>
      </div>
    </div>
  </div>
);
}

export default TaskOrganizer;