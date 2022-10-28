import { Status } from '../../TaskForm/enums/Status';
import { TaskCounterStatusType } from '../interfaces/ITaskCounter';

export const getLabel = (status: TaskCounterStatusType): string => {
  switch (status) {
    case Status.todo:
      return `Todos`;
    case Status.inProgress:
      return 'In Progress';
    case Status.completed:
      return 'Completed';
  }
};
