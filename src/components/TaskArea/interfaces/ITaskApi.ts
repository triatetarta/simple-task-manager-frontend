import { Priority } from '../../TaskForm/enums/Priority';
import { Status } from '../../TaskForm/enums/Status';

export interface ITaskApi {
  _id: string;
  createdAt: string;
  title: string;
  description: string;
  priority: `${Priority}`;
  status: `${Status}`;
}
