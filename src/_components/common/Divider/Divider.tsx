import { dividerStyle } from "./divider.css";

interface DividerProps {
  variant: keyof typeof dividerStyle;
}

export default function Divider({ variant }: DividerProps) {
  return <div className={dividerStyle[variant]}></div>;
}
