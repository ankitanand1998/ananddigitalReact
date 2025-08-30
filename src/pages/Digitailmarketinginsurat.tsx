import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Helmet } from 'react-helmet';
import Footer from "../components/Footer";
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  TrendingUp, BarChart2, Globe, Code, Shield, FileText, Users, CheckSquare, Calendar, Star,
  HeartPulse, BookOpen, ShoppingBag, Network, ArrowRight
} from 'lucide-react';

import Ananddigitalpr1 from '../Images/best-digital-marketing-agency.jpg';
import Ananddigitalpr2 from '../Images/digital-marketing-agency-in-surat.jpg';
import Ananddigitalpr3 from '../Images/india-best-digital-marketing-agency.jpg';

const DigitalMarketingSurat = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const heroSlides = [
    {
      title: 'Digital Marketing Agency in Surat, Gujarat',
      description: 'Anand Digital PR is a leading digital marketing agency in Surat. Our data-driven campaigns are designed to boost visibility, generate leads, and deliver measurable ROI.',
      image: Ananddigitalpr1,
    },
    {
      title: 'Ranked in the Top Digital Marketing Companies in Surat',
      description: 'Recognized as one of Surat’s top-rated digital marketing companies, we combine SEO, PPC, social media, and PR strategies for maximum impact.',
      image: Ananddigitalpr2,
    },
    {
      title: 'Complete Growth Solutions: SEO, Social Media, PPC & PR',
      description: 'From building brand authority to generating high-quality leads, we provide all-in-one digital marketing solutions for Surat businesses.',
      image: Ananddigitalpr3,
    },
  ];

  const services = [
    {
      icon: <TrendingUp className="w-12 h-12 text-indigo-600" />,
      title: "Search Engine Optimization (SEO)",
      description: "We help Surat businesses dominate Google rankings through keyword research, on-page SEO, technical fixes, and quality backlinks. Our strategies drive long-term visibility and qualified traffic."
    },
    {
      icon: <BarChart2 className="w-12 h-12 text-indigo-600" />,
      title: "Social Media Marketing (SMM)",
      description: "From Instagram reels to LinkedIn ads, we design campaigns that build awareness, trust, and engagement. Perfect for Surat’s vibrant and social-savvy audience."
    },
    {
      icon: <Globe className="w-12 h-12 text-indigo-600" />,
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Our Google Ads and Meta Ads campaigns generate instant, measurable results. With laser-focused targeting, we maximize ROI and reduce wasted ad spend."
    },
    {
      icon: <FileText className="w-12 h-12 text-indigo-600" />,
      title: "Content Marketing",
      description: "We create blogs, landing pages, and videos that tell your brand’s story while boosting SEO. Content that attracts, engages, and converts your audience in Surat."
    },
    {
      icon: <Shield className="w-12 h-12 text-indigo-600" />,
      title: "Online Reputation Management (ORM)",
      description: "We monitor reviews, manage brand mentions, and build a trustworthy reputation across platforms—helping Surat businesses win long-term customer confidence."
    },
    {
      icon: <Code className="w-12 h-12 text-indigo-600" />,
      title: "Website Development",
      description: "Fast, mobile-first, SEO-optimized websites that convert visitors into paying customers. Designed for Surat’s competitive market with growth in mind."
    }
  ];

  const facts = [
    {
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      title: "150+ Successful Projects",
      description: "From healthcare to real estate, we’ve delivered growth-focused campaigns for a variety of Surat-based businesses."
    },
    {
      icon: <CheckSquare className="w-12 h-12 text-indigo-600" />,
      title: "90% Client Retention",
      description: "Our clients trust us because we focus on ROI, not vanity metrics. Long-term relationships are our biggest achievement."
    },
    {
      icon: <Calendar className="w-12 h-12 text-indigo-600" />,
      title: "10+ Years of Experience",
      description: "A decade of expertise in SEO, PPC, and digital strategy allows us to solve the toughest marketing challenges in Surat."
    },
    {
      icon: <Star className="w-12 h-12 text-indigo-600" />,
      title: "4.9/5 Client Rating",
      description: "Our transparency and performance have earned us one of the highest satisfaction ratings among Surat businesses."
    }
  ];

  const brandtrust = [
    {
      icon: <HeartPulse className="w-12 h-12 text-indigo-600" />,
      title: "Healthcare",
      description: "Helping hospitals and clinics in Surat attract patients with SEO and targeted campaigns."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-indigo-600" />,
      title: "Education",
      description: "Supporting coaching centers and institutes with digital campaigns that increase student enrollments."
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-indigo-600" />,
      title: "Retail & E-commerce",
      description: "Driving sales for Surat-based online and offline retailers through e-commerce SEO and paid ads."
    },
    {
      icon: <Network className="w-12 h-12 text-indigo-600" />,
      title: "Real Estate & B2B",
      description: "Generating quality leads for Surat’s real estate developers and B2B companies with precision targeting."
    }
  ];

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Best Digital Marketing Agency in Surat | Anand Digital PR</title>
        <meta name="description" content="Anand Digital PR – Surat’s trusted digital marketing agency for SEO, PPC, social media, and branding. Get guaranteed growth for your business." />
        <meta name="keywords" content="Digital Marketing Agency Surat, SEO Company Surat, Best Digital Marketing Company Surat" />
        <link rel="canonical" href="https://www.ananddigitalpr.com/india/gujarat/digital-marketing-company-surat" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen">
        <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 5000 }} loop className="h-full">
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
                  <div className="max-w-4xl">
                    <motion.div className="text-5xl md:text-6xl font-bold mb-6">{slide.title}</motion.div>
                    <motion.p className="text-xl md:text-2xl mb-8">{slide.description}</motion.p>
                    <a href="/contact" className="bg-indigo-600 px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-indigo-700">
                      Get Started <ArrowRight size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* About Section */}
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Top Digital Marketing Agency in Surat with Proven Results</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Anand Digital PR is a trusted <a href="https://www.ananddigitalpr.com" className="text-blue-600 hover:underline">digital marketing company</a> in Surat that delivers measurable growth. From SEO to social media, our strategies are tailored to Surat’s competitive market. <br /><br />
            We understand that every business has its own story, audience, and challenges. That’s why we don’t believe in “one-size-fits-all.” Instead, we analyze your goals, market, and competition before designing campaigns that connect with your customers. <br /><br />
            Whether you want to dominate Google search, build engagement on Instagram, or generate leads through PPC, our team combines data insights with creativity to ensure your brand gets noticed, trusted, and remembered. <br /><br />
            Over the years, we’ve helped startups and established brands in Surat boost leads, visibility, and conversions. Every campaign is built with one goal—delivering real ROI. <br /><br />
            At Anand Digital PR, your success is our mission. Let us turn your digital presence into Surat’s next big success story.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Best Digital Marketing Services in Surat</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions to grow your Surat business online</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="mb-6">{s.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
                  <p className="text-gray-600">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Success Story</h2>
            <p className="text-xl text-gray-600">A proven record of delivering business growth in Surat</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {facts.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                  <div className="mb-6">{f.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{f.title}</h3>
                  <p className="text-gray-600">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industries We Served</h2>
            <p className="text-xl text-gray-600">Helping Surat’s top industries thrive online</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {brandtrust.map((b, i) => (
              <motion.div key={i}>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="mb-6">{b.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{b.title}</h3>
                  <p className="text-gray-600">{b.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-white text-center px-4">
        <h2 className="text-4xl font-bold mb-6">Why Choose Anand Digital PR?</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          With a proven record of results, local expertise in Surat, and a team of certified digital marketers, we deliver more than traffic—we deliver business growth. Our focus is on transparency, ROI, and building long-term trust with our clients.
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business in Surat?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          At Anand Digital PR, we combine experience, expertise, and trust to make your digital journey a success. Whether it’s SEO, PPC, or social media, our strategies are built for growth.
        </p>
        <a href="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-gray-100">
          Get Your Free Consultation <ArrowRight size={20} />
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketingSurat;
