'use client';

import SubscribeModal from '@/_components/Home/SubscribeModal/SubscribeModal';
import useModal from '@/_hooks/useModal';
import { myStyle } from '@/_styles/vars.css';
import { container } from '@/_components/Home/homeContent.css';
import HomeNav from '@/_components/Home/HomeNav/HomeNav';
import HeroSection from '@/_components/Home/HeroSection/HeroSection';
import DescriptionSection from '@/_components/Home/DescriptionSection/DescriptionSection';
import UserReactionSection from '@/_components/Home/UserReactionSection/UserReactionSection';
import ClosingCTA from '@/_components/Home/ClosingCTASection/ClosingCTASection';
import Footer from '@/_components/common/Footer/Footer';

interface HomePageProps {
  subscriberCount: number;
}

export default function HomePage({ subscriberCount }: HomePageProps) {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <div className={myStyle}>
      <div className={container}>
        <HomeNav onSubscribe={handleModalOpen} />
        <HeroSection onCTA={handleModalOpen} />
        <DescriptionSection />
        <UserReactionSection />
        <ClosingCTA onCTA={handleModalOpen} subscriberCount={subscriberCount} />
        <Footer />
      </div>
      <SubscribeModal isOpen={isModalOpen} closeModal={handleModalClose} />
    </div>
  );
}
