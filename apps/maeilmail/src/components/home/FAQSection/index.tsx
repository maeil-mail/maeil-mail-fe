import * as React from 'react';
import {
  downArrow,
  toggleSection,
  faqContainer,
  faqTitle,
  faqList,
  faqHeader,
  faqButton,
  questionNumber,
  faqContent,
  downArrowIcon,
  wikiCard,
  githubCard,
  cardTitle,
  cardDescription,
  mailCharacter,
  githubCharacter
} from './faqSection.css';
import DownArrow from '@/assets/images/FAQSection/downArrow.svg';
import MailCharacter from '@/assets/images/FAQSection/mail-character.svg';
import GithubCharacter from '@/assets/images/FAQSection/github-character.svg';

export interface FAQSectionProps {}

const ACCORDION_ITEMS = [
  {
    title: '매일메일은 무료 서비스인가요?',
    content:
      '네, 무료 서비스입니다. 양질의 기술 정보를 함께 나누기 위한 취지입니다. 페이지 하단 링크를 통해 GitHub 스타를 눌러주시면, 서비스 유지에 큰 도움이 됩니다! 🙂',
  },
  {
    title: '매일메일의 컨텐츠는 누가 작성하나요?',
    content:
      '개발자 팀원들이 직접 질문을 선택하고 답변을 작성하고 있습니다. AI는 글의 구조를 다듬는 과정에서 부분적으로만 활용하고 있습니다.',
  },
  {
    title: '구독을 했는데 메일이 안 와요!',
    content:
      '메일이 간혹 스팸으로 분류되는 경우가 있습니다. 스팸 메일함과 소셜 탭에도 없다면, team.maeilmail@gmail.com로 문의 주시면 즉시 처리해 드리겠습니다.',
  },
  {
    title: '구독해지는 어떻게 하나요?',
    content: '메일 하단에 위치한 구독 취소 버튼을 통해 취소할 수 있습니다.',
  },
];

export default function FAQSection(props: FAQSectionProps) {
  const [openIndex, setOpenIndex] = React.useState<number>();

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? undefined : index));
  };

  return (
    <div className={faqContainer}>
      <div className={faqTitle}>자주 묻는 질문</div>
      <ol className={faqList}>
        {ACCORDION_ITEMS.map((item, index) => (
          <li
            key={index}
            className={toggleSection({ isOpen: openIndex === index })}
            onClick={() => toggleAccordion(index)}
          >
            <div className={faqHeader}>
              <button className={faqButton}>
                <span className={questionNumber}>Q</span>
                {item.title}
              </button>
              <DownArrow
                className={`${downArrow({ isOpen: openIndex === index })} ${downArrowIcon}`}
              />
            </div>
            <p className={faqContent}>{item.content}</p>
          </li>
        ))}
      </ol>
      <a href="https://wiki.maeil-mail.kr" rel="noopener noreferrer">
        <div className={wikiCard}>
          <div>
            <div className={cardTitle}>
              매일위키에서 스스로 질문을 작성해보세요
            </div>
            <p className={cardDescription}>
              매일위키에서 기술 면접에 관한 질문들을 공유하거나 기술 면접 문제집을 만들어볼 수
              있어요
            </p>
          </div>
          <MailCharacter className={mailCharacter} />
        </div>
      </a>
      <a href="https://github.com/maeil-mail" rel="noopener noreferrer">
        <div className={githubCard}>
          <div>
            <div className={cardTitle}>
              스타를 눌러주시면 서비스 운영에 큰 힘이 돼요
            </div>
            <p className={cardDescription}>
              매일메일을 잘 이용하고 계신다면 GitHub 스타를 눌러주세요!
            </p>
          </div>
          <GithubCharacter className={githubCharacter} />
        </div>
      </a>
    </div>
  );
}
