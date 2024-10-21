import { checkboxContainer, selectText, checkbox, primaryColor } from "./checkboxInput.css";
import { myStyle } from "@/_styles/vars.css";
import { InputHTMLAttributes, ReactNode } from "react";

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
        className={checkbox}
        checked={isSelected}
        {...props}
      />
      <label htmlFor={String(text)}>
        <span className={`${selectText} ${isSelected ? primaryColor : ""}`}>{text}</span>
      </label>
    </div>
  );
}
