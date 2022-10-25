import { ChangeEvent } from 'react';
import { IValue } from './IValue';
import { IDisabled } from './IDisabled';

export interface ITextField extends IValue, IDisabled {
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
