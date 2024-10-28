import Nav from "@/_components/common/Nav/Nav";
import { subscribeButton } from "./homeNav.css";

interface NavProps {
  onSubscribe: () => void;
}

export default function HomeNav({ onSubscribe }: NavProps) {
  return (
    <Nav
      RightSide={
        <button onClick={onSubscribe} className={subscribeButton}>
          무료 구독하기
        </button>
      }
      position="sticky"
    />
  );
}
