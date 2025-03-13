import React from "react";

const Sitemap: React.FC = () => {
  const urls = [
    { path: "/", priority: 1.0 },
    { path: "/oppo-find-x8-series-design-and-features", priority: 0.8 },
    { path: "/how-to-start-your-personal-blog", priority: 0.8 },
    { path: "/top-job-red-flags-before-accepting-offer", priority: 0.8 },
    { path: "/how-to-save-yourself-from-workplace-politics", priority: 0.8 },
    { path: "/football-match-punjab-fc-vs-northeast-united", priority: 0.8 },
    { path: "/manmohan-singh-oasis-of-integrity-in-sea-of-opportunism", priority: 0.8 },
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
  <url>
    <loc>https://ananddigitalblog.vercel.app${url.path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  }) as any;
};

export default Sitemap;
