import React from "react";

/**
 * TODO: implement the Task component
 * @function Task
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
 */
export default function Task({ task, handleToggleTask, handleDeleteTask }) {
    return (
      <li>
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleTask(task.id)}
          />
          {task.description}
        </span>
        <button
          onClick={() => handleDeleteTask(item.id)}
          style={{
            marginLeft: "8px",
            background: "transparent",
            border: "none",
            color: "black",
            cursor: "pointer",
            fontSize: "20px",
          }}
          aria-label="Delete item"
        >
          ☠
        </button>
      </li>
    );
  }
