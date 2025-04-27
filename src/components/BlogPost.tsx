import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import type { Blog } from '../types/Blog';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [formattedContent, setFormattedContent] = useState<string>('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch('https://ananddigitaldatabase.vercel.app/data.json');
        const data = await response.json();
        const foundBlog = data.find((b: Blog) => b.url === slug);
        setBlog(foundBlog);

        if (foundBlog && foundBlog.paragraph2) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(foundBlog.paragraph2, 'text/html');

          // Make tables responsive
          const tables = doc.querySelectorAll('table');
          tables.forEach((table) => {
            table.classList.add(
              'min-w-full',
              'text-left',
              'text-sm',
              'text-gray-700',
              'border',
              'border-gray-200',
              'rounded-lg',
              'divide-y',
              'divide-gray-200'
            );

            const wrapper = doc.createElement('div');
            wrapper.className = 'overflow-x-auto mb-6';
            table.parentNode?.insertBefore(wrapper, table);
            wrapper.appendChild(table);
          });

          // Style lists
          const lists = doc.querySelectorAll('ul, ol');
          lists.forEach((list) => {
            list.classList.add('list-disc', 'pl-6', 'mb-4');
          });

          setFormattedContent(doc.body.innerHTML);
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-2xl">Blog post not found</h1>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <meta name="keywords" content={blog.keywords} />
        <meta property="og:title" content={blog.ogTitle} />
        <meta property="og:description" content={blog.ogDescription} />
        <meta property="og:url" content={blog.ogUrl} />
        <link rel="canonical" href={blog.canonicalUrl} />
      </Helmet>

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{blog.heading}</h1>
          <p className="mt-1 text-xl  mb-4">{blog.paragraph1}</p>
          <div className="flex items-center gap-4 text-gray-500">
            <span className="flex items-center gap-2">
              <User size={18} />
              {blog.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={18} />
              {blog.date}
            </span>
          </div>
        </header>

        <img
          src={blog.bannerImg}
          alt={blog.heading}
          className="w-full h-[400px] object-cover rounded-xl mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: formattedContent }} />
        </div>
      </motion.article>
    </>
  );
};

export default BlogPost;
