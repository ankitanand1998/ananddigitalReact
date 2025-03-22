import React from "react";

export const Sitemap: React.FC = () => {
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

  // Generate Sitemap XML
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

  return (
    <div className="container mt-4">
      <h1>Sitemap</h1>
      <p>This is a structured list of all pages on our website.</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {urls.map((url, index) => (
          <li key={index}>
            <a href={url.path} style={{ textDecoration: "none", color: "blue" }}>
              {url.path}
            </a>
          </li>
        ))}
      </ul>

      {/* Hidden XML Content for SEO */}
      <pre
        style={{
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          background: "#f4f4f4",
          padding: "10px",
          marginTop: "20px",
          overflowX: "auto",
        }}
      >
        {sitemapXml}
      </pre>
    </div>
  );
};
