import React, { FC, ReactElement } from 'react';
import Profile from '../Profile/Profile';
import TaskForm from '../TaskForm/TaskForm';

const Sidebar: FC = (): ReactElement => {
  return (
    <aside className="w-4/12 bg-background-paper h-full flex flex-col justify-center">
      <Profile name="Dimitris" />
      <TaskForm />
    </aside>
  );
};

export default Sidebar;
