import React from 'react';
import { HeroSlide } from './HeroSlide';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920&h=600&fit=crop',
    title: 'Decoding the Political Landscape: Insights That Matter',
    description: 'Explore the intricate world of politics with in-depth analysis, expert commentary, and real-time updates. We break down complex issues to keep you informed and empowered',
    link: '/about'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1920&h=600&fit=crop',
    title: 'The Intersection of Tech and Humanity',
    description: 'Explore how technology is bridging gaps, creating opportunities, and redefining the human experience. Stay inspired by the possibilities',
    link: '/about'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1920&h=600&fit=crop',
    title: 'Rank Higher, Reach Further: SEO Tips That Work',
    description: 'Learn the secrets to achieving top search engine rankings. Our blog provides the insights you need to grow your online presence and drive organic traffic.',
    link: '/about'
  }
];

// Rest of the component remains the same
export const HeroSlider: React.FC = () => {
  return (
    <div id="heroCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {slides.map((slide, index) => (
          <button
            key={`indicator-${slide.id}`}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <HeroSlide
            key={slide.id}
            {...slide}
            isActive={index === 0}
          />
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
