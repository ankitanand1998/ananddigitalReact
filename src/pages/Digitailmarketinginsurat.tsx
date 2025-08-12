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

const DigitalMarketingSurat = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const heroSlides = [
    {
      title: 'Digital Marketing Agency in Surat, Gujarat',
      description: 'Anand Digital PR is a leading digital marketing agency in Surat. Our data-driven campaigns are designed to boost visibility, generate leads, and deliver measurable ROI.',
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1920",
    },
    {
      title: 'Ranked in the Top Digital Marketing Companies in Surat',
      description: 'Recognized as one of Surat’s top-rated digital marketing companies, we combine SEO, PPC, social media, and PR strategies for maximum impact.',
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1920",
    },
    {
      title: 'Complete Growth Solutions: SEO, Social Media, PPC & PR',
      description: 'From building brand authority to generating high-quality leads, we provide all-in-one digital marketing solutions for Surat businesses.',
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "Data-Driven Campaigns in Surat",
      description: "We create campaigns backed by analytics, ensuring every strategy maximizes your returns.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: 'We Build Brands & Deliver Measurable Results in Surat',
      description: "Our creative PR and marketing strategies help Surat businesses stand out and succeed.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
    }
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
            Anand Digital PR is a trusted <a href="https://www.ananddigitalpr.com" className="text-blue-600 hover:underline">digital marketing company in Surat</a> that delivers measurable business growth. From SEO to social media, our strategies are tailored to Surat’s competitive market, ensuring maximum ROI.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Digital Marketing Services in Surat</h2>
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
            <h2 className="text-4xl font-bold mb-6">Our Success in Surat</h2>
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
            <h2 className="text-4xl font-bold mb-6">Industries We Serve in Surat</h2>
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
