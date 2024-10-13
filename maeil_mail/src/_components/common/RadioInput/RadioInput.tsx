import { radioContainer, customRadio, hiddenRadio, checkIcon, selectText } from './radioInput.css';
import CheckIcon from '@/_assets/images/check.svg';
import { myStyle } from '@/_styles/vars.css';
import { InputHTMLAttributes } from 'react';

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  category?: string;
  text: string;
}

export default function RadioInput({ category = '', text, ...props }: RadioInputProps) {
  return (
    <div className={radioContainer}>
      <input
        type="radio"
        id={category}
        name="field"
        value={category}
        className={hiddenRadio}
        {...props}
      />
      <label htmlFor={`${category}`} className={customRadio}>
        <CheckIcon className={`${checkIcon} ${myStyle}`} />
        <span className={`${selectText} ${myStyle}`}>{text}</span>
      </label>
    </div>
  );
}
