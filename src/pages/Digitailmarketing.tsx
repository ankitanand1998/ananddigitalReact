
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
    // Public Relations
    {
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      title: "SEO Service",
      description: "We carefully analyze your website and work to organically boost high-quality traffic, helping your pages rank better on search engines.",
    },
    {
      icon: <Trophy className="w-12 h-12 text-indigo-600" />,
      title: "Social Media Marketing",
      description: "Our social media marketing team helps your business grow and connect with the right audience on platforms like Facebook, Instagram, and more.",
    },
    {
      icon: <Megaphone className="w-12 h-12 text-indigo-600" />,
      title: "Google Ads",
      description: "Our team helps your business grow and drive traffic by advertising it on Google. It will also benefit the sale of your products or services.",
    },
    {
      icon: <Network className="w-12 h-12 text-indigo-600" />,
      title: "Custom Website Design",
      description: "We go the extra mile to ensure our clients are fully satisfied. Our team supports every aspect of your development from design and visuals to content and overall experience.",
    },

    // Digital Marketing
    {
      icon: <Rocket className="w-12 h-12 text-indigo-600" />,
      title: "Lead Generation",
      description: "Our digital marketing services are designed to drive quality leads, grow your business, and help you reach top rankings online.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-indigo-600" />,
      title: "Content Marketing",
      description: "Our content marketing services help your business engage with your target audience while building trust, authority, and brand leadership.",
    },
    {
      icon: <Mail className="w-12 h-12 text-indigo-600" />,
      title: "Digital PR",
      description: "Engage your target audience, build a trusted brand, and maximize your online visibility and reputation with our dynamic Digital PR services.",
    },
    {
      icon: <BarChart className="w-12 h-12 text-indigo-600" />,
      title: "Branding",
      description: "We specialize in creating compelling brand identities that connect with your audience, communicate your unique value, and drive meaningful business growth.",
    },
];


   const facts = [
    // Public Relations
    {
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      title: "100+ Happy Clients",
      description: "Clients who choose us once stay with us, because we truly understand their needs and consistently deliver results that exceed expectations.",
    },
    {
      icon: <Trophy className="w-12 h-12 text-indigo-600" />,
      title: "200+ Projects Completed",
      description: "With unwavering dedication and hard work, we’ve proudly completed over 200 projects",
    },
    {
      icon: <Megaphone className="w-12 h-12 text-indigo-600" />,
      title: "5+ Years In Business",
      description: "In the last 5+ years, we have been diligently working toward our goal of providing hassle-free digital solutions for every business.",
    },
    {
      icon: <Network className="w-12 h-12 text-indigo-600" />,
      title: "4.5 Average Rating",
      description: "With a 4.85 satisfaction rating from both clients and team members, we’re proud to be one of India’s most trusted and preferred digital agencies.",
    }
];


  const brandtrust = [
    // Public Relations
    {
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      title: "Healthcare",
      description: "We stand out in the competitive healthcare industry by building trust and enhancing visibility among the right audience.",
    },
    {
      icon: <Trophy className="w-12 h-12 text-indigo-600" />,
      title: "EdTech",
      description: "Helping educational institutions to increase student enrollments and stand out in today’s competitive Indian market is what we do best.",
    },
    {
      icon: <Megaphone className="w-12 h-12 text-indigo-600" />,
      title: "Ecommerce",
      description: "Maximizing sales and conversions with our data-driven strategies are always a hit among ecommerce brands.",
    },
    {
      icon: <Network className="w-12 h-12 text-indigo-600" />,
      title: "B2B",
      description: "We focus on generating high-quality leads, strengthening your brand authority, and driving sustainable growth in your niche industry.",
    }
];

  

  const testimonials = [
    {
      name: "Erica Koomson",
      role: "Founder, Bakers Choice",
      content: "Anand Digital PR took my brand to the next level! Their bold ideas, fresh strategies, and unstoppable energy made a huge difference. If you want marketing that truly stands out, Anand Digital PR is the name to trust! Their team goes beyond expectations",
      image: "https://scontent.fdel32-1.fna.fbcdn.net/v/t1.6435-9/62616702_336172387279356_5145491882851172352_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2a5ISYH3gQcQ7kNvwFpGDkc&_nc_oc=AdlCh8pWx0SsOrVhlc2_GwhMeYuaJqyp0iIzjw3f9Ku7xsRWnrzRbDD7DmrN13Ph1ko&_nc_zt=23&_nc_ht=scontent.fdel32-1.fna&_nc_gid=lrR3hS-K3Je_IE3kvFRt3g&oh=00_AfN498HJulnVP8b_5gW9ztuiMaSUfL8O7PQ6_-GBlw1z5A&oe=6869395F",
      ClientImage1: ClientReviews1,
      alts: "Happy SEO client from Ghana sharing success story, Best Digital PR Services",
    },
    {
      name: "Nishant Kumar",
      role: "Actor",
      content: "Anand Digital PR has been a trusted partner in growing my brand. Their strategic approach, creativity, and consistent results set them apart.",
      image: "https://scontent.fdel32-1.fna.fbcdn.net/v/t39.30808-6/468868835_427241780454303_1693747361653646564_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=QNGxE-8kLp8Q7kNvwFHxUzf&_nc_oc=AdnLfioF-vPjs9N_CsAKwYol-YG33fLPvjAKW_i1ita3aqiG6nFqt4juUy1YubjSM6c&_nc_zt=23&_nc_ht=scontent.fdel32-1.fna&_nc_gid=BSV-psxEZwfd-T71vbXweQ&oh=00_AfM1ItcE-8MAjm8qhh2_WZgQDNPOI3XP3x6iaHJiRHZ82w&oe=6847AB40",
      ClientImage1: ClientReviews2,
      alts: "Happy digital PR client from India sharing success story , Best Digital PR Agency In Noida",
    },
    {
      name: "Sk Saifuddin",
      role: "",
      content: "Had a great experience with Anand Digital PR! Super professional, creative, and really helped boost my brand. They handled everything from branding to social media and PR smoothly.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGiKceXw6nv0w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689503426516?e=1754524800&v=beta&t=jV4w_g0cC-uXOpTock62oyRb8LiW1Z1Rp7pdMvSVRdE",
      ClientImage1: ClientReviews3,
      alts: "Happy digital PR client from India sharing success story , Best Digital PR Services in India",
    },
  ];

  return (
    <div className="overflow-hidden">
     <Helmet>
        {/* Title and Description */}
        <title>Digital Marketing Company in India, Best Digital Marketing Agency Noida | Anand Digital PR</title>
        <meta name="description" content="Boost your brand with Anand Digital PR – India's top digital marketing and PR agency for SEO, content, media coverage, and online growth." />
        <meta name="keywords" content="Digital Marketing Company in India, Best Digital Marketing Agency Noida" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ananddigitalpr.com/noida/delhi-ncr/digital-marketing-company-india" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ananddigitalpr.com/noida/delhi-ncr/digital-marketing-company-india" />
        <meta property="og:title" content="Digital Marketing Company in India, Best Digital Marketing Agency Noida | Anand Digital PR" />
        <meta property="og:description" content="Boost your brand with Anand Digital PR – India's top digital marketing and PR agency for SEO, content, media coverage, and online growth." />
        <meta property="og:image" content="https://www.ananddigitalpr.com/noida/delhi-ncr/digital-marketing-company-indiaog-image.jpg" /> {/* Replace with actual image URL */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.ananddigitalpr.com/noida/delhi-ncr/digital-marketing-company-india" />
        <meta name="twitter:title" content="Digital Marketing Company in India, Best Digital Marketing Agency Noida | Anand Digital PR" />
        <meta name="twitter:description" content="Boost your brand with Anand Digital PR – Delhi's top digital marketing and PR agency for SEO, content, media coverage, and online growth." />
        <meta name="twitter:image" content="https://www.ananddigitalpr.com/og-image.jpg" />

     <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Anand Digital PR",
      "url": "https://www.ananddigitalpr.com/noida/delhi-ncr/digital-marketing-company-india",
      "logo": "https://www.ananddigitalpr.com/logo.png",
      "description": "Boost your brand with Anand Digital PR – India's top digital marketing and Digital PR agency for SEO, content, media coverage, and online growth.",
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
        "streetAddress": "Sector 62",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201301",
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
      "keywords": "Digital Marketing Agency in Delhi, India, Digital PR Agency in Noida, India"
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
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
             <h1 className="text-4xl font-bold mb-6">Digital Marketing Agency & Company in India,Noida that Offers Guaranteed Results</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Anand Digital PR is a globally recognized digital marketing agency based in India,Noida known for redefining quality standards in the digital marketing landscape.
We continuously push the boundaries to meet and exceed client expectations in the ever-evolving world of marketing and advertising. As one of the most innovative and client-focused digital marketing companies in India, we take pride in delivering impactful, results-driven solutions tailored to each brand’s unique needs.
            </p>
          <a href="/about">
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
             <h2 className="text-4xl font-bold mb-6">Work with the Leading Digital Marketing Company in Noida, India Where Great Results Come Fast</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help you achieve holistic growth with clear vision and deliver a value-driven experience for your customers all while maintaining the highest quality standards.<br/>
Anand Digital PR is one of the best digital marketing agencies in India, Noida offering a comprehensive 360-degree digital service portfolio. We've carved out our niche as a trusted name in the industry, growing steadily through experience, expertise, and a commitment to excellence building success brick by brick.<br/>
With a focused and strategic approach, we identify the right digital opportunities that allow us to help our clients overcome complex business challenges and drive meaningful results.
</p>
          </motion.div>
        </div>
      </section>

 {/* Services Section */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6">Our Best Services For Digital Marketing</h2>
      <p className="text-xl text-gray-600">
        Comprehensive PR & Digital solutions for your success
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="mb-6">{service.icon}</div>
          <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


 {/* company facts */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6">Company Facts - Anand Digital PR</h2>
      <p className="text-xl text-gray-600">
       Here are proven track records that show we only strive to deliver the best results to our clients:
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((facts, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="mb-6">{service.icon}</div>
          <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>




{/* Work Approach */}
      <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6">Our Best Approach For Digital Marketing Services</h2>
      <p className="text-xl text-gray-600">How we deliver exceptional results</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: 'Research',
          points: ['Data Analysis', 'Insights Gathering'],
        },
        {
          title: 'Strategy',
          points: ['Goal Setting', 'Channel Planning'],
        },
        {
          title: 'Execute',
          points: ['Campaign Launch', 'Creative Delivery'],
        },
        {
          title: 'Measure',
          points: ['Performance Tracking', 'Continuous Improvement'],
        },
      ].map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex items-start gap-4"
        >
          <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
            {index + 1}
          </div>
          <div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <div className="mt-2 space-y-2">
              {step.points.map((point, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Client Testimonials</h2>
            <p className="text-xl text-gray-600">What our clients say about Anand Digital PR</p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.alts}
                    className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                  />
                   
                  <p className="text-gray-600 mb-6">{testimonial.content}</p>
                  <div className="text-center">
                     <img
                    src={testimonial.ClientImage1}
                    alt={testimonial.alts}
                    className="w-70 h-50  mx-auto mb-6 object-cover"
                  />
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                    
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>


           {/* About Section */}
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            
         <h3 className="text-4xl font-bold mb-6">Rank Higher and Attract More Traffic to Your Website</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Here’s how our SEO and digital marketing services are tailored to meet a variety of common goals and business needs: </p>
             <ul>
               <li>If Google can’t crawl your site, it won’t rank but that doesn’t mean you need to avoid using JavaScript.</li>
               <li>For businesses that sell products online and want to improve their product visibility in search results.</li>
               <li>If you sell products online, improving your product visibility in search results is key to driving sales.And if you're investing in a new website, it's crucial to make sure it's optimized to perform well in search engines from the start.</li>
            
             </ul>

          </motion.div>
        </div>
      </section>
           
      {/* Footer */}
         <section className="mb-2 mt-5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6 mt-5">FAQs - Digital Marketing Agency in India(Noida)</h2>
        <h3 className="text-4xl font-bold mb-6">Why we are one of the Best PR Agency in Noida(India)?</h3>
        <p className="text-xl text-gray-600">At Anand Digital PR, what truly sets us apart is our collective expertise of over 5 years in delivering impactful Digital Marketing and Digital PR strategies. Unlike traditional agencies, we integrate both PR and digital marketing to build holistic, data-driven campaigns that deliver measurable results.

Our services are backed by a strong portfolio of case studies and success stories across various industries. This proven track record reinforces our position as the Best PR and Digital Marketing Agency in Delhi and Noida.

Moreover, the trust and appreciation we receive from our clients across India further validate our reputation as one of the top PR agencies in the country.
</p>
        
    <h3 className="text-4xl font-bold mb-6 mt-3">How can PR Agency help your business?</h3> 
        <p className="text-xl text-gray-600">The PR Agency always aligns with the vision of the company. This resonates with the purpose of the business which brings about a unified effect. The PR agency helps create visibility of the company which enhances the recall value amongst the consumers.

The top PR agency always strives to convert the consumers into loyal customers by effectively communicating the message of the company. They have a very diverse enterprise to achieve where they perform the task of a bridge between the client/ company and the ignorant target public. They keep the audience group constantly updated with the activities of the client.

Stories and strategies are created accompanied by best solutions. By prioritizing client’s requirements the Best PR Agency always preserves and promotes their reputation and goodwill in market. They work to achieve holistic approach concerning all the queries of the client/ organisation/ company as a good PR agency believes in building trust and establishing brand identity by providing leads for the client’s business.</p>

        <h3 className="text-4xl font-bold mb-6  mt-3">I own a recently initiated start-up unit in India? Should I invest in hiring a PR Agency?</h3>
        <p className="text-xl text-gray-600">The start-up businesses need the help of specialists to make their presence noticed in the crowded marketplace. Branding, lead generation and customer relationship are the top concerns for the relatively new businesses. The experienced and reputed PR agency customize strategies for your overall performance boost in all the verticals, including new product placement in a particular marketplace.</p>

        <h3 className="text-4xl font-bold mb-6  mt-3">Is Hiring a PR Agency a Smart Move to Grow My Business Profits?</h3>
        
      <p className="text-xl text-gray-600">Yes, if you involve a PR agency, you can try new ideas and target your marketing better and this could save money on older advertising forms. So PR agency finds the most affordable and up-to-date ways your business can advertise, build its brand and make sales which helps your business become more successful and profitable.</p>
        
        <h3 className="text-4xl font-bold mb-6  mt-3">What does it cost to work with a Public Relations Agency?</h3>
        <p className="text-xl text-gray-600">The cost to <a href="https://www.ananddigitalpr.com/contact" className="text-blue-600 hover:underline"> hire a PR agency </a> is not fixed. Since custom services are the main offering, the PR agency price scales can be very different. The final cost of the PR agency depends on the set of services you have agreed to receive.</p>

        <h3 className="text-4xl font-bold mb-6 mt-3">What does a PR Agency do in digital marketing?</h3>
        <p className="text-xl text-gray-600">PR agencies also provide services in digital marketing, Called Digital PR Agency, for SEO, SMM, SMO, ORM, CMS, CRM and other areas, because digital marketing helps a company build and expand its customer base, create a strong brand reputation, improve placement in search results, produce leads and increase profits.</p>
        
        <h3 className="text-4xl font-bold mb-6  mt-3"> How does SEO PR benefit a brand?</h3>
        <p className="text-xl text-gray-600">SEO PR helps people become aware of the brand, draws more visitors to the website, boosts social media activity and boosts search engine results for the brand. Getting backlinks from major websites helps a brand appear higher on Google which leads to high ROI. It also plays a role in building a positive online reputation by making sure brand names appear positively.</p>

        <h3 className="text-4xl font-bold mb-6  mt-3">How is digital marketing different from traditional marketing?</h3>
        
           <p className="text-xl text-gray-600">digital marketing utilizes the internet to advertise in targeted ways using instant data, but traditional marketing relies on print, TV or radio which offer less interaction and aren’t easy to measure. Because of its targeting of specific audiences and immediate feedback, digital marketing is easier to adjust and cheaper.</p>
         </div>
         </section>
        </div>
      </section>

      <Footer />

    
      
    </div>
  );
};

export default Digitailmarketing;
