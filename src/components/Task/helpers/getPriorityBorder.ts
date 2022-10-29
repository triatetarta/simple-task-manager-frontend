import { Priority } from '../../TaskForm/enums/Priority';

export const getPriorityBorder = (priority: string): string => {
  switch (priority) {
    case Priority.normal:
      return 'border-nice-gray';
    case Priority.low:
      return 'border-info-light';
    case Priority.high:
      return 'border-alert-light';
    default:
      return 'border-nice-gray';
  }
};
