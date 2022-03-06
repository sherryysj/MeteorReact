import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { TaskForm } from './TaskForm.js';
import { Tasks } from './Tasks';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Info/>
    <Tasks />
    <TaskForm />
  </div>
);
