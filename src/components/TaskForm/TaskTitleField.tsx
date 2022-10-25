import React, { FC, ReactElement } from 'react';
import { ITextField } from './interfaces/ITextField';

const TaskTitleField: FC<ITextField> = (props): ReactElement => {
  const { onChange, value } = props;

  return (
    <input
      className="bg-transparent border-2 rounded-md border-nice-gray hover:border-white/80 transition duration-100 ease-out p-2"
      type="text"
      placeholder="Task Title"
      value={value}
      onChange={onChange}
    />
  );
};

export default TaskTitleField;
