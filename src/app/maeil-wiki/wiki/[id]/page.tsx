import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import { Wiki } from '@/_components/MaeilWiki/_types/wiki';
import WikiCommentInput from '@/_components/MaeilWiki/Wiki/WikiCommentInput';
import WikiCommentList from '@/_components/MaeilWiki/Wiki/WikiCommentList';
import WikiQuestion from '@/_components/MaeilWiki/Wiki/WikiQuestion';

const MOCK: Wiki = {
  id: 1,
  question: '클로저에 대해 설명해주세요.',
  questionDetail:
    '클로저가 실제로 이용되는 사례를 중심으로 설명해주세요. \n\n **자세히 설명해주세요.**',
  category: 'frontend',
  owner: {
    profileImage: 'https://avatars.githubusercontent.com/u/80797824?s=96&v=4',
    name: 'Parkhanyoung',
    github: 'https://github.com/Parkhanyoung',
  },
  createdAt: '2025-02-12',
  comments: [
    {
      id: 1,
      answer:
        "클로저에 대해 답변드리겠습니다. \n\n ## 클로저의 정의 \n 클로저란 어쩌구저쩌구입니다. 예시 코드를 살펴보겠습니다. 예시와 함께 클로저의 동작을 설명드리면 좋을 것 같습니다.   \n\n**클로저 예시 코드**\n```javascript\nfunction outerFunction(outerVariable) {\n  return function innerFunction(innerVariable) {\n    console.log('Outer Variable: ' + outerVariable);\n    console.log('Inner Variable: ' + innerVariable);\n  };\n}\n\nconst newFunction = outerFunction('outside');\nnewFunction('inside');\n```\n",
      owner: {
        profileImage: 'https://avatars.githubusercontent.com/u/39932141?v=4',
        name: 'le2sky',
        github: 'https://github.com/le2sky',
      },
      createdAt: '2025-02-13',
      likeCount: 2,
    },
    {
      id: 2,
      answer: '클로저에 대해 말씀드리겠습니다. 클로저란 저쩌구입니다.',
      createdAt: '2025-02-13',
      likeCount: 0,
    },
  ],
};

export default function Page() {
  return (
    <PageInnerLayout>
      <WikiQuestion wiki={MOCK} />
      <WikiCommentList comments={MOCK.comments} />
      <WikiCommentInput />
    </PageInnerLayout>
  );
}
