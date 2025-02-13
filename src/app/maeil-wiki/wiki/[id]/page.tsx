import Button from '@/_components/common/Button/Button';
import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import { WIKI_CATEGORY_KO } from '@/_components/MaeilWiki/_constants/wikiCategory';

const MOCK = {
  id: 1,
  question: '클로저에 대해 설명해주세요.',
  questionDetail: '클로저가 실제로 이용되는 사례를 중심으로 설명해주세요.',
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
      answer: '클로저에 대해 답변드리겠습니다. 클로저란 어쩌구저쩌구입니다.',
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
      owner: {
        profileImage: 'https://avatars.githubusercontent.com/u/80797824?s=96&v=4',
        name: 'Parkhanyoung',
        github: 'https://github.com/Parkhanyoung',
      },
      createdAt: '2025-02-13',
      likeCount: 0,
    },
  ],
} as const;

export default function Page() {
  return (
    <PageInnerLayout>
      <header
        style={{
          border: '1px solid #c5c5c5',
          borderRadius: '0.6rem',
          padding: '2rem 2rem 3rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
        }}
      >
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a
            href={MOCK.owner.github}
            style={{ width: 'fit-content', display: 'block' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{ display: 'flex', gap: '1rem', width: 'fit-content', alignItems: 'center' }}
            >
              <img style={{ width: '3.2rem', borderRadius: 999 }} src={MOCK.owner.profileImage} />
              <p style={{ width: 'fit-content', fontSize: '1.3rem' }}>{MOCK.owner.name}</p>
            </div>
          </a>
          <p style={{ width: 'fit-content', fontSize: '1.3rem', color: '#59636e' }}>
            {MOCK.createdAt}
          </p>
        </div>
        <div>
          <h1 style={{ fontSize: '2.3rem', color: '#2b2b2b' }}>Q. {MOCK.question}</h1>
          <p style={{ color: '#59636e', marginTop: '1rem' }}>
            [분야: {WIKI_CATEGORY_KO[MOCK.category]}]
          </p>
        </div>
        {MOCK.questionDetail && <div>{MOCK.questionDetail}</div>}
      </header>
      <section style={{ marginTop: '5rem', fontSize: '1.6rem' }}>
        {MOCK.comments.length > 0 ? (
          <>
            <h2 style={{ marginBottom: '2rem' }}>답변 목록</h2>
            <div style={{ gap: '1rem', display: 'flex', flexDirection: 'column' }}>
              {MOCK.comments.map(({ id, answer, likeCount, owner, createdAt }) => (
                <div
                  key={id}
                  style={{
                    border: '1px solid #c5c5c5',
                    padding: '2rem',
                    borderRadius: '0.6rem',
                    display: 'flex',
                    gap: '1.5rem',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <a
                      href={owner.github}
                      style={{ width: 'fit-content' }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        style={{
                          display: 'flex',
                          gap: '1rem',
                          width: 'fit-content',
                          alignItems: 'center',
                        }}
                      >
                        <img
                          style={{ width: '3.2rem', borderRadius: 999 }}
                          src={owner.profileImage}
                        />
                        <p style={{ width: 'fit-content' }}>{owner.name}</p>
                      </div>
                    </a>
                    <span style={{ fontSize: '1.3rem', color: '#59636e' }}>{createdAt}</span>
                  </div>
                  <p>{answer}</p>
                  <button style={{ width: 'fit-content' }}>❤️ {likeCount > 0 && likeCount}</button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>💡 답변이 아직 없습니다. 답변을 달아 지식을 공유해주세요.</div>
        )}
      </section>
      <section
        style={{
          marginTop: '5rem',
          fontSize: '1.6rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <h2>답변 작성</h2>
        <textarea />
        <Button variant="primary" style={{ width: 'fit-content', padding: '1.2rem 5rem' }}>
          작성
        </Button>
      </section>
    </PageInnerLayout>
  );
}
