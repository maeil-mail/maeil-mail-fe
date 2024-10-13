import { Helmet } from 'react-helmet-async';

interface MetaTagProps {
  title?: string;
  description?: string;
  imgSrc?: string;
  url?: string;
}

const DEPLOY_URL = 'https://maeil-mail.vercel.app';
const DEFAULT_TITLE = '매일메일';
const DEFAULT_DESCRIPTION = '매일 면접 질문을 보내주는 서비스입니다.';
const DEFAULT_IMAGE = `${DEPLOY_URL}/favicon.png`;

export default function MetaTag({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  imgSrc = DEFAULT_IMAGE,
  url,
}: MetaTagProps) {
  const completeUrl = url ? `${DEPLOY_URL}${url}` : DEPLOY_URL;

  return (
    <Helmet>
      <title>{title === DEFAULT_TITLE ? title : `${DEFAULT_TITLE} - ${title}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={DEFAULT_TITLE} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgSrc} />
      <meta property="og:url" content={completeUrl} />
    </Helmet>
  );
}
