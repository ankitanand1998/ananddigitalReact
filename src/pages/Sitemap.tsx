import React, { useEffect } from 'react';
export const Sitemap: React.FC = () => {
  useEffect(() => {
  const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ananddigitalblog.vercel.app/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ananddigitalblog.vercel.app/blog-post-1</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.8</priority>
  </url>
  <!-- Add more URLs as needed -->
</urlset>`;
    const blob = new Blob([xmlData], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    window.location.href = url;
  }, []);

  return null;
};
