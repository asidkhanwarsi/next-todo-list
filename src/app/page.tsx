import React from "react";
import TaskManager from "@/components/TaskManager";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo List | Task Management App",
  description: "A simple and accessible task management application",
};

async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/tasks");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return []; // Return empty array as fallback
  }
}

export default async function Home() {
  const initialTasks = await getData();

  return (
    <div>
      <h1>Todo List</h1>
      <TaskManager initialTasks={initialTasks} />
    </div>
  );
}
