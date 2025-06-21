import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Helmet } from 'react-helmet';
import Footer from "../components/Footer";
import ClientReviews1 from '../Images/Client-Reviews-Erica-Koomsom.png';
import ClientReviews2 from '../Images/Client-Reviews-Nishant-Kumar.png';
import ClientReviews3 from '../Images/Client-Reviews-sk-saifuddin.png';
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Trophy,
  Rocket,
  TrendingUp,
  Mail,
  BarChart,
  Network,
  Megaphone,
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Digitailmarketing = () => {
  const [refAbout, inViewAbout] = useInView({ triggerOnce: true, threshold: 0.1 });

  const heroSlides = [
    {
      title: "Grow Your Business With Digital Marketing",
      description: "We help businesses increase revenue through performance marketing.",
      image: "https://www.ananddigitalpr.com/assets/hero-bg-1.jpg",
    },
    {
      title: "Increase Online Visibility",
      description: "Be seen. Be found. Get results with our SEO & PR expertise.",
      image: "https://www.ananddigitalpr.com/assets/hero-bg-2.jpg",
    },
  ];

 const services = [
    {
      icon: <BarChart className="w-12 h-12 text-indigo-600" />, title: "SEO Services", description: "Rank higher on Google with ethical SEO practices that deliver long-term results."
    },
    {
      icon: <Rocket className="w-12 h-12 text-indigo-600" />, title: "Performance Marketing", description: "Maximize ROI with PPC ads, social media marketing, and conversion-optimized strategies."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-indigo-600" />, title: "Digital PR", description: "Build authority & backlinks through strategic online PR campaigns."
    },
    {
      icon: <Monitor className="w-12 h-12 text-indigo-600" />, title: "Website Development", description: "Design & develop high-performing, SEO-friendly websites."
    },
    {
      icon: <Shield className="w-12 h-12 text-indigo-600" />, title: "Online Reputation Management", description: "Protect and enhance your brand’s reputation with smart digital tactics."
    },
    {
      icon: <PenTool className="w-12 h-12 text-indigo-600" />, title: "Content Marketing", description: "Craft compelling content that informs, engages, and converts."
    }
  ];

  const facts = [
    {
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      title: "100+ Happy Clients",
      description: "Clients who choose us once stay with us for ongoing digital growth.",
    },
    {
      icon: <Trophy className="w-12 h-12 text-indigo-600" />,
      title: "200+ Projects Completed",
      description: "With unwavering dedication, we’ve successfully delivered over 200 digital projects.",
    },
    {
      icon: <Megaphone className="w-12 h-12 text-indigo-600" />,
      title: "5+ Years In Business",
      description: "Serving diverse industries with custom solutions for more than five years.",
    },
    {
      icon: <Network className="w-12 h-12 text-indigo-600" />,
      title: "4.5 Average Rating",
      description: "Our clients consistently rate us high for quality, communication, and results.",
    }
  ];

  const brandtrust = [
    {
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      title: "Healthcare",
      description: "Helping doctors, clinics, and hospitals grow their digital presence with ethical promotion.",
    },
    {
      icon: <Trophy className="w-12 h-12 text-indigo-600" />,
      title: "EdTech",
      description: "We help edtech startups and institutions boost leads and enrollments with strategic digital outreach.",
    },
    {
      icon: <Megaphone className="w-12 h-12 text-indigo-600" />,
      title: "Ecommerce",
      description: "We optimize product visibility and drive targeted traffic to ecommerce websites for higher conversions.",
    },
    {
      icon: <Network className="w-12 h-12 text-indigo-600" />,
      title: "B2B",
      description: "Our tailored campaigns help B2B businesses attract qualified leads and nurture partnerships online.",
    }
  ];

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Digital Marketing Company in Noida - Guaranteed Results | Anand Digital PR</title>
        <meta name="description" content="Looking for a result-driven digital marketing agency in Noida? Anand Digital PR offers SEO, performance marketing & PR strategies that drive business growth." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Anand Digital PR",
            "url": "https://www.ananddigitalpr.com",
            "logo": "https://www.ananddigitalpr.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/ananddigitalpr",
              "https://twitter.com/ananddigitalpr",
              "https://www.linkedin.com/company/ananddigitalpr"
            ],
            "description": "A top digital marketing and PR agency in Noida offering SEO, performance marketing, and digital branding solutions.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Noida",
              "addressRegion": "UP",
              "addressCountry": "IN"
            }
          }`}</script>
      </Helmet>

      <section className="relative h-screen">
        <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 5000 }} loop>
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-full">
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
                  <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-6xl font-bold">{slide.title}</motion.h2>
                  <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-xl md:text-2xl my-6">{slide.description}</motion.p>
                  <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white px-8 py-3 rounded-full inline-flex items-center gap-2">
                    <a href="/contact">Get Started <ArrowRight /></a>
                  </motion.button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section ref={refAbout} className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inViewAbout ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-bold mb-6">Digital Marketing Agency & Company in India, Noida</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Anand Digital PR is a globally recognized digital marketing agency based in Noida helping businesses grow their online presence through SEO, performance marketing, and digital PR strategies.
            </p>
            <a href="/about"><motion.button className="mt-8 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white px-8 py-3 rounded-full inline-flex items-center gap-2">Know More <ArrowRight /></motion.button></a>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Best Services For Digital Marketing</h2>
            <p className="text-xl text-gray-600">Comprehensive PR & Digital solutions for your success</p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
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

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Company Facts - Anand Digital PR</h2>
            <p className="text-xl text-gray-600">Here are proven track records that make us a trusted digital partner.</p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-8">
            {facts.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
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

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Leading Industry Trust Us</h2>
            <p className="text-xl text-gray-600">Trusted by leaders across industries</p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-8">
            {brandtrust.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
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

export default Digitailmarketing;
