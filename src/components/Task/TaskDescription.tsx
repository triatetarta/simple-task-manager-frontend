import React, { FC, ReactElement } from 'react';
import { ITaskDescription } from './interfaces/ITaskDescription';

const TaskDescription: FC<ITaskDescription> = ({
  description,
}): ReactElement => {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
};

export default TaskDescription;
