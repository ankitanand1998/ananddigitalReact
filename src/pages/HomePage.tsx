import React, { useEffect, useState } from 'react';
import { BlogCard } from '../components/BlogCard';
import { Layout } from '../components/Layout';
import { getAllBlogs } from '../services/api';
import { useFilteredBlogs } from '../hooks/useFilteredBlogs';
import { Blog } from '../types/blog';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const { filteredBlogs, selectedCategory, setSelectedCategory } = useFilteredBlogs(blogs);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getAllBlogs();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {selectedCategory ? `${selectedCategory} Articles` : 'Tech Blog - Latest Articles'}
        </title>
        <meta 
          name="description" 
          content={selectedCategory 
            ? `Read the latest ${selectedCategory} articles and insights`
            : 'Discover the latest articles on technology, development, and more.'
          } 
        />
      </Helmet>
      
      <Layout selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        
        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No articles found in this category.</p>
          </div>
        )}
      </Layout>
    </>
  );
}