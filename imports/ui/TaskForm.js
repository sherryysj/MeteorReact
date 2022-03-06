import React, { useState } from 'react'

export const TaskForm = () => {

  const [text, setText] = useState("");

  return (
    <form>
        <input
            type="text"
            placeholder='type to add new tasks'
        />
        <button type="submit">Add Task</button>
    </form>
  )
}
