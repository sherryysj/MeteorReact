import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { TaskForm } from './TaskForm.js';
import { Task } from './Task';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '../api/collections';

export const App = () => {

  // retrive tasks and sort by lastest created time
  const tasks = useTracker(() => TasksCollection.find({},{sort: {createdAt: -1}}).fetch());

  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <Hello/>
      <Info/>
      <TaskForm />
      
      {/* tasks list */}
      <ul>
        {tasks.map(task => 
          <Task 
            key={task._id}
            task={task} 
          />
        )}
      </ul>
    </div>
  );

}
