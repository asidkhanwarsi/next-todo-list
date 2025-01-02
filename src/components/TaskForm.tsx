"use client";

import React, { useState } from "react";
import styles from "@/styles/TaskForm.module.css";
import { TaskFormProps } from "@/types/task";

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  // useState hook to manage the state of the task title
  const [title, setTitle] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} role="form">
      {/* Label for the task input field */}
      <label htmlFor="taskTitle">Add Task</label>

      {/* Input field for task title */}
      <input
        id="taskTitle"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        aria-label="Task title"
        required
      />

      {/* Submit button to add the task */}
      <button type="submit" disabled={!title.trim()}>
        Add
      </button>
    </form>
  );
};

export default TaskForm;
