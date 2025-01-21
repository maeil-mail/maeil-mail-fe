'use client';

import SubscribeModal from '@/_components/Home/SubscribeModal/SubscribeModal';
import useModal from '@/_hooks/useModal';
import { container } from '@/_components/Home/homeContent.css';
import HomeNav from '@/_components/Home/HomeNav/HomeNav';
import HeroSection from '@/_components/Home/HeroSection/HeroSection';
import DescriptionSection from '@/_components/Home/DescriptionSection/DescriptionSection';
import UserReactionSection from '@/_components/Home/UserReactionSection/UserReactionSection';
import ClosingCTA from '@/_components/Home/ClosingCTASection/ClosingCTASection';

interface HomePageProps {
  subscriberCount: number;
}

export default function HomePage({ subscriberCount }: HomePageProps) {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <div className={container}>
        <HomeNav onSubscribe={openModal} />
        <HeroSection onCTA={openModal} />
        <DescriptionSection />
        <UserReactionSection />
        <ClosingCTA onCTA={openModal} subscriberCount={subscriberCount} />
      </div>
      <SubscribeModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}
