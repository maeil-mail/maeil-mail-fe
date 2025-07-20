import * as React from 'react';
import { downArrow, toggleSection } from './faqSection.css';
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
    <div style={{ padding: '15rem 0', width: '100%', background: '#F5F7F8' }}>
      <div style={{ fontSize: '3.7rem', fontWeight: 600, textAlign: 'center' }}>자주 묻는 질문</div>
      <ol
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.6rem',
          width: '100%',
          maxWidth: '80rem',
          margin: '8rem auto 22rem auto',
        }}
      >
        {ACCORDION_ITEMS.map((item, index) => (
          <li
            key={index}
            className={toggleSection({ isOpen: openIndex === index })}
            onClick={() => toggleAccordion(index)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <button
                style={{
                  textAlign: 'left',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    backgroundColor: '#EDEDED',
                    color: '#444444',
                    textAlign: 'center',
                    lineHeight: '4rem',
                    marginRight: '1.5rem',
                    fontSize: '2rem',
                    fontWeight: 550,
                  }}
                >
                  Q
                </span>
                {item.title}
              </button>
              <DownArrow
                className={downArrow({ isOpen: openIndex === index })}
                style={{ width: '1.5rem' }}
              />
            </div>
            <p style={{ fontSize: '1.6rem', fontWeight: 450, lineHeight: 1.5 }}>{item.content}</p>
          </li>
        ))}
      </ol>
      <a href="https://wiki.maeil-mail.kr" rel="noopener noreferrer">
        <div
          style={{
            background: '#00A86B',
            color: '#fff',
            maxWidth: '100rem',
            margin: '0 auto',
            padding: '7rem 6rem',
            borderRadius: '1.6rem',
            cursor: 'pointer',
            marginBottom: '2.5rem',
            position: 'relative',
          }}
        >
          <div>
            <div style={{ fontSize: '3rem', fontWeight: 600, marginBottom: '2rem' }}>
              매일위키에서 스스로 질문을 작성해보세요
            </div>
            <p style={{ fontSize: '1.6rem', fontWeight: 400, lineHeight: 1.5 }}>
              매일위키에서 기술 면접에 관한 질문들을 공유하거나 기술 면접 문제집을 만들어볼 수
              있어요
            </p>
          </div>
          <MailCharacter
            style={{ width: '14rem', position: 'absolute', bottom: '0rem', right: '5rem' }}
          />
        </div>
      </a>
      <a href="https://github.com/maeil-mail" rel="noopener noreferrer">
        <div
          style={{
            background: '#464646',
            color: '#fff',
            maxWidth: '100rem',
            margin: '0 auto',
            padding: '7rem 6rem',
            borderRadius: '1.6rem',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <div>
            <div style={{ fontSize: '3rem', fontWeight: 600, marginBottom: '2rem' }}>
              스타를 눌러주시면 서비스 운영에 큰 힘이 돼요
            </div>
            <p style={{ fontSize: '1.6rem', fontWeight: 400, lineHeight: 1.5 }}>
              매일메일을 잘 이용하고 계신다면 GitHub 스타를 눌러주세요!
            </p>
          </div>
          <GithubCharacter
            style={{ width: '22rem', position: 'absolute', bottom: '0rem', right: '1rem' }}
          />
        </div>
      </a>
    </div>
  );
}
