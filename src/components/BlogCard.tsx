import React from 'react';
import { Link } from 'react-router-dom';
import { Blog } from '../types/blog';
import { Clock } from 'lucide-react';

interface BlogCardProps {
  blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link to={`/blog/${blog.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:transform group-hover:-translate-y-1">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm text-indigo-600 font-medium">{blog.category}</span>
            <span className="text-gray-300">•</span>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              <span>5 min read</span>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600">
            {blog.title}
          </h2>
          <p className="text-gray-600 mb-4">{blog.excerpt}</p>
          <div className="flex items-center">
            <img
              src={blog.author.avatar}
              alt={blog.author.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="text-sm font-medium text-gray-900">{blog.author.name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}