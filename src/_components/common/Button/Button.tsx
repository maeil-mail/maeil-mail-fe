import { ButtonHTMLAttributes } from "react";
import { buttonStyle, baseButtonStyle, disabledButton } from "./button.css";
import type { PropsWithChildren } from "react";
import { myStyle } from "@/_styles/vars.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof buttonStyle;
  isPending?: boolean;
}

export default function Button({
  variant,
  children,
  className,
  isPending = false,
  disabled,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const classNames = `${buttonStyle[variant]} ${myStyle} ${className ?? ""} ${baseButtonStyle} ${
    disabled || isPending ? disabledButton : ""
  }`;

  return (
    <button {...props} className={classNames} disabled={disabled || isPending}>
      {isPending ? <LoadingSpinner /> : children}
    </button>
  );
}
