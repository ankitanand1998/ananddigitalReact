import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Helmet } from 'react-helmet';
import Footer from "../components/Footer";
import {
  TrendingUp,
  BarChart2,
  Globe,
  Code,
  Shield,
  FileText,
  Users,
  CheckSquare,
  Calendar,
  Star,
  HeartPulse,
  BookOpen,
  ShoppingBag,
  Network
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Digitailmarketing = () => {
 const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

const heroSlides = [

    {
      title: 'Best Digital Marketing and PR Agency in Delhi NCR & Noida',
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
    { icon: <TrendingUp className="w-12 h-12 text-indigo-600" />, title: "SEO Services",   description: "We carefully analyze your website and work to organically boost high-quality traffic, helping your pages rank better on search engines."},
    { icon: <BarChart2 className="w-12 h-12 text-indigo-600" />, title: "Performance Marketing", description: "Maximize ROI with PPC ads, social media marketing, and conversion-optimized strategies." },
    { icon: <BarChart2 className="w-12 h-12 text-indigo-600" />, title: "Social Media Marketing", description: "Our social media marketing team helps your business grow and connect with the right audience on platforms like Facebook, Instagram, and more." },
    { icon: <BarChart2 className="w-12 h-12 text-indigo-600" />, title: "Google Ads", description: "Our team helps your business grow and drive traffic by advertising it on Google. It will also benefit the sale of your products or services." },
    { icon: <TrendingUp className="w-12 h-12 text-indigo-600" />, title: "Lead Generation", description: "Our digital marketing services are designed to drive quality leads, grow your business, and help you reach top rankings online." },
   
    { icon: <Globe className="w-12 h-12 text-indigo-600" />, title: "Digital PR", description: "Engage your target audience, build a trusted brand, and maximize your online visibility and reputation with our dynamic Digital PR services." },
    { icon: <Code className="w-12 h-12 text-indigo-600" />, title: "Website Development", description: "We go the extra mile to ensure our clients are fully satisfied. Our team supports every aspect of your development from design and visuals to content and overall experience." },
    { icon: <Shield className="w-12 h-12 text-indigo-600" />, title: "Branding", description: "We specialize in creating compelling brand identities that connect with your audience, communicate your unique value, and drive meaningful business growth." },
    { icon: <FileText className="w-12 h-12 text-indigo-600" />, title: "Content Marketing", description: "Our content marketing services help your business engage with your target audience while building trust, authority, and brand leadership." }
  ];

  const facts = [
    { icon: <Users className="w-12 h-12 text-indigo-600" />, title: "100+ Happy Clients", description: "Clients who choose us once stay with us for ongoing digital growth." },
    { icon: <CheckSquare className="w-12 h-12 text-indigo-600" />, title: "200+ Projects Completed", description: "With unwavering dedication, we’ve successfully delivered over 200 digital projects." },
    { icon: <Calendar className="w-12 h-12 text-indigo-600" />, title: "5+ Years In Business", description: "Serving diverse industries with custom solutions for more than five years." },
    { icon: <Star className="w-12 h-12 text-indigo-600" />, title: "4.5 Average Rating", description: "Our clients consistently rate us high for quality, communication, and results." }
  ];

  const brandtrust = [
    { icon: <HeartPulse className="w-12 h-12 text-indigo-600" />, title: "Healthcare", description: "Helping doctors, clinics, and hospitals grow their digital presence with ethical promotion." },
    { icon: <BookOpen className="w-12 h-12 text-indigo-600" />, title: "EdTech", description: "We help edtech startups and institutions boost leads and enrollments with strategic digital outreach." },
    { icon: <ShoppingBag className="w-12 h-12 text-indigo-600" />, title: "Ecommerce", description: "We optimize product visibility and drive targeted traffic to ecommerce websites for higher conversions." },
    { icon: <Network className="w-12 h-12 text-indigo-600" />, title: "B2B", description: "Our tailored campaigns help B2B businesses attract qualified leads and nurture partnerships online." }
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

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Best Services For Digital Marketing</h2>
            <p className="text-xl text-gray-600">Comprehensive PR & Digital solutions for your success</p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-6">{s.icon}</div>
                    <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
                    <p className="text-gray-600">{s.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Company Facts - Anand Digital PR</h2>
            <p className="text-xl text-gray-600">Here are proven track records that make us a trusted digital partner.</p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-8">
            {facts.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-6">{f.icon}</div>
                    <h3 className="text-2xl font-semibold mb-4">{f.title}</h3>
                    <p className="text-gray-600">{f.description}</p>
                  </div>
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
                <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-6">{b.icon}</div>
                    <h3 className="text-2xl font-semibold mb-4">{b.title}</h3>
                    <p className="text-gray-600">{b.description}</p>
                  </div>
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
