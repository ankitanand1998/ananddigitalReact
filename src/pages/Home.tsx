import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Helmet } from 'react-helmet';
import Footer from "../components/Footer";
import WhyChoose from "../components/WhyChoose";
import  About from "./About"
import  Contact from "./Contact"


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
    // Public Relations
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

    // Digital Marketing
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

    // Website Development
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
        {/* Title and Description */}
        <title>Best Digital Marketing and PR Agency in India (Noida) | Anand Digital PR</title>
        <meta name="description" content="Boost your brand with Anand Digital PR – India's top digital marketing and PR agency for SEO, content, media coverage, and online growth." />
        <meta name="keywords" content="Digital Marketing Agency in Delhi, India, PR Agency in Delhi, Digital Marketing Agency in Noida, PR Agency in Noida" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ananddigitalpr.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ananddigitalpr.com" />
        <meta property="og:title" content="Anand Digital PR: Best Digital Marketing and PR Agency in Delhi, India" />
        <meta property="og:description" content="Boost your brand with Anand Digital PR – India's top digital marketing and PR agency for SEO, content, media coverage, and online growth." />
        <meta property="og:image" content="https://www.ananddigitalpr.com/og-image.jpg" /> {/* Replace with actual image URL */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.ananddigitalpr.com" />
        <meta name="twitter:title" content="Anand Digital PR: Best Digital Marketing and PR Agency in Delhi, India" />
        <meta name="twitter:description" content="Boost your brand with Anand Digital PR – Delhi's top digital marketing and PR agency for SEO, content, media coverage, and online growth." />
        <meta name="twitter:image" content="https://www.ananddigitalpr.com/og-image.jpg" />

         <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Anand Digital PR",
        "url": "https://www.ananddigitalpr.com/",
        "logo": "https://www.ananddigitalpr.com/logo.png",
        "description": "Boost your brand with Anand Digital PR –India's top digital marketing and Digital PR agency for SEO, content, media coverage, and online growth.",
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
          "url": "https://www.ananddigitalpr.com/contact"
        }],
        "areaServed": "IN",
        "availableLanguage": "English",
        "makesOffer": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing and PR Services",
            "description": "India's Best Comprehensive digital PR Services including SEO, PPC, media outreach, online reputation management, and content strategy.",
            "provider": {
              "@type": "Organization",
              "name": "Anand Digital PR"
            }
          }
        },
        "keywords": "Digital Marketing Agency in Delhi, India, PR Agency in Noida, India"
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
            
            <h1 className="text-4xl font-bold mb-6">Anand Digital PR - Best Digital Marketing and PR Agency in Noida, India</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Anand Digital PR stands out as a top Digital Marketing & PR firm in Noida, Delhi, India. We focus on SEO, digital marketing, website enhancement, and PR tactics that boost brands. <br/> As a complete digital PR agency, we combine data-backed campaigns with imaginative narratives to increase visibility and user interaction. <br/> Our know-how covers content, social platforms, and PPC, making sure each campaign yields quantifiable returns. We provide custom digital PR services that help create trust and clout across crucial media channels. By mixing advertising and PR, we transform clicks into devoted customers and bring about real business expansion.
            </p>
          <a href="/about">
  <button className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-indigo-700 transition-colors">
    Know More <ArrowRight size={20} />
  </button>
