export default function handler(req, res) {
  const baseUrl = "https://www.ananddigitalpr.com";
  const urls = [
    { path: "/", priority: 1.0 },
    { path: "/oppo-find-x8-series-design-and-features", priority: 0.8 },
    { path: "/how-to-start-your-personal-blog", priority: 0.8 },
    { path: "/top-job-red-flags-before-accepting-offer", priority: 0.8 },
    { path: "/how-to-save-yourself-from-workplace-politics", priority: 0.8 },
    { path: "/football-match-punjab-fc-vs-northeast-united", priority: 0.8 },
    { path: "/manmohan-singh-oasis-of-integrity-in-sea-of-opportunism", priority: 0.8 },
    { path: "/human-metapneumovirus-hmpv-impact-in-india", priority: 0.8 },
    { path: "/is-blogging-dead-in-2025", priority: 0.8 },
    { path: "/top-digital-marketing-trends-2025", priority: 0.8 },
    { path: "/how-to-choose-a-profitable-blogging-niche-in-2025", priority: 0.8 },
    { path: "/on-page-seo-checklist-for-2025", priority: 0.8 },
    { path: "/off-page-seo-strategies-for-2025", priority: 0.8 },
    { path: "/role-of-ai-in-seo-2025", priority: 0.8 },
    { path: "/how-to-monetize-your-blog-in-2025", priority: 0.8 },
    { path: "/top-10-blogging-mistakes-to-avoid-in-2025", priority: 0.8 },
    { path: "/how-to-build-a-strong-brand-in-2025", priority: 0.8 },
    { path: "/how-to-build-an-email-list-in-2025", priority: 0.8 },
    { path: "/how-to-conduct-keyword-research-in-2025", priority: 0.8 },
    { path: "/voice-search-optimization-2025", priority: 0.8 },
    { path: "/how-to-optimize-website-speed-in-2025", priority: 0.8 },
    { path: "/future-of-content-marketing-2025", priority: 0.8 },
    { path: "/leverage-social-media-for-seo-2025", priority: 0.8 },
    { path: "/impact-of-5g-on-digital-marketing-2025", priority: 0.8 },
    { path: "/create-content-marketing-strategy-2025", priority: 0.8 },
    { path: "/how-to-write-seo-friendly-content-2025", priority: 0.8 },
    { path: "/optimize-website-for-mobile-2025", priority: 0.8 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${baseUrl}${url.path}</loc>
    <lastmod>2025-04-13</lastmod>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}

