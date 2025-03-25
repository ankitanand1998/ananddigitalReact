import React, { useEffect, useState } from 'react';
import { BlogCard } from '../components/BlogCard';
import { HeroSlider } from '../components/hero/HeroSlider';
import { SEO } from '../components/SEO';
import { fetchBlogPosts } from '../services/blogService';
import type { BlogPost } from '../types/Blog';
import { Loader2 } from 'lucide-react';
import '../styles/hero.css';

export const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchBlogPosts();
        setPosts(data);
      } catch (err) {
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-light d-flex align-items-center justify-content-center">
        <Loader2 className="animate-spin h-8 w-8 text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-light d-flex align-items-center justify-content-center">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Best Digital Marketing Blogs & Services | Anand Digital Blog"
        description="Master digital marketing with proven strategies, expert insights & powerful trends to grow your brand & boost sales."
        canonicalUrl="https://ananddigitalblog.vercel.app/"
      />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://ananddigitalblog.vercel.app/"
            },
            "headline": "Best Digital Marketing Blogs & Services | Anand Digital Blog",
            "description": "Master digital marketing with proven strategies, expert insights & powerful trends to grow your brand & boost sales.",
            "image": "https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg",
            "author": {
              "@type": "Organization",
              "name": "Anand Digital Blog",
              "url": "https://ananddigitalblog.vercel.app/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Anand Digital Blog",
              "logo": {
                "@type": "ImageObject",
                "url": "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop"
              }
            },
            "datePublished": "2025-01-06",
            "dateModified": "2025-01-06"
          }
        `}
      </script>


      <HeroSlider />
      <main className="container py-4">
        <div className="row g-4">
          <div className="col-12">
            <h1 className="display-3 mb-4">Boost Your SEO Success – Drive More Traffic with Our Expert Services!</h1>
             <p className="mx-3"> Welcome to Anand Digital Blog, your go-to resource for SEO, digital marketing, and website optimization. Whether you're looking to rank higher on Google, grow organic traffic, or enhance your online presence, we provide expert insights and professional services to help you succeed.<br>
Explore our in-depth blogs packed with proven SEO strategies, content marketing techniques, and website development tips to keep you ahead of the competition. Learn how to create high-impact blogs with our step-by-step guide on <a href="https://ananddigitalblog.vercel.app/how-to-start-your-personal-blog" className="custom-link">writing engaging content</a> that attracts both readers and search engines.
At Anand Digital Blog, we don’t just share knowledge—we offer expert services to help businesses dominate search rankings and drive conversions. Our professional solutions include:<br>
<b>✅ SEO Services – Keyword research, on-page & off-page SEO, and technical optimization</b>.<br>
<b>✅ Digital Marketing – Targeted strategies to boost brand visibility and online reach.</b><br>
<b>✅ Email Marketing – High-converting email campaigns to nurture and engage customers.</b><br>
<b>✅ Data & Analytics – Actionable insights to improve website performance and marketing ROI.</b><br>
<b>✅ Website Development – SEO-friendly websites that enhance user experience and ranking.</b><br>
Stay updated with cutting-edge SEO and digital marketing strategies that help businesses achieve online success. Whether you're a blogger, entrepreneur, or business owner, our blogs and services provide everything you need to grow your online presence effectively.
Start exploring now and let us help you skyrocket your SEO success! </p>
          </div>
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </>
  );
};
