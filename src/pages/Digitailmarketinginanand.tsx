import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Helmet } from 'react-helmet';
import Footer from "../components/Footer";
import WhyChoose from "../components/WhyChoose";
import  About from "./About"
import  Contact from "./Contact"
import ClientReviews1 from '../Images/Client-Reviews-Erica-Koomsom.png';
import ClientReviews2 from '../Images/Client-Reviews-Nishant-Kumar.png';
import ClientReviews3 from '../Images/Client-Reviews-sk-saifuddin.png';
import {
   TrendingUp,
  BarChart2,
  BarChart,
  Globe,
  Code,
  Shield,
  ShieldCheck,
  FileText,
  Users,
  CheckSquare,
  Calendar,
  Star,
  HeartPulse,
  BookOpen,
  ShoppingBag,
  Network,
  ArrowRight,
  CheckCircle2,
  Rocket,
  Trophy,
  Monitor,
  Mail,
  PenTool,
  ClipboardList,
  Megaphone
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
      title: 'Digital Marketing Agency in Anand, Gujarat',
      description: 'Anand Digital PR is one of the top digital marketing agencies in Anand. We have a data-driven approach when it comes to crafting digital campaigns and delivering maximum sales, conversions, and ROI.',

      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1920",
    },
    {
      title: 'Ranked in the Top 10 Best Integrated Search (SEO & PPC) Companies',
      description: 'Ranked among the Top 10 Best Integrated Search (SEO & PPC) Companies, we deliver data-driven strategies that maximize visibility and ROI. Our unified approach ensures seamless synergy between organic and paid search campaign',

      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1920",
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
    { icon: <Users className="w-12 h-12 text-indigo-600" />, title: "100+ Happy Clients", description: "Clients who choose us once stay with us, because we truly understand their needs and consistently deliver results that exceed expectations." },
    { icon: <CheckSquare className="w-12 h-12 text-indigo-600" />, title: "200+ Projects Completed", description: "With unwavering dedication and hard work, we’ve proudly completed over 200 projects." },
    { icon: <Calendar className="w-12 h-12 text-indigo-600" />, title: "5+ Years In Business", description: "In the last 5+ years, we have been diligently working toward our goal of providing hassle-free digital solutions for every business" },
    { icon: <Star className="w-12 h-12 text-indigo-600" />, title: "4.5 Average Rating", description: "With a 4.85 satisfaction rating from both clients and team members, we’re proud to be one of anand’s most trusted and preferred digital agencies." }
  ];

  const brandtrust = [
    { icon: <HeartPulse className="w-12 h-12 text-indigo-600" />, title: "Healthcare", description: "We stand out in the competitive healthcare industry by building trust and enhancing visibility among the right audience." },
    { icon: <BookOpen className="w-12 h-12 text-indigo-600" />, title: "EdTech", description: "Helping educational institutions to increase student enrollments and stand out in today’s competitive market is what we do best." },
    { icon: <ShoppingBag className="w-12 h-12 text-indigo-600" />, title: "Ecommerce", description: "Maximizing sales and conversions with our data-driven strategies are always a hit among ecommerce brands." },
    { icon: <Network className="w-12 h-12 text-indigo-600" />, title: "B2B", description: "We focus on generating high-quality leads, strengthening your brand authority, and driving sustainable growth in your niche industry." }
  ];

  return (
    <div className="overflow-hidden">
      <Helmet>
        {/* Title and Description */}
        <title>Best Digital Marketing Agency in Anand</title>
        <meta name="description" content="Boost your brand with Anand Digital PR – Anand's top digital marketing agency for SEO, content, media coverage, and online growth." />
        <meta name="keywords" content="Digital Marketing Company in Anand, Best Digital Marketing Agency Anand" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ananddigitalpr.com/india/gujarat/digital-marketing-company-anand" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ananddigitalpr.com/india/gujarat/digital-marketing-company-anand" />
        <meta property="og:title" content="Best Digital Marketing Agency in Anand | Anand Digital PR" />
        <meta property="og:description" content="Boost your brand with Anand Digital PR – Anand's top digital marketing agency for SEO, content, media coverage, and online growth." />
        <meta property="og:image" content="https://www.ananddigitalpr.com/india/gujarat/digital-marketing-company-anandog-image.jpg" /> {/* Replace with actual image URL */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.ananddigitalpr.com/india/gujarat/digital-marketing-company-anand" />
        <meta name="twitter:title" content="Digital Marketing Company, Best Digital Marketing Agency in Anand | Anand Digital PR" />
        <meta name="twitter:description" content="Boost your brand with Anand Digital PR – Anand's top digital marketing agency for SEO, content, media coverage, and online growth." />
        <meta name="twitter:image" content="https://www.ananddigitalpr.com/og-image.jpg" />

     <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Anand Digital PR",
      "url": "https://www.ananddigitalpr.com/india/gujarat/digital-marketing-company-anand",
      "logo": "https://www.ananddigitalpr.com/logo.png",
      "description": "Boost your brand with Anand Digital PR – Anand's top digital marketing agency for SEO, content, media coverage, and online growth.",
      "sameAs": [
        "https://www.facebook.com/ananddigitalpr",
        "https://www.linkedin.com/in/anand-digital-pr-a-digital-marketing-and-pr-agency-96078a33b/",
        "https://www.instagram.com/ananddigitalpr"
      ],
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "+91-8340426515",
        "contactType": "Customer Service",
        "email": "sales.ananddigitalpr@gmail.com",
        "url": "https://www.ananddigitalpr.com/contact",
        "areaServed": "IN",
        "availableLanguage": "English"
      }],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gujarat",
        "addressLocality": "Anand",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
      "areaServed": "IN",
      "availableLanguage": "English",
      "foundingDate": "2020",
      "founders": [{
        "@type": "Person",
        "name": "Ankit Anand"
      }],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "250"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Erica Koomson"
          },
          "datePublished": "2024-12-10",
          "reviewBody": "Anand Digital PR took my brand to the next level! Their bold ideas, fresh strategies, and unstoppable energy made a huge difference. If you want marketing that truly stands out, Anand Digital PR is the name to trust!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Nishant Kumar"
          },
          "datePublished": "2025-02-03",
          "reviewBody": "Anand Digital PR has been a trusted partner in growing my brand. Their strategic approach, creativity, and consistent results set them apart. If you’re serious about building a strong digital presence, they’re the agency you can rely on.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.8",
            "bestRating": "5"
          }
        }
      ],
      "keywords": "Digital Marketing Agency in Gujarat, Digital Marketing Agency in Anand"
    },
    {
      "@type": "WebSite",
      "url": "https://www.ananddigitalpr.com",
      "name": "Anand Digital PR",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.ananddigitalpr.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.ananddigitalpr.com"
        }
      ]
    }
  ]
}
`}
</script>

     </Helmet>


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
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-6xl font-bold mb-6"
      >
        {slide.title}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-xl md:text-2xl mb-8"
      >
        {slide.description}
      </motion.p>

      <motion.button
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="bg-indigo-600 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-indigo-700 transition-colors"
>
  <a href="/contact" className="flex items-center gap-2">
    Get Started <ArrowRight size={20} />
  </a>
</motion.button>

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

       

      {/* About Section */}
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
           className="text-center mb-16"
          >
             <h1 className="text-4xl font-bold mb-6">Best Digital Marketing Agency & Company in Anand that Offers Guaranteed Results</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Anand Digital PR is a globally recognized <a href="https://www.ananddigitalpr.com" className="text-blue-600 hover:underline">digital marketing agency</a> in Anand, Gujarat known for redefining quality standards in the digital marketing landscape.
We continuously push the boundaries to meet and exceed client expectations in the ever-evolving world of marketing and advertising. As one of the most innovative and client-focused digital marketing companies in Anand, we take pride in delivering impactful, results-driven solutions tailored to each brand’s unique needs.
            </p>
          <a href="/">
  <button className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-indigo-700 transition-colors">
    Know More <ArrowRight size={20} />
  </button>
</a>
</motion.div>
        </div>
      </section>
      {/* About Section */}
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
             <h2 className="text-4xl font-bold mb-6">Work with the Leading Digital Marketing Company in Anand, Gujarat Where Great Results Come Fast</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help you achieve holistic growth with clear vision and deliver a value-driven experience for your customers all while maintaining the highest quality standards.<br/>
Anand Digital PR is one of the best digital marketing agencies in Anand, Gujarat offering a comprehensive 360-degree digital service portfolio. We've carved out our niche as a trusted name in the industry, growing steadily through experience, expertise, and a commitment to excellence building success brick by brick.<br/>
With a focused and strategic approach, we identify the right digital opportunities that allow us to help our clients overcome complex business challenges and drive meaningful results.
</p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Best Services For Digital Marketing in Anand, Gujarat</h2>
            <p className="text-xl text-gray-600">Comprehensive Digital solutions for your success in Anand, Gujarat</p>
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
            <p className="text-xl text-gray-600">Here are proven track records that make us a trusted digital partner in Anand, Gujarat.</p>
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

