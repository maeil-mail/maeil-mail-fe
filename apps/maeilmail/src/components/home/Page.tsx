'use client';

import SubscribeModal from './SubscribeModal';
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

export default function HomePage({ subscriberCount }: HomePageProps) {
  const { isModalOpen, openModal, closeModal } = useModal();

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
      <SubscribeModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}
