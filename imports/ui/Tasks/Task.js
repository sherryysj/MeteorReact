import React from 'react'
import { TasksCollection } from '../../api/collections';

export const Task = ({task}) => {

  // backend - call api to update task data
  const onCheckboxClick = () => (
    TasksCollection.update(task._id, {
        $set:{
            isChecked:!task.isChecked
        }
    })
  )

  // backend - call api to delete task data
  const onDeleteClick = () => {
      TasksCollection.remove(task._id)
  }

  // frontend - UI
  return (
    <li key={task._id}>
        <input
            type="checkbox"
            checked={task.isChecked}
            onClick={() => onCheckboxClick()}
            readOnly
        />
        <div className="taskText">
          <p className="taskName">{task.text}</p> 
          <p className="taskDate">{task.createdAt.toDateString().substring(4)}</p>
        </div>
        <button 
          className="deleteButton"
          onClick={() => onDeleteClick()}
        >&times;</button>
    </li>
  )
}
