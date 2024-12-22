import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById, getAllBlogs } from '../services/api';
import { Blog } from '../types/blog';
import { Layout } from '../components/Layout';
import { Helmet } from 'react-helmet-async';
import { Tag, User } from 'lucide-react';
import { useFilteredBlogs } from '../hooks/useFilteredBlogs';
import { BlogCard } from '../components/BlogCard';
import { Sidebar } from '../components/Sidebar';  // Import your Sidebar component

export function BlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);  // New loading state
  const { selectedCategory, setSelectedCategory, filteredBlogs } = useFilteredBlogs(blogs);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allBlogs = await getAllBlogs();
        setBlogs(allBlogs);
        if (id) {
          const blogData = await getBlogById(id); // id is a string
          if (blogData) setBlog(blogData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);  // Set loading to false once data is fetched
      }
    };
    fetchData();
  }, [id]);

  // Clear previous category blogs when changing categories
  useEffect(() => {
    if (selectedCategory) {
      const filtered = blogs.filter(b => b.category === selectedCategory && b.id !== blog?.id);
      if (filtered.length === 0) {
        setSelectedCategory(null);
      }
    }
  }, [selectedCategory, blogs, blog?.id]);

  // Show loading message until the blog is loaded
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Please Wait Blog is loading...</p>
      </div>
    );
  }

  if (!blog) return null;

  const relatedBlogs = selectedCategory 
    ? filteredBlogs.filter(b => b.id !== blog.id)
    : [];

  return (
    <>
      <Helmet>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <link rel="canonical" href={blog.canonicalUrl} />
        <meta name="robots" content="index, follow"/>
        <meta name="keywords" content={blog.keywords}/>
        <meta property="og:site_name" content="ananddigitalblog.vercel.app/"/>
        <meta property="og:title" content={blog.ogTitle} />
        <meta property="og:description" content={blog.ogDescription} />
        <meta property="og:image" content={blog.bannerImg} />
      </Helmet>

      <Layout selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}>
        <div className="flex">
          {/* Main content area */}
          <main className="flex-1">
            <article className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
              <div className='p-5'>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">{blog.heading}</h1>
              </div>

              <div className='p-4 mb-3'>
                {blog.paragraph1}
              </div>

              <img
                src={blog.bannerImg}
                alt={blog.heading}
                className="w-full h-[400px] object-cover"
              />
              
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center text-indigo-600">
                    <Tag className="w-5 h-5 mr-2" />
                    <span className="font-medium">{blog.category}</span>
                  </div>
                </div>

                <div className="prose max-w-none mb-12">
                  {blog.paragraph2}
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center">
                    <img
                      src={blog.author.avatar || 'data:image/jpeg;base64,/9j/...'}
                      alt={blog.author.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="flex items-center mb-1">
                        <User className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="font-medium text-gray-900">Written by</span>
                      </div>
                      <span className="text-lg font-semibold text-indigo-600">
                        {blog.author}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {selectedCategory && relatedBlogs.length > 0 && (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  More from {selectedCategory}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedBlogs.map((relatedBlog) => (
                    <BlogCard key={relatedBlog.id} blog={relatedBlog} />
                  ))}
                </div>
              </>
            )}

            {selectedCategory && relatedBlogs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No other articles found in this category.</p>
              </div>
            )}
          </main>

          {/* Sidebar */}
          <Sidebar blogs={blogs} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </div>
      </Layout>
    </>
  );
}
