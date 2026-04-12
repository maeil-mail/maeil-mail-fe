import { Button } from '@maeil/ui';

import {
  archiveLink,
  body,
  buttonGroup,
  container,
  dateBadge,
  description,
  footer,
  highlight,
  intro,
  section,
  title,
} from './serviceEndingNoticeModal.css';

interface ServiceEndingNoticeModalContentProps {
  onClose: () => void;
  onDismissForever: () => void;
}

const ARCHIVE_REPOSITORY_URL = 'https://github.com/maeil-mail/maeil-mail-contents';

export default function ServiceEndingNoticeModalContent({
  onClose,
  onDismissForever,
}: ServiceEndingNoticeModalContentProps) {
  return (
    <div className={container}>
      <div className={intro}>
        <span className={dateBadge}>서비스 종료 안내</span>
        <h2 className={title}>매일메일 운영을 종료합니다.</h2>
        <p className={description}>
          그동안 매일메일을 이용해주신 구독자님께 진심으로 감사드립니다.
        </p>
      </div>

      <div className={body}>
        <section className={section}>
          <p>
            안녕하세요, 구독자님.
            <br />
            매일메일입니다.
          </p>
          <p>
            매일메일은 사이드 프로젝트로 시작해 팀원들이 각자의 본업과 병행하며 운영해왔습니다.
            그러나 시간이 지날수록 안정적인 운영과 지속적인 개선을 이어가기에는 팀원들의
            여건상 한계가 있다고 판단하여, 부득이하게 서비스를 종료하게 되었습니다.
          </p>
          <p>
            짧지 않은 시간 동안 구독자님의 학습에 도움을 드릴 수 있어 기뻤습니다. 보내드린
            콘텐츠들이 조금이나마 도움이 되었기를 바랍니다.
          </p>
        </section>

        <section className={section}>
          <p className={highlight}>서비스 종료 일정 및 관련 안내</p>
          <p>
            종료 이후에는 메일 발송이 중단됩니다.
            <br />
            서비스 종료일: 2026년 4월 17일
          </p>
          <p>
            매일메일에서 작성한 질문지는 서비스 종료일까지 아래 레포지토리를 통해
            공유드리겠습니다.
            <br />
            질문지 아카이브 경로:{' '}
            <a
              className={archiveLink}
              href={ARCHIVE_REPOSITORY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/maeil-mail/maeil-mail-contents
            </a>
          </p>
        </section>

        <section className={section}>
          <p>
            그동안 보내주신 구독자분들의 관심과 응원 덕분에 여기까지 올 수 있었습니다.
            다시 한 번 깊이 감사드립니다. 앞으로도 구독자님의 성장과 여정을 진심으로
            응원하겠습니다.
          </p>
          <p>
            감사합니다.
            <br />
            매일메일 드림
          </p>
        </section>
      </div>

      <div className={footer}>
        <div className={buttonGroup}>
          <Button variant="border" onClick={onDismissForever}>
            다시 보지 않기
          </Button>
          <Button variant="primary" onClick={onClose}>
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
