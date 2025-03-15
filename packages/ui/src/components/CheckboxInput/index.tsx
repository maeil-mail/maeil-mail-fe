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
  isSelected: boolean;
  id?: string;
  caption?: string;
}

export function CheckboxInput({
  text,
  isSelected,
  id,
  caption: captionText,
  ...props
}: CheckboxInputProps) {
  const inputId = id || String(text);

  return (
    <div className={checkboxContainer}>
      <input type="checkbox" id={inputId} className={checkbox} checked={isSelected} {...props} />
      <div>
        <label htmlFor={inputId}>
          <span className={`${selectText} ${isSelected ? primaryColor : ''}`}>{text}</span>
        </label>
        {captionText && <p className={caption}>{captionText}</p>}
      </div>
    </div>
  );
}
