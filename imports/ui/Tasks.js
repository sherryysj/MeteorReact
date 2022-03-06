import React from 'react'
import {useTracker} from 'meteor/react-meteor-data';
import { TasksCollection } from '../api/collections';

export const Tasks = ({task}) => {

  // retrive tasks and sort by lastest created time
  const tasks = useTracker(() => TasksCollection.find({},{sort: {createdAt: -1}}).fetch());

  // frontend - UI
  return (
    <ul>
        {tasks.map(task => 
            <li key={task._id}>
              <input
                type="checkbox"
                checked={!!task.isChecked}
                onClick={() => onCheckboxClick(task)}
                readOnly
              />
              <span>{task.text}</span>
            </li>
        )}
    </ul>
  )
}
