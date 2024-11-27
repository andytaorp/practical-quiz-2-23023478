import React from "react";

/**
 * TODO: implement the Task component
 * @function Task
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
 */
export default function Task({ task, onToggleTask, onDeleteTask }) {
    return (
      <li>
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
          />
          {task.description}
        </span>
        <button
          onClick={() => onDeleteTask(task.id)}
          style={{
            marginLeft: "8px",
            background: "transparent",
            border: "none",
            color: "black",
            cursor: "pointer",
            fontSize: "20px",
          }}
          aria-label="Delete task"
        >
          ☠
        </button>
      </li>
    );
  }