</a>

          </motion.div>
        </div>
      </section>
       <WhyChoose />

      {/* Services Section */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6">Our Best Services For Digital Marketing and PR</h2>
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

{/* Work Approach */}
      <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-6">Our Best Approach For Digital Marketing & PR Services</h2>
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
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                  />
                  <p className="text-gray-600 mb-6">{testimonial.content}</p>
                  <div className="text-center">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
           
      {/* Footer */}
         <section className="mb-2 mt-5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6 mt-5">FAQs - PR Agency in India(Noida)</h2>
        <h3 className="text-4xl font-bold mb-6">Why we are one of the Best PR Agency in Noida(India)?</h3>
        <p>At Anand Digital PR, what truly sets us apart is our collective expertise of over 5 years in delivering impactful Digital Marketing and Digital PR strategies. Unlike traditional agencies, we integrate both PR and digital marketing to build holistic, data-driven campaigns that deliver measurable results.

Our services are backed by a strong portfolio of case studies and success stories across various industries. This proven track record reinforces our position as the Best PR and Digital Marketing Agency in Delhi and Noida.

Moreover, the trust and appreciation we receive from our clients across India further validate our reputation as one of the top PR agencies in the country.
</p>
        
    <h3 className="text-4xl font-bold mb-6">How can PR Agency help your business?</h3> 
        <p>The PR Agency always aligns with the vision of the company. This resonates with the purpose of the business which brings about a unified effect. The PR agency helps create visibility of the company which enhances the recall value amongst the consumers.

The top PR agency always strives to convert the consumers into loyal customers by effectively communicating the message of the company. They have a very diverse enterprise to achieve where they perform the task of a bridge between the client/ company and the ignorant target public. They keep the audience group constantly updated with the activities of the client.

Stories and strategies are created accompanied by best solutions. By prioritizing client’s requirements the Best PR Agency always preserves and promotes their reputation and goodwill in market. They work to achieve holistic approach concerning all the queries of the client/ organisation/ company as a good PR agency believes in building trust and establishing brand identity by providing leads for the client’s business.</p>

        <h3 className="text-4xl font-bold mb-6">I own a recently initiated start-up unit in India? Should I invest in hiring a PR Agency?</h3>
        <p>The start-up businesses need the help of specialists to make their presence noticed in the crowded marketplace. Branding, lead generation and customer relationship are the top concerns for the relatively new businesses. The experienced and reputed PR agency customize strategies for your overall performance boost in all the verticals, including new product placement in a particular marketplace.</p>

        <h3 className="text-4xl font-bold mb-6">Is Hiring a PR Agency a Smart Move to Grow My Business Profits?</h3>
        
      <p>Yes, if you involve a PR agency, you can try new ideas and target your marketing better and this could save money on older advertising forms. So PR agency finds the most affordable and up-to-date ways your business can advertise, build its brand and make sales which helps your business become more successful and profitable.</p>
        
        <h3 className="text-4xl font-bold mb-6">What does it cost to work with a Public Relations Agency?</h3>
        <p>The cost to hire a PR agency is not fixed. Since custom services are the main offering, the PR agency price scales can be very different. The final cost of the PR agency depends on the set of services you have agreed to receive.</p>

        <h3 className="text-4xl font-bold mb-6">What does a PR Agency do in digital marketing?</h3>
        <p>PR agencies also provide services in digital marketing, Called Digital PR Agency, for SEO, SMM, SMO, ORM, CMS, CRM and other areas, because digital marketing helps a company build and expand its customer base, create a strong brand reputation, improve placement in search results, produce leads and increase profits.</p>
        
        <h3 className="text-4xl font-bold mb-6"> How does SEO PR benefit a brand?</h3>
        <p>SEO PR helps people become aware of the brand, draws more visitors to the website, boosts social media activity and boosts search engine results for the brand. Getting backlinks from major websites helps a brand appear higher on Google which leads to high ROI. It also plays a role in building a positive online reputation by making sure brand names appear positively.</p>

        <h3 className="text-4xl font-bold mb-6">How is digital marketing different from traditional marketing?</h3>
        
           <p>digital marketing utilizes the internet to advertise in targeted ways using instant data, but traditional marketing relies on print, TV or radio which offer less interaction and aren’t easy to measure. Because of its targeting of specific audiences and immediate feedback, digital marketing is easier to adjust and cheaper.</p>
         </div>
         </section>
        </div>
      </section>

      <Footer />

    
      
    </div>
  );
};

export default Home;
