import React from 'react'
import {useTracker} from 'meteor/react-meteor-data';
import { TasksCollection } from '../api/collections';

export const Tasks = ({task}) => {

  const tasks = useTracker(() => TasksCollection.find().fetch());

  return (
    <ul>
        {tasks.map(task => 
            <li key={task._id}>{task.text}</li>
        )}
    </ul>
  )
}
