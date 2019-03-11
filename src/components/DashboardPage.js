import React from 'react';
import ToDoList from './ToDoList';

export const DashboardPage = () => (
  <div>
    <li>Summary</li>
    <li>Filtering</li>
    <li>Add To do</li>
    <ToDoList />
  </div>
);

export default DashboardPage;