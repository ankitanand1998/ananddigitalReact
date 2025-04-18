import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet';


const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <Users />, value: '500+', label: 'Clients Worldwide' },
    { icon: <Award />, value: '150+', label: 'Awards Won' },
    { icon: <Globe />, value: '30+', label: 'Countries Served' },
    { icon: <TrendingUp />, value: '95%', label: 'Client Retention' },
  ];

  const team = [
    {
      name: 'Ankit Anand',
      role: 'Co-Founder',
      image: 'https://scontent.fdel5-3.fna.fbcdn.net/v/t39.30808-6/461502543_2277995139225610_5857932059119235261_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bKoZFocn_uIQ7kNvwG_O0IN&_nc_oc=AdkDu_DT9TreqVKBmJuwzgJLGSx5wQL1y5p5sZmddQ-j1cEjwW-lhEhA1DAaOKCYwTA&_nc_zt=23&_nc_ht=scontent.fdel5-3.fna&_nc_gid=vOB1Yq4ooeUN3CaB4JCP1g&oh=00_AfEulrDVV516-9zpEHvH--w16qreTRcEoDCkMZ9en19bxA&oe=68080466',
      bio: 'Digital PR veteran with 4+ years of experience',
    },
    {
      name: 'Michael Zhang',
      role: 'Strategy Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop',
      bio: 'Former journalist turned PR strategist',
    },
    {
      name: 'Emma Roberts',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop',
      bio: 'Award-winning creative professional',
    },
  ];

  return (
   <div className="pt-16">
    {/* Meta Tags */}
    <Helmet>
        <title>Anand Digital PR | About Us, Our Story, Digital Marketing Agency in Noida</title>
        <meta name="description" content="Know the story behind Anand Digital PR, a leading digital marketing and PR agency in Noida. We blend innovation, strategy, and storytelling to build powerful brands and lasting success." />
        <link rel="canonical" href="https://www.ananddigitalpr.com/about" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us | Anand Digital PR" />
        <meta
          property="og:description"
          content="Know more about Anand Digital PR's mission, story, and the passionate team driving innovative digital marketing and PR strategies."
        />
        <meta property="og:url" content="https://www.ananddigitalpr.com/about" />
        <meta property="og:image" content="https://www.ananddigitalpr.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Anand Digital PR" />
        <meta
          name="twitter:description"
          content="Know more about Anand Digital PR's mission, story, and the passionate team driving innovative digital marketing and PR strategies."
        />
        <meta name="twitter:image" content="https://www.ananddigitalpr.com/og-image.jpg" />
      </Helmet>


      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-indigo-600 to-purple-600">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center text-white text-center px-4"
        >
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Transforming brands through innovative digital PR strategies since 2020
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section ref={ref} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
                alt="Our Mission"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8">
              our mission is rooted in the power of strategic communication to transform businesses. We believe that by uniting digital marketing and public relations, we can help brands tell their stories effectively and forge meaningful connections with their audiences. In an era where digital presence and reputation go hand in hand, we step in to ensure your product’s value shines through. Our unique approach bridges the gap between reach and resonance, setting the foundation for lasting brand success. <br/> <br/>
              We stand out in the market by blending two powerhouse disciplines: digital marketing and PR. While others may focus on one or the other, we see their combined potential as the key to impactful results. Digital marketing opens doors to vast audiences through tools like social media, SEO, and online ads, while PR builds trust and credibility with strategic storytelling and media relations. This integrated method fills an industry gap, delivering campaigns that don’t just get seen but leave a lasting impression. <br/> <br/>
              Our passion lies in turning products into brands. A product meets a need, but a brand captures hearts and minds, standing tall in a competitive world. We make this happen by crafting narratives that spotlight what makes your offering special. Our digital strategies ensure your story reaches the right people, while our PR efforts amplify it through trusted channels like media coverage and influencer partnerships. Together, this dual approach builds recognition, loyalty, and a powerful market presence.<br/> <br/>

              We’re here for your success, no matter your starting point. At Anand Digital PR, we dive deep into your business goals, challenges, and vision—to create tailored strategies that deliver real results. Our team thrives on innovation, staying ahead of trends to keep your brand at the forefront. Whether you’re a startup ready to launch or an established name seeking a fresh chapter, we’re committed to helping you build a brand that inspires and endures.


              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="text-indigo-600 w-8 h-8 mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The experts behind our success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-indigo-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;