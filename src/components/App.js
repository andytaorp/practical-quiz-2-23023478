import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const onAddTask = (newTask) => {
    // TODO: write code to add a new task
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const onToggleTask = (id) => {
    // TODO: write code to toggle a task's status
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const onDeleteTask = (id) => {
    // TODO: write code to delete a task
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      {/*TODO: add a form to add a new task*/}
      <Form onAddTask ={onAddTask} />
      {/*TODO: add a list of tasks*/}
      <TaskList 
      tasks={tasks} 
      onToggleTask={onToggleTask} 
      onDeleteTask={onDeleteTask}
      />
    </div>
  );
}

export default App;
