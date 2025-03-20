import React from 'react';
import { Link } from 'react-router-dom';
import "./hero.css";

interface HeroSlideProps {
  image: string;
  title: string;
  description: string;
  link: string;
  isActive: boolean;
}

export const HeroSlide: React.FC<HeroSlideProps> = ({
  image,
  title,
  description,
  link,
  isActive
}) => {
  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
      <div 
        className="position-relative"
        style={{ height: '600px' }}
      >
        <img
          src={image}
          className="d-block w-100 h-100 object-fit-cover"
          alt={title}
        />
        <div className="carousel-caption text-start">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="display-4 fw-bold mb-3">{title}</h2>
                <p className="lead mb-4 custom-description">{description}</p>
                <Link 
                  to={link}
                  className="btn btn-primary btn-lg"
                >
                  Know About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50" />
      </div>
    </div>
  );
};
