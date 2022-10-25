import React, { FC, ReactElement, useState } from 'react';
import { Priority } from './enums/Priority';
import { Status } from './enums/Status';
import TaskDescriptionField from './TaskDescriptionField';
import TaskSelectField from './TaskSelectField';
import TaskTitleField from './TaskTitleField';

const TaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  return (
    <div className="mt-10 px-6 my-8 w-full">
      <h2 className="font-bold text-lg mb-4">Create A Task</h2>

      <form className="w-full flex flex-col space-y-4">
        <TaskTitleField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TaskDescriptionField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="w-full flex space-x-4">
          <TaskSelectField
            label="Status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
              {
                value: Status.completed,
                label: Status.completed.toUpperCase(),
              },
            ]}
          />

          <TaskSelectField
            label="Priority"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as string)}
            items={[
              {
                value: Priority.low,
                label: Priority.low.toUpperCase(),
              },
              {
                value: Priority.normal,
                label: Priority.normal.toUpperCase(),
              },
              {
                value: Priority.high,
                label: Priority.high.toUpperCase(),
              },
            ]}
          />
        </div>

        <button
          disabled={!title || !description || !status || !priority}
          className={`${
            !title || !description || !status || !priority
              ? 'bg-nice-gray text-white/40'
              : 'bg-primary-main text-white'
          }  font-bold py-3 rounded-md`}
        >
          CREATE TASK
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
