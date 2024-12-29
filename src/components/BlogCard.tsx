import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types/Blog';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <img 
          src={post.bannerImg} 
          className="card-img-top h-48 object-cover"
          alt={post.heading}
        />
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="badge bg-primary">{post.category}</span>
            <small className="text-muted">{post.date}</small>
          </div>
          <h5 className="card-title">{post.heading}</h5>
          <p className="card-text text-muted">{post.metaDescription.substring(0, 120)}...</p>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <small className="text-muted">By {post.author}</small>
            <Link to={`/${post.url}`} className="btn btn-outline-primary btn-sm">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};