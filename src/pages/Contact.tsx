import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'ankitanand1998find@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: '+91 8340426515',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: 'Noida Setctor 62 , Noida , India',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
    },
  ];

  return (
    <div className="pt-16">
      <Helmet>
  <title>Contact Us | Talk to Our Digital Marketing & PR Experts | Anand Digital PR</title>
  <meta 
    name="description" 
    content="Ready to elevate your brand? Get in touch with Anand Digital PR for expert digital marketing and public relations services. We're here to grow your brand, online presence, and reputation." 
  />
  <link rel="canonical" href="https://www.ananddigitalpr.com/contact" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:title" content="Contact Us | Talk to Our Digital Marketing & PR Experts" />
  <meta 
    property="og:description" 
    content="Reach out to Anand Digital PR – your trusted partner for SEO, PR, and digital growth. Let’s discuss how we can take your brand to the next level." 
  />
  <meta property="og:url" content="https://www.ananddigitalpr.com/contact" />
  <meta property="og:image" content="https://www.ananddigitalpr.com/og-image.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact Anand Digital PR | Let’s Build Your Brand Together" />
  <meta 
    name="twitter:description" 
    content="Contact Anand Digital PR to explore tailored PR and digital marketing solutions for your business. We’re just a message away!" 
  />
  <meta name="twitter:image" content="https://www.ananddigitalpr.com/og-image.jpg" />
</Helmet>

      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gradient-to-r from-indigo-600 to-purple-600">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center text-white text-center px-4"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto">
              Let's discuss how we can help your brand succeed
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12 lg:gap-x-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
                <p className="text-gray-600">
                  Have questions about our services? Contact us via any of the methods below or fill out the form.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl"
                  >
                    <div className="text-indigo-600 shrink-0">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-600 text-sm">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social, index) => (
                    <button
                      key={index}
                      className="px-5 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition text-sm"
                    >
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
