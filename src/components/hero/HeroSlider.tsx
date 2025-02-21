import React from 'react';
import { HeroSlide } from './HeroSlide';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920&h=600&fit=crop',
    title: 'Skyrocket Your Website with SEO & Digital Mastery',
    description: 'Enhance your website’s visibility and traffic with top-tier SEO and digital marketing tactics. Master the tools and trends you need to dominate search rankings at Anand Digital Blog',
    link: '/about'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1920&h=600&fit=crop',
    title: 'Boost Your Digital Edge with Expert Insights',
    description: 'Gain a competitive advantage with proven strategies in SEO, content writing, and web development. Stay ahead of trends and elevate your skills with expert advice from Anand Digital Blog',
    link: '/about'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1920&h=600&fit=crop',
    title: 'Master Corporate Culture in a Digital World',
    description: 'Know to navigate workplace dynamics and excel in a fast-paced digital environment. From remote teams to corporate pressures, get tips to thrive as a digital marketing or tech professiona',
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
