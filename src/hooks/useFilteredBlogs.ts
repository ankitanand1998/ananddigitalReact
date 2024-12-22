import { useState, useMemo } from 'react';
import { Blog } from '../types/blog';

export function useFilteredBlogs(blogs: Blog[]) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredBlogs = useMemo(() => {
    if (!selectedCategory) {
      return blogs;
    }
    return blogs.filter(blog => blog.category === selectedCategory);
  }, [blogs, selectedCategory]);

  return {
    selectedCategory,
    setSelectedCategory,
    filteredBlogs
  };
}