import { descriptionSection, descriptionSectionInnerWrapper } from './descriptionSection.css';
import DescImg1 from '@/assets/images/DescriptionSection/desc-1.png';
import DescImg2 from '@/assets/images/DescriptionSection/desc-2.png';
import DescImg3 from '@/assets/images/DescriptionSection/desc-3.png';
import Image from 'next/image';

export default function DescriptionSection() {
  return (
    <section className={descriptionSection}>
      <div className={descriptionSectionInnerWrapper}>
        <div
          style={{
            background: '#E3F8F1',
            width: '100%',
            maxWidth: '110rem',
            padding: '5.9rem 7.5rem 0 7.5rem',
            borderRadius: '2.4rem',
            display: 'flex',
            gap: '10rem',
          }}
        >
          <Image
            src={DescImg1}
            style={{
              width: '40rem',
              height: 'auto',
              borderTopRightRadius: '1.6rem',
              borderTopLeftRadius: '1.6rem',
            }}
            alt="desc-1"
          />
          <div style={{ marginTop: '3rem' }}>
            <div
              style={{
                background: '#3B3D42',
                color: '#fff',
                lineHeight: '1.5',
                padding: '0.6rem 1.6rem',
                width: 'fit-content',
                borderRadius: 999,
                fontSize: '1.6rem',
              }}
            >
              질문 확인
            </div>
            <div
              style={{
                marginTop: '1.6rem',
                fontSize: '3.2rem',
                fontWeight: 600,
                lineHeight: 1.4,
                letterSpacing: '-0.1rem',
              }}
            >
              매일 아침 7시
              <br />
              메일함을 확인해보세요
            </div>
            <div style={{ marginTop: '3rem', fontSize: '1.8rem', lineHeight: 1.4, color: '#444' }}>
              내가 신청한 분야의 기술 면접 질문을
              <br />
              확인하고 스스로 답해보세요
            </div>
          </div>
        </div>
        <div
          style={{
            background: '#E3F8F1',
            width: '100%',
            maxWidth: '110rem',
            padding: '5.9rem 7.5rem 0 7.5rem',
            borderRadius: '2.4rem',
            display: 'flex',
            gap: '10rem',
          }}
        >
          <Image
            src={DescImg2}
            style={{
              width: '40rem',
              height: 'auto',
              borderTopRightRadius: '1.6rem',
              borderTopLeftRadius: '1.6rem',
            }}
            alt="desc-1"
          />
          <div style={{ marginTop: '3rem' }}>
            <div
              style={{
                background: '#3B3D42',
                color: '#fff',
                lineHeight: '1.5',
                padding: '0.6rem 1.6rem',
                width: 'fit-content',
                borderRadius: 999,
                fontSize: '1.6rem',
              }}
            >
              질문 확인
            </div>
            <div
              style={{
                marginTop: '1.6rem',
                fontSize: '3.2rem',
                fontWeight: 600,
                lineHeight: 1.4,
                letterSpacing: '-0.1rem',
              }}
            >
              매일 아침 7시
              <br />
              메일함을 확인해보세요
            </div>
            <div style={{ marginTop: '3rem', fontSize: '1.8rem', lineHeight: 1.4, color: '#444' }}>
              내가 신청한 분야의 기술 면접 질문을
              <br />
              확인하고 스스로 답해보세요
            </div>
          </div>
        </div>
        <div
          style={{
            background: '#E3F8F1',
            width: '100%',
            maxWidth: '110rem',
            padding: '5.9rem 7.5rem 0 7.5rem',
            borderRadius: '2.4rem',
            display: 'flex',
            gap: '10rem',
          }}
        >
          <Image
            src={DescImg3}
            style={{
              width: '40rem',
              height: 'auto',
              borderTopRightRadius: '1.6rem',
              borderTopLeftRadius: '1.6rem',
            }}
            alt="desc-1"
          />
          <div style={{ marginTop: '3rem' }}>
            <div
              style={{
                background: '#3B3D42',
                color: '#fff',
                lineHeight: '1.5',
                padding: '0.6rem 1.6rem',
                width: 'fit-content',
                borderRadius: 999,
                fontSize: '1.6rem',
              }}
            >
              질문 확인
            </div>
            <div
              style={{
                marginTop: '1.6rem',
                fontSize: '3.2rem',
                fontWeight: 600,
                lineHeight: 1.4,
                letterSpacing: '-0.1rem',
              }}
            >
              매일 아침 7시
              <br />
              메일함을 확인해보세요
            </div>
            <div style={{ marginTop: '3rem', fontSize: '1.8rem', lineHeight: 1.4, color: '#444' }}>
              내가 신청한 분야의 기술 면접 질문을
              <br />
              확인하고 스스로 답해보세요
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
