import { container } from "./homeContent.css";
import HomeNav from "./HomeNav/HomeNav";
import HeroSection from "./HeroSection/HeroSection";
import DescriptionSection from "./DescriptionSection/DescriptionSection";
import TrustedBy from "./TrustedBySection/TrustedBySection";
import ClosingCTA from "./ClosingCTASection/ClosingCTASection";
import Footer from "../common/Footer/Footer";

interface HomeContentProps {
  openModal: () => void;
}

export default function HomeContent({ openModal }: HomeContentProps) {
  return (
    <div className={container}>
      <HomeNav onSubscribe={openModal} />
      <HeroSection onCTA={openModal} />
      <DescriptionSection />
      <TrustedBy />
      <ClosingCTA onCTA={openModal} />
      <Footer />
    </div>
  );
}
