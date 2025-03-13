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
        title="Anand Digital Blog | SEO, Digital Marketing & Web Development Proven Tips"
        description="know expert tips to grow organic traffic, rank higher on search engines and master SEO, content writing, Digital Marketing and web development at Anand Digital Blog. Lead the digital race!"
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
            "headline": "Anand Digital Blog | SEO, Content Writing & Web Development Tips",
            "description": "know expert tips to grow organic traffic, rank higher on search engines and master SEO, content writing, and web development at Anand Digital Blog. Lead the digital race!.",
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
            <h1 className="display-3 mb-4">Your Go-To Hub for Digital Success, Workplace Wins - Check Out Our Latest Blogs</h1>
             <p className="mx-3">Welcome to Anand Digital Blog, your ultimate resource for mastering digital success and workplace wins! Explore our latest blogs packed with <a href="https://ananddigitalblog.vercel.app/how-to-start-your-personal-blog" className="custom-link">expert tips on content writing and blogging</a> that captivates readers, proven SEO strategies to boost website ranking, and fresh digital marketing insights to keep you ahead of trends. Whether you’re crafting compelling blog posts, optimizing web development for better search engine performance, or chasing higher Google rankings, we’ve got you covered. Stay updated with cutting-edge online marketing news and learn how to grow organic traffic effortlessly. Plus, dive into practical <a href="https://ananddigitalblog.vercel.app/how-to-save-yourself-from-workplace-politics" rel="dofollow" className="custom-link">corporate survival hacks</a>—think workplace strategies, productivity boosts, and leadership skills—to thrive in any professional jungle. From keyword research to content creation and technical SEO, our goal is simple: empower you with actionable advice to succeed online and at work. Start browsing now and elevate your digital game!</p>
             
          </div>
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </>
  );
};
