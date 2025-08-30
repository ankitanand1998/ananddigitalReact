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
    { icon: <TrendingUp className="w-12 h-12 text-indigo-600" />, title: "SEO Services in Surat", description: "Optimize your site to rank higher on Google and attract quality leads with our expert SEO strategies tailored for Surat businesses." },
    { icon: <BarChart2 className="w-12 h-12 text-indigo-600" />, title: "Performance Marketing", description: "Drive maximum ROI with targeted PPC ads, social media campaigns, and data-backed strategies." },
    { icon: <BarChart2 className="w-12 h-12 text-indigo-600" />, title: "Social Media Marketing Surat", description: "Build a loyal audience and boost brand engagement across Facebook, Instagram, LinkedIn, and more." },
    { icon: <BarChart2 className="w-12 h-12 text-indigo-600" />, title: "Google Ads Campaigns", description: "Get instant traffic and conversions with our expertly managed Google Ads campaigns for Surat businesses." },
    { icon: <TrendingUp className="w-12 h-12 text-indigo-600" />, title: "Lead Generation", description: "We generate high-quality, sales-ready leads to help Surat businesses grow faster." },
    { icon: <Globe className="w-12 h-12 text-indigo-600" />, title: "Digital PR", description: "Enhance your brand reputation and reach with our powerful online PR services in Surat." },
    { icon: <Code className="w-12 h-12 text-indigo-600" />, title: "Website Development", description: "Modern, responsive, and conversion-focused websites built for Surat’s competitive market." },
    { icon: <Shield className="w-12 h-12 text-indigo-600" />, title: "Branding", description: "We help Surat brands create unique identities that leave a lasting impression." },
    { icon: <FileText className="w-12 h-12 text-indigo-600" />, title: "Content Marketing", description: "Engage your audience with high-quality content that builds authority and trust." }
  ];

  const facts = [
    { icon: <Users className="w-12 h-12 text-indigo-600" />, title: "150+ Happy Surat Clients", description: "We work with businesses across Surat, delivering measurable results and lasting partnerships." },
    { icon: <CheckSquare className="w-12 h-12 text-indigo-600" />, title: "300+ Projects Completed", description: "Our track record in Surat speaks for itself with hundreds of successful campaigns." },
    { icon: <Calendar className="w-12 h-12 text-indigo-600" />, title: "5+ Years Experience", description: "Trusted by Surat businesses for over half a decade, delivering growth-focused strategies." },
    { icon: <Star className="w-12 h-12 text-indigo-600" />, title: "4.9/5 Client Rating", description: "We’re proud to maintain one of the highest client satisfaction scores in Surat." }
  ];

  const brandtrust = [
    { icon: <HeartPulse className="w-12 h-12 text-indigo-600" />, title: "Healthcare", description: "Helping Surat healthcare brands increase patient trust and online visibility." },
    { icon: <BookOpen className="w-12 h-12 text-indigo-600" />, title: "Education", description: "Driving enrollments for Surat’s leading educational institutions." },
    { icon: <ShoppingBag className="w-12 h-12 text-indigo-600" />, title: "E-commerce", description: "Boosting sales and ROI for Surat-based online stores." },
    { icon: <Network className="w-12 h-12 text-indigo-600" />, title: "B2B", description: "Helping Surat B2B companies generate leads and establish authority." }
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
          Anand Digital PR is a trusted <a href="https://www.ananddigitalpr.com" className="text-blue-600 hover:underline">digital marketing company </a> in Surat that delivers measurable business growth. From SEO to social media, our strategies are tailored to Surat’s competitive market, ensuring maximum ROI. <br />
We understand that every business in Surat has its own story, audience, and unique challenges. That’s why we don’t believe in “one-size-fits-all” marketing. Instead, we take the time to understand your goals, analyze your market, and create strategies that truly connect with your target customers. <br />
Whether you’re looking to dominate local search results, create a buzz on social media, or run highly targeted ad campaigns, our team is here to make it happen. We combine data-driven insights with creative thinking to ensure your brand not only gets noticed but also wins trust and loyalty. <br />
From small startups to established brands, we’ve helped businesses across Surat increase leads, improve brand visibility, and achieve sustainable growth. Every click, like, and share is backed by a clear strategy aimed at delivering real results. <br />
At Anand Digital PR, your success is our priority — and we’re ready to help you turn your digital presence into a powerful growth engine for your business.
          </p>

           <h2 className="text-2xl font-semibold mt-6">Why Choose a Digital Marketing Agency in Surat?</h2>
            Surat is one of India’s fastest-growing business hubs. With industries
            ranging from textiles to IT, competition is fierce. A specialized
            digital marketing agency in Surat ensures your business stands out by
            leveraging local insights, SEO strategies, and creative campaigns. <br /><br />

            <h2 className="text-2xl font-semibold mt-6">Tailored Strategies for Surat Businesses</h2>
            We understand that every business in Surat has its own story,
            audience, and challenges. That’s why we don’t believe in
            one-size-fits-all marketing. Instead, we analyze your goals, study
            your competition, and create strategies designed to connect with your
            target audience. <br /><br />

            <h2 className="text-2xl font-semibold mt-6">Local SEO Focus</h2>
            Whether you want to dominate “near me” searches or appear in Surat’s
            local directories, our local SEO strategies ensure your brand is
            visible where it matters most. <br /><br />

            <h2 className="text-2xl font-semibold mt-6">Data-Driven Marketing</h2>
            Every campaign we design for Surat businesses is based on analytics
            and measurable KPIs, ensuring your marketing budget drives real
            results. <br /><br />

            <h2 className="text-2xl font-semibold mt-6">Creative Social Media Presence</h2>
            Our Surat social media marketing experts build engagement-driven
            strategies to grow your followers and boost brand loyalty. <br /><br />

            <h2 className="text-2xl font-semibold mt-6">Trusted by Surat Startups and Enterprises</h2>
            From local startups to leading enterprises in Surat, Anand Digital PR
            has helped businesses increase leads, improve visibility, and achieve
            sustainable growth. <br /><br />

            <h2 className="text-2xl font-semibold mt-6">Affordable Digital Marketing Services</h2>
            We believe in delivering premium results without overpricing. Our
            packages are designed to be cost-effective for Surat businesses of
            all sizes. <br /><br />

            <h2 className="text-2xl font-semibold mt-6">Industries We Serve in Surat</h2>
            From real estate, healthcare, and e-commerce to education and local
            services, we have experience in driving success across multiple
            industries in Surat. <br /><br />
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
            <p className="text-xl text-gray-600">A proven record of delivering business growth in Surat.</p>
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

      <Footer />
    </div>
  );
};

export default DigitalMarketingSurat;
