export default function handler(req, res) {
  const disallowedPaths = [
    "/blog/oppo-find-x8-series-design-and-features",
    "/blog/how-to-start-your-personal-blog",
    "/blog/top-job-red-flags-before-accepting-offer",
    "/blog/how-to-save-yourself-from-workplace-politics",
    "/blog/football-match-punjab-fc-vs-northeast-united",
    "/blog/manmohan-singh-oasis-of-integrity-in-sea-of-opportunism",
    "/blog/human-metapneumovirus-hmpv-impact-in-india",
    "/blog/is-blogging-dead-in-2025",
    "/blog/top-digital-marketing-trends-2025",
    "/blog/how-to-choose-a-profitable-blogging-niche-in-2025",
    "/blog/on-page-seo-checklist-for-2025",
    "/blog/off-page-seo-strategies-for-2025",
    "/blog/role-of-ai-in-seo-2025",
    "/blog/how-to-monetize-your-blog-in-2025",
    "/blog/top-10-blogging-mistakes-to-avoid-in-2025",
    "/blog/how-to-build-a-strong-brand-in-2025",
    "/blog/how-to-build-an-email-list-in-2025",
    "/blog/how-to-conduct-keyword-research-in-2025",
    "/blog/voice-search-optimization-2025",
    "/blog/how-to-optimize-website-speed-in-2025",
    "/blog/future-of-content-marketing-2025",
    "/blog/leverage-social-media-for-seo-2025",
    "/blog/impact-of-5g-on-digital-marketing-2025",
    "/blog/create-content-marketing-strategy-2025",
    "/blog/how-to-write-seo-friendly-content-2025",
    "/blog/optimize-website-for-mobile-2025"
  ];

  const content = `User-agent: *
${disallowedPaths.map(path => `Disallow: ${path}`).join("\n")}

Allow: /

Sitemap: https://www.ananddigitalpr.com/sitemap.xml
`;

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(content);
}
