import React, { FC, ReactElement } from 'react';

const TaskCounter: FC = (): ReactElement => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`bg-transparent w-[96px] h-[96px] rounded-full mb-4 border-4 flex justify-center items-center`}
      >
        <h4 className="text-white text-4xl">4</h4>
      </div>
    </div>
  );
};

export default TaskCounter;
