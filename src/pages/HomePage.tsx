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
        title="Anand Digital Blog: Breaking News, Top Headlines & Insights Across India"
        description="Get the latest breaking news on politics, business, lifestyle, entertainment and sports. Stay updated with global news, live coverage on Bollywood, cricket, technology, and more on Anand Digital Blog."
        canonicalUrl="https://ananddigitalblog.vercel.app/"
      />
      <HeroSlider />
      <main className="container py-4">
        <div className="row g-4">
          <div className="col-12">
            <h1 className="display-4 mb-4">Latest Blog Posts</h1>
          </div>
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </>
  );
};
