import React from 'react'
import { TasksCollection } from '../api/collections';

export const Task = ({task}) => {

  // backend - call api to update task data
  const onCheckboxClick = () => (
    TasksCollection.update(task._id, {
        $set:{
            isChecked:!task.isChecked
        }
    })
  )

  // frontend - UI
  return (
    <li key={task._id}>
        <input
            type="checkbox"
            checked={task.isChecked}
            onClick={() => onCheckboxClick()}
            readOnly
        />
        <span>{task.text}</span>
    </li>
  )
}
