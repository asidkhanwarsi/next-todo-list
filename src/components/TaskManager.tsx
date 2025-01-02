"use client";

import React, { useEffect } from "react";
import styles from "@/styles/TaskManager.module.css";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import useTaskStore from "@/store/useTaskStore";
import ErrorBoundary from "./ErrorBoundary";
import FilterControls from "./FilterControls";
import { TaskManagerProps } from "@/types/store";

const TaskManager: React.FC<TaskManagerProps> = ({ initialTasks }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  // Destructuring the task-related actions and state from the custom task store hook
  const {
    tasks,
    filter,
    addTask,
    toggleTask,
    deleteTask,
    clearTasks,
    setFilter,
  } = useTaskStore();

  // Filtering tasks based on the current filter value (all, completed, pending)
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true; // If no filter is set, return all tasks
  });

  useEffect(() => {
    clearTasks();
    setTimeout(() => {
      // Adding tasks from initialTasks to the store after a brief delay (simulating loading)
      initialTasks.forEach((task) => addTask(task));
      setIsLoading(false);
    }, 1000);
  }, [initialTasks, addTask, clearTasks]);

  return (
    <ErrorBoundary>
      <div id="main-content" role="main" className={styles.taskManager}>
        {/* TaskForm allows the user to add new tasks */}
        <TaskForm onAddTask={(title) => addTask(title)} />

        {/* Conditional rendering based on the loading state */}
        {isLoading ? (
          <div className="loader" role="status">
            {/* Screen reader text for loading */}
            <span className="sr-only">Loading tasks...</span>
          </div>
        ) : (
          <>
            {/* Filter controls to change the filter state */}
            <FilterControls currentFilter={filter} onFilterChange={setFilter} />

            {/* TaskList displays filtered tasks and provides toggle and delete functionality */}
            <TaskList
              tasks={filteredTasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          </>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default TaskManager;
