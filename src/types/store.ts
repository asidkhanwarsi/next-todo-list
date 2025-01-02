import { StateCreator } from "zustand";
import { FilterType, Task } from "./task";

export interface TaskSlice {
  tasks: Task[];
  filter: FilterType;
}

export interface TaskActions {
  addTask: (task: string | Task) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  clearTasks: () => void;
  setFilter: (filter: FilterType) => void;
}

export type TaskStore = TaskSlice & TaskActions;
export type TaskStoreCreator = StateCreator<TaskStore, [], [], TaskStore>;

export interface TaskManagerProps {
  initialTasks: Task[];
}
