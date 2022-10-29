import React, { FC, ReactElement, useContext, useEffect } from 'react';
import { format } from 'date-fns';
import TaskCounter from '../TaskCounter/TaskCounter';
import { Status } from '../TaskForm/enums/Status';
import Task from '../Task/Task';
import { useQuery, useMutation } from '@tanstack/react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ITaskApi } from './interfaces/ITaskApi';
import { TaskStatusChangedContext } from '../../context';
import { IUpdateTask } from '../TaskForm/interfaces/IUpdateTask';
import { countTasks } from './helpers/countTasks';
import { BarLoader } from 'react-spinners';
import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

const TaskArea: FC = (): ReactElement => {
  const tasksUpdatedContext = useContext(TaskStatusChangedContext);

  const { error, isLoading, data, refetch } = useQuery(['tasks'], async () => {
    return await sendApiRequest<ITaskApi[]>(
      'http://localhost:8888/api/tasks',
      'GET',
    );
  });

  const updateTaskMutation = useMutation(({ id, status }: IUpdateTask) =>
    sendApiRequest(`http://localhost:8888/api/tasks/${id}`, 'PATCH', {
      status,
    }),
  );

  useEffect(() => {
    refetch();
  }, [tasksUpdatedContext.updated]);

  useEffect(() => {
    if (updateTaskMutation.isSuccess) {
      tasksUpdatedContext.toggle();
    }
  }, [updateTaskMutation.isSuccess]);

  const onStatusChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    updateTaskMutation.mutate({
      id,
      status: e.target.checked ? Status.inProgress : Status.todo,
    });
  };

  const markCompleteHandler = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    updateTaskMutation.mutate({
      id,
      status: Status.completed,
    });
  };

  return (
    <div className="w-8/12">
      <div className="py-6 px-4">
        <h2 className="text-center text-2xl font-bold mb-16">
          Tasks Status on {format(new Date(), 'PPPP')}
        </h2>
      </div>
      <div className="flex justify-center mb-16">
        <div className="flex justify-around items-center container mx-auto max-w-lg">
          <TaskCounter
            count={data ? countTasks(data, Status.todo) : undefined}
            status={Status.todo}
          />
          <TaskCounter
            count={data ? countTasks(data, Status.inProgress) : undefined}
            status={Status.inProgress}
          />
          <TaskCounter
            count={data ? countTasks(data, Status.completed) : undefined}
            status={Status.completed}
          />
        </div>
      </div>
      <div className="flex flex-col mx-auto w-2/3 max-w-md ">
        <>
          {error && (
            <div className="bg-error-bg p-3 flex items-center rounded-md">
              <ExclamationCircleIcon className="h-6 w-6 text-alert-dark" />
              <span className="text-error-text ml-3">
                There was an error fetching your tasks
              </span>
            </div>
          )}

          {!error && !data?.length && (
            <div className="bg-warning-bg p-3 flex rounded-md">
              <ExclamationTriangleIcon className="h-6 w-6 text-warning-deep" />
              <span className="text-warning-text text-sm ml-3">
                You do not have any tasks created yet. Start by creating some
                tasks
              </span>
            </div>
          )}
        </>

        {isLoading ? (
          <BarLoader loading={isLoading} width="100%" color="#a855f6" />
        ) : (
          <>
            {data?.map((task) => {
              if (task.status === Status.completed) return;

              return (
                <Task
                  key={task._id}
                  id={task._id}
                  description={task.description}
                  title={task.title}
                  priority={task.priority}
                  status={task.status}
                  date={new Date(task.createdAt)}
                  onStatusChange={onStatusChangeHandler}
                  onClick={markCompleteHandler}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default TaskArea;
