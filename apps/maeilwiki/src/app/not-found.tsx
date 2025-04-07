import MaeilWikiNav from '@/common/components/MaeilWikiNav';
import NotFoundPage from '@/components/notFoundError/Page';

export default function NotFound() {
  return <NotFoundPage Nav={<MaeilWikiNav />} />;
}
