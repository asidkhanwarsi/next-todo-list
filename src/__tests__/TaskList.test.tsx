import TaskList from "@/components/TaskList";
import { render, screen, fireEvent } from "@testing-library/react";

test("renders tasks and toggles completion", () => {
  const tasks = [
    { id: "1", title: "Task 1", completed: false },
    { id: "2", title: "Task 2", completed: true },
  ];

  const toggleTask = jest.fn();
  const deleteTask = jest.fn();

  render(
    <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
  );

  const taskCheckbox = screen.getByLabelText("Mark Task 1 as completed");
  fireEvent.click(taskCheckbox);

  expect(toggleTask).toHaveBeenCalledWith("1");
});
