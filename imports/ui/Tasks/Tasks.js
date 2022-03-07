import React from 'react'
import { Task } from './Task';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '../../api/collections';

export const Tasks = () => {

    // retrive tasks and sort by lastest created time
    const tasks = useTracker(() => TasksCollection.find({},{sort: {createdAt: -1}}).fetch());

  return (
    <ul>
        {tasks.map(task => 
            <Task 
                key={task._id}
                task={task} 
            />
        )}
    </ul>
  )
}
