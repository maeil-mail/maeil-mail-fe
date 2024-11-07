'use client';

import { ReactNode, useState } from 'react';
import { myStyle } from '@/_styles/vars.css';
import { container, wrapper, titleWrapper, mainWrapper, contentText } from './privacy.css';
import Txt from '@/_components/common/Txt/Txt';
import UpArrow from '@/_components/common/Icon/UpArrow';
import DownArrow from '@/_components/common/Icon/DownArrow';
import { TEAM_EMAIL } from '@/_constants/externalUrl';

interface Content {
  title: string;
  content: ReactNode;
}

const sections: Content[] = [
  {
    title: '1. 개인정보의 수집 및 이용 목적',
    content: [
      '매일 메일은 수집한 개인정보를 다음의 목적을 위해 활용합니다.',
      '회원 관리: 서비스 이용에 따른 본인확인, 개인 식별, 불만처리 등 민원처리',
    ],
  },
  {
    title: '2. 수집하는 개인정보의 항목',
    content: ['이메일 주소: 서비스 이용 및 고지사항 전달, 본인 확인 등을 위함'],
  },
  {
    title: '3. 개인정보의 파기절차 및 방법',
    content: [
      '회원이 서비스 가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 일정 기간 저장 되고, 별도의 요청시 파기 됩니다.',
    ],
  },
  {
    title: '4. 개인정보 제공',
    content: ['매일메일은 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.'],
  },
  {
    title: '5. 이용자 및 법정대리인의 권리와 그 행사방법',
    content: [
      '이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.',
      '이용자의 개인정보 조회, 수정을 위해서는 "개인정보변경"(또는 "회원정보수정" 등)을, 가입해지(동의철회)를 위해서는 "회원 탈퇴"를 요청하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다.',
      '혹은 개인 정보 관리 책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.',
    ],
  },
  {
    title: '6. 개인정보 보호책임자',
    content: [
      '회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.',
      `연락처 이메일: ${TEAM_EMAIL}`,
    ],
  },
];

export default function Privacy() {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});

  const toggleSection = (index: number): void => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className={`${myStyle} ${container}`}>
      <div className={mainWrapper}>
        <Txt variant="xLarge" center>
          개인정보취급방침
        </Txt>
      </div>
      {sections.map((section, index) => (
        <button key={index} className={wrapper} onClick={() => toggleSection(index)}>
          <div className={titleWrapper}>
            <Txt variant="medium">{section.title}</Txt>
            {openSections[index] ? (
              <UpArrow width={10} height={10} />
            ) : (
              <DownArrow width={10} height={10} />
            )}
          </div>

          {openSections[index] && (
            <Txt variant="medium" className={contentText}>
              {section.content}
            </Txt>
          )}
        </button>
      ))}
    </div>
  );
}
