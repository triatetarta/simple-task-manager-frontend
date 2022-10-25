import React, { FC, ReactElement } from 'react';
import { ISelectField } from './interfaces/ISelectField';

const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
  const { label, value, onChange, items, name } = props;

  return (
    <div className="flex-1">
      <label className="text-sm" htmlFor={name}>
        {label}
      </label>
      <select
        className="w-full bg-transparent border-2 rounded-md border-nice-gray hover:border-white/80 transition duration-100 ease-out p-2 uppercase"
        name="status"
        value={value}
        onChange={onChange}
      >
        {items?.map((item, index) => {
          return (
            <option key={index} className="text-black" value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default TaskSelectField;
