import { successText, container } from './successContent.css';

export default function SuccessContent() {
  return (
    <div className={container}>
      <span className={successText}>
        신청이 완료 됐어요! <br /> <br /> 앞으로 매일 오전 7시에 <br />
        면접 질문을 보내드릴게요!
      </span>
    </div>
  );
}
