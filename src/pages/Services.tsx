import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MessageSquare,
  Globe,
  Users,
  Rocket,
  Shield,
  Monitor,
  TrendingUp,
  Mail,
  Code,
  ShieldCheck,
  PenTool,
  BarChart,
  Share2,
  ClipboardList,
  Target,
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
      // Public Relations
      {
        icon: <Users className="w-12 h-12" />,
        title: 'Media Relations',
        description: 'Build and maintain relationships with key media outlets and journalists.',
      },
     
      {
        icon: <MessageSquare className="w-12 h-12" />,
        title: 'Crisis Management',
        description: 'Expert handling of sensitive situations and reputation management.',
      },
      {
        icon: <Globe className="w-12 h-12" />,
        title: 'Global Outreach',
        description: 'Connect with audiences worldwide through strategic communications.',
      },
      {
        icon: <Shield className="w-12 h-12" />,
        title: 'Brand Protection',
        description: 'Safeguard your brand reputation in the digital landscape.',
      },
     
      {
        icon: <Share2 className="w-12 h-12" />,
        title: 'Social Media PR',
        description: 'Strategic social media management for brand enhancement.',
      },
      {
        icon: <Target className="w-12 h-12" />,
        title: 'Campaign Planning',
        description: 'Targeted campaigns that deliver measurable results.',
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

  return (
    <div className="pt-16">
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
    </div>
  );
};

export default Services;