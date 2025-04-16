export default function handler(req, res) {
  const disallowPaths = ["/admin/", "/login/", "/register/", "/search"];
  const allowedPaths = [
    "/oppo-find-x8-series-design-and-features",
    "/how-to-start-your-personal-blog",
    "/top-job-red-flags-before-accepting-offer",
    "/how-to-save-yourself-from-workplace-politics",
    "/football-match-punjab-fc-vs-northeast-united",
    "/manmohan-singh-oasis-of-integrity-in-sea-of-opportunism",
    "/human-metapneumovirus-hmpv-impact-in-india",
    "/is-blogging-dead-in-2025",
    "/top-digital-marketing-trends-2025",
    "/how-to-choose-a-profitable-blogging-niche-in-2025",
    "/on-page-seo-checklist-for-2025",
    "/off-page-seo-strategies-for-2025",
    "/role-of-ai-in-seo-2025",
    "/how-to-monetize-your-blog-in-2025",
    "/top-10-blogging-mistakes-to-avoid-in-2025",
    "/how-to-build-a-strong-brand-in-2025",
    "/how-to-build-an-email-list-in-2025",
    "/how-to-conduct-keyword-research-in-2025",
    "/voice-search-optimization-2025",
    "/how-to-optimize-website-speed-in-2025",
    "/future-of-content-marketing-2025",
    "/leverage-social-media-for-seo-2025",
    "/impact-of-5g-on-digital-marketing-2025",
    "/create-content-marketing-strategy-2025",
    "/how-to-write-seo-friendly-content-2025",
    "/optimize-website-for-mobile-2025",
  ];

  const content = `User-agent: *
${disallowPaths.map((path) => `Disallow: ${path}`).join("\n")}

Allow: /
${allowedPaths.map((path) => `Allow: ${path}`).join("\n")}

Sitemap: https://www.ananddigitalPR.com/sitemap.xml
`;

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(content);
}

