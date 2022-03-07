import React, { useState } from 'react'
import { TasksCollection } from '../api/collections';

export const TaskForm = () => {

  const [text, setText] = useState("");

  // backend - call api to insert the task into database
  const handleSubmit = e => {
      e.preventDefault();

      if (!text) return;

      TasksCollection.insert({
          text:text.trim(),
          isChecked: false,
          createdAt: new Date()
      });

      setText("");
  }

  // frontend - UI
  return (
    <form onSubmit={handleSubmit} className="taskform">
        <input
            type="text"
            placeholder='type to add new tasks'
            value={text}
            onChange={(e)=>setText(e.target.value)}
        />
        <button type="submit">Add Task</button>
    </form>
  )
}
