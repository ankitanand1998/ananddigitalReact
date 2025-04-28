import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Helmet } from 'react-helmet';
import Footer from "../components/Footer";
import WhyChoose from "../components/WhyChoose";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

import {
  ArrowRight,
  CheckCircle2,
  Users,
  Rocket,
  Trophy,
  Monitor,
  TrendingUp,
  Mail,
  Code,
  ShieldCheck,
  PenTool,
  BarChart,
  Network,
  ClipboardList,
  Megaphone,
} from 'lucide-react';

import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate(); // Initialize navigation

  const heroSlides = [
    {
      title: 'Best Digital Marketing and PR Agency in Delhi',
      description: 'Anand Digital PR is Delhi’s leading agency where cutting-edge digital marketing meets powerful public relations',
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1920",
    },
    {
      title: 'Get found. Get featured. Get results',
      description: 'From first impression to final conversion, we power every step of your brand journey.Be seen, be trusted, and be remembered—with Anand Digital PR',
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1920",
    },
    {
      title: "Strategic Digital PR Solutions",
      description: "Elevate your brand's presence with our innovative PR strategies",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: 'All-in-one growth: SEO, Social Media, PPC, Content & PR',
      description: 'From driving traffic to shaping public perception—we cover every angle of your digital journey. All your marketing and PR needs, handled under one expert roof',
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "Data-Driven Campaigns",
      description: "Maximize your impact with our analytics-backed approach",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "Global Media Relations",
      description: "Connect with influential media partners worldwide",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: 'We don’t just market—We build reputations, boost engagement, and deliver results.',
      description: "Elevate your brand's presence with our innovative PR strategies",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
    }
  ];

  const services = [
    {
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      title: "Media Relations",
      description: "Build strong relationships with key media outlets and journalists",
    },
    {
      icon: <Trophy className="w-12 h-12 text-indigo-600" />,
      title: "Crisis Management",
      description: "Expert handling of sensitive situations and reputation management",
    },
    {
      icon: <Megaphone className="w-12 h-12 text-indigo-600" />,
      title: "Press Release Distribution",
      description: "Get your story out with impactful and timely press releases",
    },
    {
      icon: <Network className="w-12 h-12 text-indigo-600" />,
      title: "Influencer Outreach",
      description: "Connect with influencers to expand your brand's reach",
    },
    {
      icon: <Rocket className="w-12 h-12 text-indigo-600" />,
      title: "Digital Strategy",
      description: "Comprehensive digital strategies to enhance your online presence",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-indigo-600" />,
      title: "SEO Optimization",
      description: "Improve your search rankings with smart SEO techniques",
    },
    {
      icon: <Mail className="w-12 h-12 text-indigo-600" />,
      title: "Email Marketing",
      description: "Engage your audience with well-crafted email campaigns",
    },
    {
      icon: <BarChart className="w-12 h-12 text-indigo-600" />,
      title: "Analytics & Reporting",
      description: "Track and analyze data to optimize campaign performance",
    },
    {
      icon: <Monitor className="w-12 h-12 text-indigo-600" />,
      title: "Responsive Web Design",
      description: "Beautiful and functional websites for all devices",
    },
    {
      icon: <Code className="w-12 h-12 text-indigo-600" />,
      title: "Frontend Development",
      description: "Interactive, fast-loading, and SEO-friendly interfaces",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-indigo-600" />,
      title: "Security & Hosting",
      description: "Robust and secure hosting solutions for your website",
    },
    {
      icon: <PenTool className="w-12 h-12 text-indigo-600" />,
      title: "UI/UX Design",
      description: "Create stunning, user-friendly designs tailored to your brand",
    },
    {
      icon: <ClipboardList className="w-12 h-12 text-indigo-600" />,
      title: "Website Maintenance",
      description: "Ongoing support and updates to keep your site running smoothly",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Working with Anand Digital PR transformed our brand's visibility in the market.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2940&auto=format&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, InnovateCo",
      content: "Their strategic approach to digital PR helped us achieve unprecedented growth.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
    },
    {
      name: "Emma Williams",
      role: "Founder, EcoSolutions",
      content: "The team's dedication and expertise made all the difference in our campaign success.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop",
    },
  ];

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Best Digital Marketing and PR Agency in Noida, Delhi | Anand Digital PR</title>
        <meta name="description" content="Boost your brand with Anand Digital PR – Delhi's top digital marketing and PR agency for SEO, content, media coverage, and online growth." />
        <meta name="keywords" content="Digital Marketing Agency in Delhi, PR Agency in Delhi, Digital Marketing Agency in Noida, PR Agency in Noida" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ananddigitalpr.com" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                  <div className="max-w-4xl">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h1 className="text-4xl md:text-6xl font-extrabold">{slide.title}</h1>
                      <p className="text-xl mt-4">{slide.description}</p>
                      <div className="mt-6">
                        <button
                          onClick={() => navigate('/about')} // Navigate to the About page
                          className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg"
                        >
                          Know More
                        </button>
                        <button
                          onClick={() => navigate('/contact')} // Navigate to the Contact page
                          className="ml-4 bg-transparent text-white border-2 border-white px-6 py-3 rounded-full text-lg"
                        >
                          Get Started
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Why Choose Us Section */}
      <WhyChoose />

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-indigo-600">What Our Clients Say</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
