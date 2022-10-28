import React, { FC, ReactElement } from 'react';
import { Status } from '../TaskForm/enums/Status';
import { getBorderColor } from './helpers/getBorderColor';
import { getLabel } from './helpers/getLabel';
import { ITaskCounter } from './interfaces/ITaskCounter';

const TaskCounter: FC<ITaskCounter> = ({
  count = 0,
  status = Status.todo,
}): ReactElement => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`bg-transparent w-[96px] h-[96px] rounded-full mb-4 border-4 flex justify-center items-center ${getBorderColor(
          status,
        )}`}
      >
        <h4 className="text-white text-4xl">{count}</h4>
      </div>
      <h5 className="text-xl font-bold">{getLabel(status)}</h5>
    </div>
  );
};

export default TaskCounter;
