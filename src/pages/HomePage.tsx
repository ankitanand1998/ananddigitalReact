import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogCard } from '../components/BlogCard';
import { BlogDetail } from '../components/BlogDetail';
import { HeroSlider } from '../components/hero/HeroSlider';
import { SEO } from '../components/SEO';
import { fetchBlogPosts } from '../services/blogService';
import type { BlogPost } from '../types/Blog';
import { Loader2, ArrowLeft } from 'lucide-react';
import '../styles/hero.css';

export const BlogDetailPage: React.FC = () => {
  const { url } = useParams<{ url: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const posts = await fetchBlogPosts();
        const foundPost = posts.find(p => p.url === url);
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError('Blog post not found');
        }
      } catch (err) {
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [url]);

  if (loading) {
    return (
      <div className="min-h-screen bg-light d-flex align-items-center justify-content-center">
        <Loader2 className="animate-spin h-8 w-8 text-primary" />
      </div>
    );
  }

  if (error || !post) {
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
        title={post.metaTitle}
        description={post.metaDescription}
        canonicalUrl={post.canonicalUrl}
        keywords={post.keywords}
        ogTitle={post.ogTitle}
        ogDescription={post.ogDescription}
        ogImage={post.bannerImg}
        type="article"
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
            "headline": "Anand Digital Blog: Breaking News, Top Headlines & Insights Across India",
            "description": "Get the latest breaking news on politics, business, lifestyle, entertainment, and sports. Stay updated with global news, live coverage on Bollywood, cricket, technology, and more on Anand Digital Blog.",
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
            "datePublished": "${post.date}",
            "dateModified": "${post.date}"
          }
        `}
      </script>

      <div className="container py-4">
        <button
          onClick={() => navigate('/')}
          className="btn btn-link text-decoration-none mb-4 d-flex align-items-center gap-2"
        >
          <ArrowLeft size={20} />
          Back to Posts
        </button>
        <BlogDetail post={post} />
      </div>
    </>
  );
};

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
      {/* Static JSON-LD Schema Markup for Home Page */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Anand Digital Blog",
          "description": "Get the latest breaking news on politics, business, lifestyle, entertainment, and sports. Stay updated with global news, live coverage on Bollywood, cricket, technology, and more on Anand Digital Blog.",
          "url": "https://ananddigitalblog.vercel.app/",
          "publisher": {
            "@type": "Organization",
            "name": "Anand Digital Blog",
            "logo": {
              "@type": "ImageObject",
              "url": "https://ananddigitalblog
