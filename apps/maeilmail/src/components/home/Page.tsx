'use client';

import { useEffect, useState } from 'react';

import SubscribeModal from './SubscribeModal';
import ServiceEndingNoticeModal from './ServiceEndingNoticeModal';
import HomeNav from './HomeNav';
import HeroSection from './HeroSection';
import DescriptionSection from './DescriptionSection';
import UserReactionSection from './UserReactionSection';
import ClosingCTA from './ClosingCTASection';

import useModal from '@/common/hooks/useModal';
import { container } from './homeContent.css';
import OpeningCTASection from './OpeningCTASection';
import SummarySection from './SummarySection';
import FAQSection from './FAQSection';

interface HomePageProps {
  subscriberCount: number;
}

const SERVICE_NOTICE_STORAGE_KEY = 'maeil-mail-service-ending-notice-hidden';

export default function HomePage({ subscriberCount }: HomePageProps) {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  useEffect(() => {
    const isDismissed = window.localStorage.getItem(SERVICE_NOTICE_STORAGE_KEY) === 'true';

    if (!isDismissed) {
      setIsNoticeOpen(true);
    }
  }, []);

  const closeNotice = () => {
    setIsNoticeOpen(false);
  };

  const dismissNoticePermanently = () => {
    window.localStorage.setItem(SERVICE_NOTICE_STORAGE_KEY, 'true');
    setIsNoticeOpen(false);
  };

  return (
    <div>
      <div className={container}>
        <HomeNav onSubscribe={openModal} />
        <HeroSection />
        <OpeningCTASection onCTA={openModal} />
        <DescriptionSection />
        <SummarySection />
        <UserReactionSection />
        <ClosingCTA onCTA={openModal} subscriberCount={subscriberCount} />
        <FAQSection />
      </div>
      <ServiceEndingNoticeModal
        isOpen={isNoticeOpen}
        onClose={closeNotice}
        onDismissForever={dismissNoticePermanently}
      />
      <SubscribeModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}
