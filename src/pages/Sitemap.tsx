import React, { useEffect } from 'react';
export const Sitemap: React.FC = () => {
  useEffect(() => {
  const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ananddigitalblog.vercel.app/</loc>
   <lastmod>2025-03-09T08:31:01.920Z</lastmod>
    <priority>1.0</priority>
  </url>
 

  <url>
    <loc>https://ananddigitalblog.vercel.app/oppo-find-x8-series-design-and-features</loc>
    <lastmod>2025-03-09T08:31:01.920Z</lastmod>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://ananddigitalblog.vercel.app/how-to-start-your-personal-blog</loc>
    <lastmod>2025-03-09T08:31:01.920Z</lastmod>
    <priority>0.8</priority>
  </url>

 <url>
    <loc>https://ananddigitalblog.vercel.app/top-job-red-flags-before-accepting-offer</loc>
    <lastmod>2025-03-09T08:31:01.920Z</lastmod>
    <priority>0.8</priority>
  </url>
  
<url>
    <loc>https://ananddigitalblog.vercel.app/how-to-save-yourself-from-workplace-politics</loc>
    <lastmod>2025-03-09T08:31:01.920Z</lastmod>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://ananddigitalblog.vercel.app/football-match-punjab-fc-vs-northeast-united</loc>
    <lastmod>2025-03-09T08:31:01.920Z</lastmod>
    <priority>0.8</priority>
  </url>

   <url>
    <loc>https://ananddigitalblog.vercel.app/manmohan-singh-oasis-of-integrity-in-sea-of-opportunism</loc>
   <lastmod>2025-03-09T08:31:01.920Z</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>`;
    
    const blob = new Blob([xmlData], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
     window.location.href = url;
   
  }, []);

  return null;
};
