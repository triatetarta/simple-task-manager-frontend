import React, { FC, ReactElement } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import TaskArea from '../../components/TaskArea/TaskArea';

const Dashboard: FC = (): ReactElement => {
  return (
    <main className="h-screen flex flex-wrap w-full">
      <TaskArea />
      <Sidebar />
    </main>
  );
};

export default Dashboard;
