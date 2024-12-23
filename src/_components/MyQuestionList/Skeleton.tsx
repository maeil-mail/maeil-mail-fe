import { myQuestionItemSkeleton } from './MyQuestionList.css';

export default function MyQuestionListSkeleton() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.7rem', paddingBottom: '7rem' }}>
      {Array.from({ length: 8 }, (_, index) => {
        return <div key={index} className={myQuestionItemSkeleton} />;
      })}
    </div>
  );
}
