import React from 'react'
import { Task } from './Task';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '../../api/collections';

export const Tasks = ({hideDone}) => {

  // hide and show completed task filter
  // must put before below function since below function calls it
  const hideDoneFilter = { isChecked: {$ne: true} } 

  // backend - call api to retrive data
  // retrive tasks and sort by lastest created time
  const tasks = useTracker(() => TasksCollection.find(
      hideDone ? hideDoneFilter : {}, 
      {sort: {createdAt: -1}}
    ).fetch()
  );

  const pendingTasksCount = useTracker(() => TasksCollection.find(hideDoneFilter).count());
  const doneTasksCount = useTracker(() => TasksCollection.find({isChecked: {$eq: true}}).count());

  // frontend - UI
  return (
    <div>
        <p>You have completed {doneTasksCount} {doneTasksCount > 1? "tasks" : "task"}.</p>
        <p>You still have {pendingTasksCount} {pendingTasksCount > 1? "tasks" : "task"} to do.</p>
        <ul>
            {tasks.map(task => 
                <Task 
                    key={task._id}
                    task={task} 
                />
            )}
        </ul>
    </div>

  )
}
