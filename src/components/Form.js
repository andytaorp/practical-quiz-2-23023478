import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();

    if (!description.trim()) {
      alert("Task description cannot be empty!");
      return;
    }    
  
      const newTask = {
        key: Date.now(),
        description,
        completed: false,
      };

      onAddTask(newTask);
  };

  return (
    /*TODO: add a form to add a new task*/
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add Task</h3>
      
      {/* input for task desc */}
      <input 
      type="text" 
      placeholder="New Task..."
      value={description}
      onChange={(e) => setDescription(e.target.value)} 
      />
      
      {/* Add button */}
      <button type="submit">SUBMIT</button>
    
    </form>
  );
}

