import React, { useState } from 'react';
import { TaskFilter } from './TaskFilter.js';
import { TaskForm } from './TaskForm.js';
import { Tasks } from './Tasks/Tasks.js';

export const App = () => {

  const [hideDone, setHideDone] = useState(false);

  return (
    <div>
      <TaskForm />
      <TaskFilter 
        hideDone={hideDone} 
        setHideDone={setHideDone}
      />
      <Tasks hideDone={hideDone}/> 
    </div>
  );

}
