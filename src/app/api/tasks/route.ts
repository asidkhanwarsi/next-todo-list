"use server";

import { NextResponse } from "next/server";

// Async function that handles GET requests
export async function GET() {
  try {
    // Fetching data from the external API (JSONPlaceholder) with a limit of 5 tasks
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );

    // Parsing the response JSON into a JavaScript object
    const tasks = await res.json();

    // Formatting the task data to match the desired structure
    const formattedTasks = tasks.map(
      (task: { id: string; title: string; completed: boolean }) => ({
        id: task.id.toString(),
        title: task.title,
        completed: task.completed,
      })
    );

    // Returning the formatted tasks as JSON with a successful response
    return NextResponse.json(formattedTasks);
  } catch (error) {
    console.log("error: ", error);
    // Handling errors, and sending a 500 status with a custom error message if fetching tasks fails
    return NextResponse.json(
      { error: "Failed to fetch tasks" },
      { status: 500 }
    );
  }
}
