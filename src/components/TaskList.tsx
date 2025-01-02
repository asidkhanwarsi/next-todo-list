import React from "react";
import styles from "@/styles/TaskList.module.css";
import { TaskListProps } from "@/types/task";

// TaskListProps expects tasks, onToggle, and onDelete as props
const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  return (
    <ul className={styles.taskList}>
      {/* Iterating through the tasks array and rendering each task */}
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? styles.completed : ""}>
          <label>
            {/* Checkbox to mark a task as completed */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              aria-label={`Mark ${task.title} as completed`}
            />
            {task.title}
          </label>

          {/* Delete button to remove a task */}
          <button
            onClick={() => onDelete(task.id)}
            aria-label={`Delete ${task.title}`}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
