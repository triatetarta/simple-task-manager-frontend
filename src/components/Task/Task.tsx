import React, { FC, ReactElement } from 'react';
import { Priority } from '../TaskForm/enums/Priority';
import { Status } from '../TaskForm/enums/Status';
import { getPriorityBorder } from './helpers/getPriorityBorder';
import { ITask } from './interfaces/ITask';
import TaskDescription from './TaskDescription';
import TaskFooter from './TaskFooter';
import TaskHeader from './TaskHeader';

const Task: FC<ITask> = ({
  id,
  date,
  description,
  onClick = (e) => console.log(e),
  onStatusChange = (e) => console.log(e),
  priority = Priority.low,
  status = Status.todo,
  title = 'Default Title',
}): ReactElement => {
  return (
    <div
      className={`flex justify-start flex-col rounded-lg border p-4 bg-background-paper mb-8 
      ${getPriorityBorder(priority)}`}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        id={id}
        status={status}
        onClick={onClick}
        onStatusChange={onStatusChange}
      />
    </div>
  );
};

export default Task;
