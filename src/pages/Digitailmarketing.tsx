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
  const [refAbout, inViewAbout] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    { icon: <TrendingUp className="w-12 h-12 text-indigo-600" />, title: "SEO Services", description: "Rank higher on Google with ethical SEO practices that deliver long-term results." },
    { icon: <BarChart2 className="w-12 h-12 text-indigo-600" />, title: "Performance Marketing", description: "Maximize ROI with PPC ads, social media marketing, and conversion-optimized strategies." },
    { icon: <Globe className="w-12 h-12 text-indigo-600" />, title: "Digital PR", description: "Build authority & backlinks through strategic online PR campaigns." },
    { icon: <Code className="w-12 h-12 text-indigo-600" />, title: "Website Development", description: "Design & develop high-performing, SEO-friendly websites." },
    { icon: <Shield className="w-12 h-12 text-indigo-600" />, title: "Online Reputation Management", description: "Protect and enhance your brand’s reputation with smart digital tactics." },
    { icon: <FileText className="w-12 h-12 text-indigo-600" />, title: "Content Marketing", description: "Craft compelling content that informs, engages, and converts." }
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
