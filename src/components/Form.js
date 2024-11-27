import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
  };

  return (
    /*TODO: add a form to add a new task*/
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Task Tracker</h3>
      
      {/* input for item desc */}
      <input 
      type="text" 
      placeholder="Task..."
      value={description}
      onChange={(e) => setDescription(e.target.value)} 
      />
      
      {/* Add button */}
      <button type="submit">SUBMIT</button>
    
    </form>
  );
}

