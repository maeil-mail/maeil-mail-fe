import { titleText } from "./questionDetail.css";

interface DetailTitle {
  title: string;
}

export default function DetailTitle({ title }: DetailTitle) {
  return <h2 className={titleText}>{title}</h2>;
}
