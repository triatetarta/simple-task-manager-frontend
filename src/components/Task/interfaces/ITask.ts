import { ITaskHeader } from './ITaskHeader';
import { ITaskDescription } from './ITaskDescription';
import { ITaskFooter } from './ITaskFooter';

export interface ITask extends ITaskFooter, ITaskHeader, ITaskDescription {
  priority?: string;
}
