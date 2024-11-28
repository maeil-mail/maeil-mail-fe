import {
  checkboxContainer,
  selectText,
  checkbox,
  primaryColor,
  caption,
} from './checkboxInput.css';
import { InputHTMLAttributes, ReactNode } from 'react';

interface CheckboxInputProps extends InputHTMLAttributes<HTMLInputElement> {
  text: ReactNode;
  caption?: string;
  isSelected: boolean;
}

export default function CheckboxInput({
  text,
  caption: captionText,
  isSelected,
  ...props
}: CheckboxInputProps) {
  return (
    <div className={checkboxContainer}>
      <input
        type="checkbox"
        id={String(text)}
        className={checkbox}
        checked={isSelected}
        {...props}
      />
      <div>
        <label htmlFor={String(text)}>
          <span className={`${selectText} ${isSelected ? primaryColor : ''}`}>{text}</span>
        </label>
        {captionText && <p className={caption}>{captionText}</p>}
      </div>
    </div>
  );
}
