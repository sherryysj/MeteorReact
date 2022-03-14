import React, { useState } from 'react';
import { Header } from './Header.js';
import { LoginForm } from './LoginForm.js';
import { TaskFilter } from './TaskFilter.js';
import { TaskForm } from './TaskForm.js';
import { Tasks } from './Tasks/Tasks.js';
import { useTracker } from 'meteor/react-meteor-data';

export const App = () => {

  const user = useTracker(()=> Meteor.user());

  const [hideDone, setHideDone] = useState(false);

  return (
    <div className="app">
      <Header />
      { user ? (
        <>
          <TaskForm user={user}/>
          <TaskFilter 
            hideDone={hideDone} 
            setHideDone={setHideDone}
          />
          <Tasks 
            hideDone={hideDone}
            user = {user}
          /> 
        </>
      ) : (
        <LoginForm />
      )}

    </div>
  );

}
