import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet';
import Footer from "../components/Footer";
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
  Target,
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
     
    {
      icon: <Rocket className="w-12 h-12 text-indigo-600" />,
      title: "Performance Marketing",
      description: "Maximize ROI with PPC ads, social media marketing, and conversion-optimized strategies.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-indigo-600" />,
      title: "SEO Services",
      description: "We carefully analyze your website and work to organically boost high-quality traffic, helping your pages rank better on search engines.",
    },
     {
      icon: <Monitor className="w-12 h-12 text-indigo-600" />,
      title: "Google Ads",
      description: "Our team helps your business grow and drive traffic by advertising it on Google. It will also benefit the sale of your products or services.",
    },
    {
      icon: <Code className="w-12 h-12 text-indigo-600" />,
      title: "Social Media Marketing",
      description: "Our social media marketing team helps your business grow and connect with the right audience on platforms like Facebook, Instagram, and more.",
    },
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
    }
    ];

  return (
    <div className="pt-16">
     <Helmet>
            <title>Best Digital Marketing & PR Services in India</title>
            <meta name="description" content="Looking for expert PR and digital marketing services in Delhi NCR & Noida,India ? Anand Digital PR offers SEO, brand strategy, content marketing, media coverage, and reputation management tailored for growth." />
            <link rel="canonical" href="https://www.ananddigitalpr.com/services" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="Digital Marketing & PR Services in Delhi & Noida, India | Anand Digital PR" />
            <meta
              property="og:description"
              content="Looking for expert PR and digital marketing services in Delhi NCR & Noida,India ? Anand Digital PR offers SEO, brand strategy, content marketing, media coverage, and reputation management tailored for growth"
            />
            <meta property="og:url" content="https://www.ananddigitalpr.com/services" />
            <meta property="og:image" content="https://www.ananddigitalpr.com/og-image.jpg" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Best Digital Marketing & PR Services | Anand Digital PR" />
            <meta
              name="twitter:description"
              content="Looking for expert PR and digital marketing services in Delhi NCR & Noida,India ? Anand Digital PR offers SEO, brand strategy, content marketing, media coverage, and reputation management tailored for growth"
            />
            <meta name="twitter:image" content="https://www.ananddigitalpr.com/og-image.jpg" />

           <script type="application/ld+json">{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Digital Marketing and Digital PR Services",
  "provider": {
    "@type": "Organization",
    "name": "Anand Digital PR",
    "url": "https://www.ananddigitalpr.com",
    "logo": "https://www.ananddigitalpr.com/logo.png"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing & PR Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": 14999,
        "itemOffered": {
          "@type": "Service",
          "name": "Media Relations",
          "description": "Premium PR coverage with top media connections. Monthly pricing for growing brands."
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": 15999,
        "itemOffered": {
          "@type": "Service",
          "name": "Crisis Management",
          "description": "Expert handling of brand reputation crises. Fast response plans included."
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": 12999,
        "itemOffered": {
          "@type": "Service",
          "name": "Global Outreach",
          "description": "Reach and connect with international audiences through multilingual, strategic communications."
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": 11999,
        "itemOffered": {
          "@type": "Service",
          "name": "Brand Protection",
          "description": "Online brand monitoring and reputation safeguarding."
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": 12999,
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media PR",
          "description": "Monthly content creation, engagement, and influencer collaborations."
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": 14999,
        "itemOffered": {
          "@type": "Service",
          "name": "Campaign Planning",
          "description": "Targeted multi-platform campaigns with monthly reports and strategy updates."
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": 13999,
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Strategy",
          "description": "Holistic digital growth strategies tailored to business goals."
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": 10999,
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Optimization",
          "description": "Monthly on-page and off-page SEO for organic traffic improvement."
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": 11999,
        "itemOffered": {
          "@type": "Service",
          "name": "Email Marketing",
          "description": "Design and execution of high-converting email campaigns with analytics."
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": 12999,
        "itemOffered": {
          "@type": "Service",
          "name": "Analytics & Reporting",
          "description": "In-depth performance dashboards and monthly insight reports."
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": 14999,
        "itemOffered": {
          "@type": "Service",
          "name": "Responsive Web Design",
          "description": "Mobile-first design with branding elements and SEO structure."
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": 12999,
        "itemOffered": {
          "@type": "Service",
          "name": "Frontend Development",
          "description": "High-performance, interactive web interfaces aligned with your brand."
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": 10999,
        "itemOffered": {
          "@type": "Service",
          "name": "Security & Hosting",
          "description": "Fast, secure, and scalable monthly website hosting plans."
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": 13999,
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Design",
          "description": "User-centric UI/UX design tailored for conversion and usability."
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": 11999,
        "itemOffered": {
          "@type": "Service",
          "name": "Website Maintenance",
          "description": "Monthly updates, backups, security scans, and performance checks."
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": 12999,
        "itemOffered": {
          "@type": "Service",
          "name": "Content Marketing",
          "description": "Monthly content planning, creation, and distribution strategies."
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": 14999,
        "itemOffered": {
          "@type": "Service",
          "name": "PPC Advertising",
          "description": "Campaign setup and optimization across Google, Meta, and LinkedIn Ads."
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": 13999,
        "itemOffered": {
          "@type": "Service",
          "name": "Influencer Marketing",
          "description": "Monthly influencer sourcing, briefing, collaboration and content tracking."
        }
      }
    ]
  }
})}
</script>

</Helmet>

{/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2940&auto=format&fit=crop"
            alt="Services Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-full flex items-center justify-center text-white text-center px-4"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive digital PR solutions tailored to your success
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-indigo-600 mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Discovery', 'Strategy', 'Execution', 'Analysis'].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step}</h3>
                <p className="text-gray-600">
                  {index === 0 && "Understanding your goals and challenges"}
                  {index === 1 && "Developing a tailored approach"}
                  {index === 2 && "Implementing the strategy"}
                  {index === 3 && "Measuring and optimizing results"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       {/* Footer */}
 <Footer />
    </div>
  );
};

export default Services;
