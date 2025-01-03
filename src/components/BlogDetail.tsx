import React from 'react';
import { Calendar, User } from 'lucide-react';
import type { BlogPost } from '../types/Blog';

interface BlogDetailProps {
  post: BlogPost;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({ post }) => {
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.heading}</h1>
        <div className="flex items-center gap-4 text-muted mb-4">
          <div className="flex items-center gap-2">
            <User size={18} />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{post.date}</span>
          </div>
          <span className="badge bg-primary">{post.category}</span>
        </div>
      </header>

      <img
        src={post.bannerImg}
        alt={post.heading}
        className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
      />

      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{post.detailedHeadingSection1}</h2>
          <span className="text-gray-700 leading-relaxed">{post.paragraph1}</span>
        </section>

        <section className="mb-8">
           <div dangerouslySetInnerHTML={{ __html: post.paragraph2 }}></div>
        </section>

        {post.middleImg && (
          <img
            src={post.middleImg}
            alt="Article illustration"
            className="w-full h-80 object-cover rounded-lg shadow-lg my-8"
          />
        )}

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{post.detailedHeadingSection3}</h2>
          <p className="text-gray-700 leading-relaxed">{post.paragraph3}</p>
        </section>
      </div>

      <footer className="mt-8 pt-8 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-muted">Keywords:</span>
            <div className="flex flex-wrap gap-2">
              {post.keywords.split(',').map((keyword, index) => (
                <span key={index} className="badge bg-secondary">
                  {keyword.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </article>
  );
};
