import {
  checkboxContainer,
  customCheckbox,
  hiddenCheckbox,
  checkIcon,
  selectText,
} from './checkboxInput.css';
import CheckIcon from '@/_assets/images/check.svg';
import { myStyle } from '@/_styles/vars.css';
import { InputHTMLAttributes, ReactNode } from 'react';

interface CheckboxInputProps extends InputHTMLAttributes<HTMLInputElement> {
  text: ReactNode;
  isSelected: boolean;
}

export default function CheckboxInput({ text, isSelected, ...props }: CheckboxInputProps) {
  return (
    <div className={checkboxContainer}>
      <input
        type="checkbox"
        id={String(text)}
        className={hiddenCheckbox}
        checked={isSelected}
        {...props}
      />
      <label htmlFor={String(text)} className={customCheckbox}>
        <CheckIcon className={`${checkIcon} ${myStyle}`} />
        <span className={`${selectText} ${myStyle}`}>{text}</span>
      </label>
    </div>
  );
}
