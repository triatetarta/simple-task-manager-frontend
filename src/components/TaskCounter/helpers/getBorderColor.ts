import { Status } from '../../TaskForm/enums/Status';
import { TaskCounterStatusType } from '../interfaces/ITaskCounter';

export const getBorderColor = (status: TaskCounterStatusType): string => {
  switch (status) {
    case Status.todo:
      return 'border-alert-light';
    case Status.inProgress:
      return 'border-warning-light';
    case Status.completed:
      return 'border-success-light';
  }
};
