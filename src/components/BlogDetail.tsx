import React from 'react';
import { Calendar, User } from 'lucide-react';
import type { BlogPost } from '../types/Blog';
import DOMPurify from "dompurify";

interface BlogDetailProps {
  post: BlogPost;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({ post }) => {
  const sanitizedHTML = DOMPurify.sanitize(post.paragraph2);

  // Function to handle the dynamic rendering of lists or tables
  const renderDynamicContent = (html: string) => {
    // Parse the sanitized HTML string
    const doc = new DOMParser().parseFromString(html, "text/html");
    
    // Handle unordered lists
    const lists = doc.querySelectorAll("ul");
    lists.forEach(list => {
      // You can add any custom classes or styles here if needed
      list.classList.add("custom-list");
    });
    
    // Handle tables (add classes for better styling)
    const tables = doc.querySelectorAll("table");
    tables.forEach(table => {
      table.classList.add("table-auto", "border-collapse", "w-full");
    });

    return doc.body.innerHTML;
  };

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
         <div className="breadcrumb mb-5">{post.description}</div>
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

      <div className="max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{post.detailedHeadingSection1}</h2>
          <span className="text-gray-700 leading-relaxed">{post.paragraph1}</span>
        </section>

        <section className="mb-8">
           <div className="px-5" dangerouslySetInnerHTML={{ __html: renderDynamicContent(sanitizedHTML) }}></div>
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

        {Array.isArray(post.canonicalUrl)
          ? post.canonicalUrl.map((CanonicalUrl, index) => (
              <span key={index} className="badge bg-secondary">
                <a href={CanonicalUrl} target="_blank" rel="noopener noreferrer">
                  {post.heading}
                </a>
              </span>
            ))
          : post.canonicalUrl && (
              <span className="badge bg-secondary">
                <a href={post.canonicalUrl} target="_blank" rel="noopener noreferrer">
                  {post.heading}
                </a>
              </span>
            )}
      </div>
    </div>
  </div>
</footer>

    </article>
  );
};
