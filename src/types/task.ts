export interface Task {
  id: string;
  title: string;
  completed: boolean;
}
export interface TaskFormProps {
  onAddTask: (title: string) => void;
}

export type FilterType = "all" | "completed" | "pending";

export interface FilterControlsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}
