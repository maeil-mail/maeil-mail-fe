import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import HeroSection from '@/_components/MaeilWiki/Home/HeroSection';
import WikiList from '@/_components/MaeilWiki/Home/WikiList';

export default function Page() {
  return (
    <PageInnerLayout>
      <HeroSection />
      <WikiList />
    </PageInnerLayout>
  );
}
