import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogDetail } from '../components/BlogDetail';
import { SEO } from '../components/SEO';
import { fetchBlogPosts } from '../services/blogService';
import type { BlogPost } from '../types/Blog';
import { Loader2, ArrowLeft } from 'lucide-react';

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