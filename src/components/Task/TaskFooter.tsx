import React, { FC, ReactElement, useState } from 'react';
import { Status } from '../TaskForm/enums/Status';
import { ITaskFooter } from './interfaces/ITaskFooter';

const TaskFooter: FC<ITaskFooter> = ({
  id,
  onClick = (e) => console.log(e),
  onStatusChange = (e) => console.log(e),
  status,
}): ReactElement => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex justify-between items-center mt-12">
      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        <div className="flex">
          <label className="inline-flex relative items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={status === Status.inProgress}
              readOnly
              onChange={(e) => onStatusChange(e, id)}
            />
            <div
              onClick={() => {
                setEnabled(!enabled);
              }}
              className="w-11 h-6 bg-gray-500 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-warning-light"
            ></div>
            <span className="ml-3 text-base font-medium text-white">
              In Progress
            </span>
          </label>
        </div>
      </div>

      <button
        onClick={(e) => onClick(e, id)}
        className="bg-success-light font-bold text-sm py-1 px-3 rounded-lg hover:bg-success-light/80 transition duration-150 ease-out"
      >
        MARK COMPLETE
      </button>
    </div>
  );
};

export default TaskFooter;
