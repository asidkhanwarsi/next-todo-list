import TaskForm from "@/components/TaskForm";
import { render, screen, fireEvent } from "@testing-library/react";

describe("TaskForm", () => {
  it("adds a task when form is submitted", () => {
    const onAddTask = jest.fn();
    render(<TaskForm onAddTask={onAddTask} />);

    const input = screen.getByLabelText("Task title");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(onAddTask).toHaveBeenCalledWith("New Task");
    expect(input).toHaveValue("");
  });

  it("does not add empty tasks", () => {
    const onAddTask = jest.fn();
    render(<TaskForm onAddTask={onAddTask} />);

    const button = screen.getByText("Add");
    fireEvent.click(button);

    expect(onAddTask).not.toHaveBeenCalled();
  });
});
