import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getBlogById, getAllBlogs } from '../services/api';
import { Blog } from '../types/blog';
import { Layout } from '../components/Layout';
import { Helmet } from 'react-helmet-async';
import { Tag, User } from 'lucide-react';
import { useFilteredBlogs } from '../hooks/useFilteredBlogs';
import { BlogCard } from '../components/BlogCard';

export function BlogPage() {
  const location = useLocation();
  const pathID = location.pathname.split('/').pop(); // Assuming the ID is at the end of the path
  console.log("pathID: ", pathID);

  const [blog, setBlog] = useState<Blog | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const { selectedCategory, setSelectedCategory, filteredBlogs } = useFilteredBlogs(blogs);
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  // Fetch all blogs and the specific blog using pathID
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch all blogs
        const allBlogs = await getAllBlogs();
        setBlogs(allBlogs);

        // Fetch the specific blog by pathID
        if (pathID) {
          console.log("Fetching blog with pathID:", pathID);
          const blogData = await getBlogById(pathID);
          setBlog(blogData || null); // Handle cases where blog is not found
        } else {
          setBlog(null); // Clear blog state if no pathID is present
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlog(null); // Handle fetch errors gracefully
      } finally {
        setIsLoading(false); // Ensure loading state is cleared
      }
    };

    fetchData();
  }, []); // Dependency array ensures it refetches on pathID change

  // Clear selected category when blogs change
  useEffect(() => {
    if (selectedCategory) {
      const filtered = blogs.filter(b => b.category === selectedCategory && b.id !== blog?.id);
      if (filtered.length === 0) {
        setSelectedCategory(null);
      }
    }
  }, [selectedCategory, blogs, blog?.id]);

  // Display loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <b className="text-xl text-gray-600">Please wait, the blog is loading...</b>
      </div>
    );
  }

  // Display a fallback for when the blog is not found
  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <b className="text-xl text-gray-600">Blog not found.</b>
      </div>
    );
  }

  const relatedBlogs = selectedCategory 
    ? filteredBlogs.filter(b => b.id !== blog.id)
    : [];

  return (
    <>
      <Helmet>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <link rel="canonical" href={blog.canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={blog.keywords} />
        <meta property="og:site_name" content="ananddigitalblog.vercel.app/" />
        <meta property="og:title" content={blog.ogTitle} />
        <meta property="og:description" content={blog.ogDescription} />
        <meta property="og:image" content={blog.bannerImg} />
      </Helmet>

      <Layout selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}>
        <article className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-5">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{blog.heading}</h1>
          </div>
          <div className="p-4 mb-3">{blog.paragraph1}</div>
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
            <div className="prose max-w-none mb-12">{blog.paragraph2}</div>
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
                    {blog.author.name}
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
      </Layout>
    </>
  );
}
