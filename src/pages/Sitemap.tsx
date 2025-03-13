import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export async function getServerSideProps({ res }) {
  const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/oppo-find-x8-series-design-and-features", changefreq: "weekly", priority: 0.8 },
    { url: "/how-to-start-your-personal-blog", changefreq: "weekly", priority: 0.8 },
    { url: "/top-job-red-flags-before-accepting-offer", changefreq: "weekly", priority: 0.8 },
    { url: "/how-to-save-yourself-from-workplace-politics", changefreq: "weekly", priority: 0.8 },
    { url: "/football-match-punjab-fc-vs-northeast-united", changefreq: "weekly", priority: 0.8 },
    { url: "/manmohan-singh-oasis-of-integrity-in-sea-of-opportunism", changefreq: "weekly", priority: 0.8 },
  ];

  const stream = new SitemapStream({ hostname: "https://ananddigitalblog.vercel.app" });
  links.forEach((link) => stream.write(link));
  stream.end();

  const sitemap = await streamToPromise(Readable.from(stream)).then((data) => data.toString());

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
