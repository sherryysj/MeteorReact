import React, { useState } from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { TaskFilter } from './TaskFilter.js';
import { TaskForm } from './TaskForm.js';
import { Tasks } from './Tasks/Tasks.js';

export const App = () => {

  const [hideDone, setHideDone] = useState(false);

  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <Hello/>
      <Info/>
      <TaskForm />
      <TaskFilter 
        hideDone={hideDone} 
        setHideDone={setHideDone}
      />
      <Tasks hideDone={hideDone}/> 
    </div>
  );

}
