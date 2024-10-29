import FRONTEND_BASE_URL from "@/_constants/frontendBaseUrl";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const STATIC_PATHS = ["/"];

  const staticSitemap = STATIC_PATHS.map((path) => generateSitemapEntry(path));

  const questionDetailSitemap = generateQuestionDetailSitemap();

  return [...staticSitemap, ...questionDetailSitemap];
}

function generateQuestionDetailSitemap() {
  const QUESTION_COUNT = 41;

  return Array.from({ length: QUESTION_COUNT }, (_, i) =>
    generateSitemapEntry(`/question/${i + 1}`)
  );
}

type SitemapEntry = MetadataRoute.Sitemap[number];
function generateSitemapEntry(path: string, priority: number = 0.7): SitemapEntry {
  return {
    url: `${FRONTEND_BASE_URL}${path}`,
    changeFrequency: "daily",
    priority,
  };
}
