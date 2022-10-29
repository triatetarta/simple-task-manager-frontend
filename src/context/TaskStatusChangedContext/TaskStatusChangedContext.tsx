import React, {
  createContext,
  FC,
  ReactElement,
  PropsWithChildren,
  useState,
} from 'react';

export const TaskStatusChangedContext = createContext({
  updated: false,
  toggle: () => {},
});

export const TaskStatusChangedContextProvider: FC<PropsWithChildren> = (
  props,
): ReactElement => {
  const [updated, setUpdated] = useState(false);

  const toggleHandler = () => {
    updated ? setUpdated(false) : setUpdated(true);
  };

  return (
    <TaskStatusChangedContext.Provider
      value={{ toggle: toggleHandler, updated }}
    >
      {props.children}
    </TaskStatusChangedContext.Provider>
  );
};
