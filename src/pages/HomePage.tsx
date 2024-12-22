import React, { useEffect, useState, useRef, useCallback } from 'react';
import { BlogCard } from '../components/BlogCard';
import { Layout } from '../components/Layout';
import { getAllBlogs } from '../services/api';
import { useFilteredBlogs } from '../hooks/useFilteredBlogs';
import { Blog } from '../types/blog';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1); // Pagination page number
  const observer = useRef<IntersectionObserver | null>(null);

  const { filteredBlogs, selectedCategory, setSelectedCategory } = useFilteredBlogs(blogs);

  const fetchBlogs = useCallback(async () => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);
    const data = await getAllBlogs(page); // Pass page to API to fetch paginated data

    // Avoid adding duplicate blogs
    setBlogs((prevBlogs) => {
      const newBlogs = data.filter(
        (newBlog) => !prevBlogs.some((prevBlog) => prevBlog.id === newBlog.id)
      );
      return [...prevBlogs, ...newBlogs];
    });

    setHasMore(data.length > 0); // Check if there are more blogs to load
    setIsLoading(false);
  }, [page, hasMore, isLoading]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const lastBlogRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  return (
    <>
      <Helmet>
        <title>
          {selectedCategory ? `${selectedCategory} Articles` : 'AnandDigitalBlog - Your Source for Latest Insights'}
        </title>
        <meta 
          name="description" 
          content={selectedCategory 
            ? `Read the latest ${selectedCategory} articles and insights`
            : 'Stay informed with AnandDigitalBlog. Explore insights on Politics, Technology, Business, Science, and Environment, delivering the latest in innovation and economy'
          } 
        />
        {filteredBlogs.length > 0 && (
          <meta 
            name="description" 
            content={filteredBlogs[0].metaDescription || 'Discover insightful articles.'} 
          />
        )}
      </Helmet>
      
      <Layout selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBlogs.map((blog, index) => {
            if (filteredBlogs.length === index + 1) {
              return <BlogCard ref={lastBlogRef} key={blog.id} blog={blog} />;
            }
            return <BlogCard key={blog.id} blog={blog} />;
          })}
        </div>

        {isLoading && (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading...</p>
          </div>
        )}

        {!isLoading && filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No articles found in this category.</p>
          </div>
        )}
      </Layout>
    </>
  );
}
