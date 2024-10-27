"use client";

import { buttonSection, container, content, developerEmoji, keepAll, title } from "./error.css";
import Txt from "@/_components/common/Txt/Txt";
import Button from "@/_components/common/Button/Button";
import { useRouter } from "next/navigation";
import PAGE_ROUTES from "@/_constants/pageRoutes";
import { myStyle } from "@/_styles/vars.css";
import { FE_GITHUB_ISSUE_URL, FEEDBACK_GOOGLE_FORM_URL } from "@/_constants/externalUrl";
import DeveloperEmoji from "@/_assets/images/developerEmoji.svg";

export default function Error({}) {
  const router = useRouter();

  const handleFeedbackButton = () => {
    window.open(FEEDBACK_GOOGLE_FORM_URL);
  };

  const navigateToHome = () => {
    router.push(PAGE_ROUTES.main);
  };

  return (
    <div className={`${container} ${myStyle} ${keepAll}`}>
      <h1 className={title}>예기치 못한 오류가 발생했어요</h1>
      <section className={content}>
        <DeveloperEmoji className={developerEmoji} />
        <Txt variant="medium">
          불편을 드려 죄송합니다.{" "}
          <a href={FE_GITHUB_ISSUE_URL} target="_blank">
            Github Issue
          </a>
          나{" "}
          <a href={FEEDBACK_GOOGLE_FORM_URL} target="_blank">
            구글 폼
          </a>
          으로 지금 발생한 문제를 제보해 주시면, 빠르게 해결한 후 다시 안내 드리겠습니다!
        </Txt>
      </section>
      <section className={buttonSection}>
        <Button variant="border" onClick={handleFeedbackButton}>
          피드백하기
        </Button>
        <Button variant="primary" onClick={navigateToHome}>
          홈으로
        </Button>
      </section>
    </div>
  );
}
