import { ChangeEvent } from 'react';
import { IDisabled } from './IDisabled';

export interface ISelectItems {
  value?: string;
  label?: string;
}

export interface ISelectField extends IDisabled {
  name?: string;
  label?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  items?: ISelectItems[];
}
