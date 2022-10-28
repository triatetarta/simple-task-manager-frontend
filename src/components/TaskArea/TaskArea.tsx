import React, { FC, ReactElement } from 'react';
import { format } from 'date-fns';
import TaskCounter from '../TaskCounter/TaskCounter';
import { Status } from '../TaskForm/enums/Status';

const TaskArea: FC = (): ReactElement => {
  return (
    <div className="w-8/12">
      <div className="py-6 px-4">
        <h2 className="text-center text-2xl font-bold mb-16">
          Tasks Status on {format(new Date(), 'PPPP')}
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-around items-center container mx-auto max-w-lg">
          <TaskCounter count={2} status={Status.todo} />
          <TaskCounter count={2} status={Status.todo} />
          <TaskCounter count={2} status={Status.todo} />
        </div>
      </div>
      <div className="flex flex-col">{/* TASK */}</div>
    </div>
  );
};

export default TaskArea;
