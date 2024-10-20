import { radioContainer, label, radio, labelText, selected } from './radioInput.css';
import { InputHTMLAttributes } from 'react';

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  category?: string;
  isSelected?: boolean;
}

export default function RadioInput({ text, isSelected, category = '', ...props }: RadioInputProps) {
  return (
    <div className={radioContainer}>
      <input
        type="radio"
        id={category}
        name="field"
        value={category}
        className={radio}
        {...props}
      />
      <label htmlFor={category} className={label}>
        <p className={`${labelText} ${isSelected ? selected : ''}`}>{text}</p>
      </label>
    </div>
  );
}
