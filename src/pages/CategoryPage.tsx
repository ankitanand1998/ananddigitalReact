import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const CategoryPage = () => {
  const { categoryName } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulating fetching data from API or database
    const fetchPosts = async () => {
      const response = await fetch("https://ananddigitaldatabase.vercel.app/data.json"); // Replace with API endpoint
      const data = await response.json();
      const filteredPosts = data.filter((post) => post.category === categoryName);
      setPosts(filteredPosts);
    };

    fetchPosts();
  }, [categoryName]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Posts in {categoryName}</h2>
      <div className="row">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <img src={post.bannerImg} className="card-img-top h-48 object-cover" alt={post.heading} />
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
          ))
        ) : (
          <p>No posts found in this category.</p>
        )}
      </div>
    </div>
  );
};



