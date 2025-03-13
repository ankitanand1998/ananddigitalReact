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
      <textarea
        readOnly
        value={sitemapXml}
        style={{ width: "100%", height: "200px", marginTop: "20px" }}
      />
    </div>
  );
};



