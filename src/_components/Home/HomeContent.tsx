import { container, minimumPadding } from './homeContent.css';
import Nav from './Nav/Nav';
import HeroSection from './HeroSection/HeroSection';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import TrustedBy from './TrustedBySection/TrustedBySection';
import ClosingCTA from './ClosingCTASection/ClosingCTASection';
import Footer from './Footer/Footer';

interface HomeContentProps {
  openModal: () => void;
}

export default function HomeContent({ openModal }: HomeContentProps) {
  return (
    <div className={container}>
      <Nav onSubscribe={openModal} />
      <HeroSection onCTA={openModal} />
      <DescriptionSection />
      <TrustedBy />
      <ClosingCTA onCTA={openModal} />
      <Footer />
    </div>
  );
}
