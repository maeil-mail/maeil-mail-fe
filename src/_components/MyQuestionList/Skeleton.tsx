import { myQuestionItemSkeleton, myQuestionListSkeletonContainer } from './MyQuestionList.css';

export default function MyQuestionListSkeleton() {
  return (
    <div className={myQuestionListSkeletonContainer}>
      {Array.from({ length: 8 }, (_, index) => {
        return <div key={index} className={myQuestionItemSkeleton} />;
      })}
    </div>
  );
}
