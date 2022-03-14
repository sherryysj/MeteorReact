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

  const logout =() => Meteor.logout();

  return (
    <div className="app">
      <Header />
      { user ? (
        <>
          <div className="userControl">
            <p>{user.username}</p>
            <p onClick={logout} className="logout">Log out</p>
          </div>
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
