import React, { useState } from 'react';
import { Header } from './Header.js';
import { TaskFilter } from './TaskFilter.js';
import { TaskForm } from './TaskForm.js';
import { Tasks } from './Tasks/Tasks.js';

export const App = () => {

  const [hideDone, setHideDone] = useState(false);

  return (
    <div className="app">
      <Header />
      <TaskForm />
      <TaskFilter 
        hideDone={hideDone} 
        setHideDone={setHideDone}
      />
      <Tasks hideDone={hideDone}/> 
    </div>
  );

}
