import React, { FC, ReactElement } from 'react';
import { ITextField } from './interfaces/ITextField';

const TaskDescriptionField: FC<ITextField> = ({
  value,
  onChange,
}): ReactElement => {
  return (
    <textarea
      name="description"
      id="description"
      placeholder="Task Description"
      className="bg-transparent border-2 rounded-md border-nice-gray hover:border-white/80 transition duration-100 ease-out p-2"
      value={value}
      onChange={onChange}
    />
  );
};

export default TaskDescriptionField;
