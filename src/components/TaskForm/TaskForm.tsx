import React, {
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
  MouseEvent,
} from 'react';
import { TaskStatusChangedContext } from '../../context';
import { Priority } from './enums/Priority';
import { Status } from './enums/Status';
import { useMutation } from '@tanstack/react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import TaskDescriptionField from './TaskDescriptionField';
import { ICreateTask } from '../TaskArea/interfaces/ICreateTask';
import TaskSelectField from './TaskSelectField';
import TaskTitleField from './TaskTitleField';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const TaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const tasksUpdatedContext = useContext(TaskStatusChangedContext);

  const createTaskMutation = useMutation((data: ICreateTask) =>
    sendApiRequest('http://localhost:8888/api/tasks', 'POST', data),
  );

  const createTaskHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!title || !description) return;

    const task: ICreateTask = {
      title,
      description,
      status,
      priority,
    };

    createTaskMutation.mutate(task);
  };

  useEffect(() => {
    if (createTaskMutation.isSuccess) {
      tasksUpdatedContext.toggle();
      setShowSuccess(true);

      setTitle('');
      setDescription('');
      setStatus(Status.todo);
      setPriority(Priority.normal);
    }

    const successTimeout = setTimeout(() => {
      setShowSuccess(false);
    }, 7000);

    return () => clearTimeout(successTimeout);
  }, [createTaskMutation.isSuccess]);

  return (
    <div className="mt-10 px-6 my-8 w-full">
      {showSuccess && (
        <div className="flex bg-success-bg p-3 rounded-md mb-8">
          <CheckCircleIcon className="h-7 w-7 text-success-deep" />
          <div className="text-success-text ml-3 flex flex-col">
            <span className="text-lg font-medium mb-2">Success</span>
            <span className="text-sm">
              The task has been successfully created
            </span>
          </div>
        </div>
      )}

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
          type="submit"
          onClick={createTaskHandler}
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
