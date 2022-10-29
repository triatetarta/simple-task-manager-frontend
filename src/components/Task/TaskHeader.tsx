import React, { FC, ReactElement } from 'react';
import { ITaskHeader } from './interfaces/ITaskHeader';
import { format } from 'date-fns';

const TaskHeader: FC<ITaskHeader> = ({
  date = new Date(),
  title = 'Testing',
}): ReactElement => {
  return (
    <div className="flex w-full justify-between items-center mb-6">
      <div>
        <h6 className="text-3xl font-medium">{title}</h6>
      </div>
      <div className="border border-gray-600 rounded-full px-2 py-1">
        <p className="text-xs">{format(date, 'PPP')}</p>
      </div>
    </div>
  );
};

export default TaskHeader;
