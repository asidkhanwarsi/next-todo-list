import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FilterType, Task } from "@/types/task";
import { TaskStore } from "@/types/store";

const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [] as Task[],
      filter: "all" as FilterType,
      setFilter: (filter: FilterType) => set({ filter }),
      addTask: (task: string | Task) =>
        set((state) => {
          if (typeof task === "string") {
            const newTask: Task = {
              id: crypto.randomUUID(),
              title: task,
              completed: false,
            };
            return { tasks: [...state.tasks, newTask] };
          }
          return { tasks: [...state.tasks, task] };
        }),
      toggleTask: (id: string) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),
      deleteTask: (id: string) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      clearTasks: () => set({ tasks: [] }),
    }),
    {
      name: "task-storage",
    }
  )
);

export default useTaskStore;
