import React from 'react';
import { SEO } from '../components/SEO';
import { User, Mail, Globe, Twitter, Linkedin } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Ankit Anand - Digital Marketing Expert & Blogger"
        description="Learn more about Ankit Anand, a passionate digital marketer and blogger sharing insights about digital marketing, content strategy, and online business."
        canonicalUrl="https://ananddigitalblog.vercel.app/about"
      />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-5">
                <div className="text-center mb-5">
                  <img
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop"
                    alt="Ankit Anand"
                    className="rounded-circle mb-4"
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                  />
                  <h1 className="display-5 fw-bold mb-3">Ankit Anand</h1>
                  <p className="lead text-muted mb-4">Digital Marketer & Professional Blogger</p>
                  <div className="d-flex justify-content-center gap-3">
                    <a href="https://twitter.com" className="btn btn-outline-primary" aria-label="Twitter">
                      <Twitter size={20} />
                    </a>
                    <a href="https://linkedin.com" className="btn btn-outline-primary" aria-label="LinkedIn">
                      <Linkedin size={20} />
                    </a>
                    <a href="https://ananddigitalblog.vercel.app" className="btn btn-outline-primary" aria-label="Website">
                      <Globe size={20} />
                    </a>
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <div className="d-flex align-items-center mb-3">
                      <User className="text-primary me-2" />
                      <h2 className="h5 mb-0">About Me</h2>
                    </div>
                    <p className="text-muted">
                      I'm a passionate digital marketer and blogger with extensive experience in helping businesses grow their online presence. Through my blog, I share valuable insights about digital marketing strategies, content creation, and online business development.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <Mail className="text-primary me-2" />
                      <h2 className="h5 mb-0">Expertise</h2>
                    </div>
                    <ul className="list-unstyled text-muted">
                      <li className="mb-2">✓ Content Marketing Strategy</li>
                      <li className="mb-2">✓ SEO Optimization</li>
                      <li className="mb-2">✓ Social Media Marketing</li>
                      <li className="mb-2">✓ Email Marketing</li>
                      <li>✓ Analytics & Performance Tracking</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-light p-4 rounded-3">
                  <h2 className="h4 mb-4">My Mission</h2>
                  <p className="mb-0">
                    My goal is to help individuals and businesses navigate the digital landscape successfully. Through my blog posts and articles, I provide actionable insights and strategies that can be implemented to achieve tangible results in digital marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};