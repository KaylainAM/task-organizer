import { useState } from 'react';
import './index.css';

function App() {
  const [tasks, setTasks] = useState(["Go to work", "Eat Breakfast", "Walk the dog"]);
  const [taskInput, setTaskInput] = useState("");

  // 1. Logic to add a task
  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput(""); // Clears the input field
    }
  };

  // 2. Logic to delete a task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // 3. Logic to move task UP
  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  // 4. Logic to move task DOWN
  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="app-container">
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>Task Organizer</h1>
      
      <div className="input-group">
        <input 
          type="text" 
          placeholder="Enter a task..." 
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()} // Allows pressing Enter to add
        />
        <button className="btn btn-add" onClick={addTask}>Add</button>
      </div>

      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-row">
            <span className="task-text">{task}</span>
            <div style={{ display: 'flex' }}>
              <button className="btn btn-delete" onClick={() => deleteTask(index)}>Delete</button>
              <button className="btn btn-arrow" onClick={() => moveTaskUp(index)}>☝️</button>
              <button className="btn btn-arrow" onClick={() => moveTaskDown(index)}>👇</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App; // This fixes the last line error!