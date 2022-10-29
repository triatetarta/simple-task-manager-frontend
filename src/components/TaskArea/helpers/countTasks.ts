import { TaskCounterStatusType } from '../../TaskCounter/interfaces/ITaskCounter';
import { ITaskApi } from '../interfaces/ITaskApi';

export const countTasks = (
  tasks: ITaskApi[],
  status: TaskCounterStatusType,
): number => {
  if (!tasks.length) {
    return 0;
  }

  const totalTasks = tasks.filter((task) => {
    return task.status === status;
  });

  return totalTasks.length;
};
