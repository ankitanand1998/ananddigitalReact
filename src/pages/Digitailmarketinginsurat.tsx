import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const services = [
  {
    icon: "📈",
    title: "SEO Services in Surat",
    description:
      "Our SEO services in Surat are designed to help businesses rank higher on Google and attract local customers. We focus on keyword research, on-page SEO, content optimization, link building, and local SEO strategies. By targeting keywords like 'best SEO company in Surat' and 'Surat digital marketing agency,' we ensure your business gains visibility and sustainable growth.",
  },
  {
    icon: "💻",
    title: "Social Media Marketing in Surat",
    description:
      "Our social media marketing services in Surat help brands connect with their audience on platforms like Facebook, Instagram, LinkedIn, and YouTube. From engaging content creation to paid campaigns, we ensure your brand voice is consistent and impactful. We specialize in building strong community engagement and driving measurable ROI for Surat businesses.",
  },
  {
    icon: "🎯",
    title: "PPC & Google Ads Management",
    description:
      "We deliver ROI-driven PPC campaigns in Surat with highly targeted Google Ads and Facebook Ads. Our digital marketing experts analyze data, track conversions, and optimize campaigns to reduce costs and maximize returns. Whether you’re targeting local Surat customers or a wider audience, our PPC campaigns drive instant results.",
  },
  {
    icon: "✍️",
    title: "Content Marketing in Surat",
    description:
      "Content is the backbone of digital marketing. Our content marketing services in Surat include blogs, articles, infographics, and video scripts tailored for your industry. With SEO-focused and engaging content, we help your brand become an authority while driving organic traffic.",
  },
  {
    icon: "📊",
    title: "Analytics & Conversion Optimization",
    description:
      "We track, analyze, and optimize every digital marketing campaign to ensure higher conversions. From heatmap analysis to user journey mapping, our Surat-based experts improve customer experiences that boost leads and sales. Data-backed strategies ensure consistent business growth.",
  },
  {
    icon: "🌍",
    title: "Local SEO for Surat Businesses",
    description:
      "If you’re a Surat-based business, local SEO is essential. We optimize your Google Business Profile, build local citations, and target location-based keywords to help you appear in Surat’s 'Near Me' searches. From restaurants to service providers, we help local brands dominate search results.",
  },
];

const facts = [
  { icon: "🏆", title: "10+ Years of Experience", description: "Delivering trusted digital marketing services in Surat since 2015." },
  { icon: "📊", title: "500+ Projects Completed", description: "Successfully executed campaigns for Surat startups, SMEs, and enterprises." },
  { icon: "🚀", title: "300% Average ROI", description: "Our clients in Surat consistently achieve high ROI from our campaigns." },
  { icon: "🤝", title: "Trusted by 200+ Businesses", description: "From small shops to large corporations in Surat, businesses trust us." },
];

const brandtrust = [
  { icon: "🏥", title: "Healthcare & Clinics", description: "Helping Surat doctors, hospitals, and healthcare startups get patients online." },
  { icon: "🎓", title: "Education & Coaching", description: "Driving admissions for schools, colleges, and coaching institutes in Surat." },
  { icon: "🛍️", title: "E-commerce & Retail", description: "Boosting online visibility for Surat’s top retail and e-commerce stores." },
  { icon: "🏗️", title: "Real Estate & Builders", description: "Helping Surat real estate businesses generate high-quality leads." },
];

const DigitalMarketingSurat = () => {
  return (
    <div>
      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">
            Top Digital Marketing Agency in Surat with Proven Results
          </h1>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto text-left leading-relaxed">
            Anand Digital PR is a trusted{" "}
            <a
              href="https://www.ananddigitalpr.com"
              className="text-blue-600 hover:underline"
            >
              digital marketing company in Surat
            </a>{" "}
            that delivers measurable business growth. From SEO to social media,
            our strategies are tailored to Surat’s competitive market, ensuring
            maximum ROI. <br /><br />
            
            <h2 className="text-2xl font-semibold mt-6">Why Choose a Digital Marketing Agency in Surat?</h2>
            Surat is one of India’s fastest-growing business hubs. With industries
            ranging from textiles to IT, competition is fierce. A specialized
            digital marketing agency in Surat ensures your business stands out by
            leveraging local insights, SEO strategies, and creative campaigns. <br /><br />

            <h2 className="text-2xl font-semibold mt-6">Tailored Strategies for Surat Businesses</h2>
            We understand that every business in Surat has its own story,
            audience, and challenges. That’s why we don’t believe in
            one-size-fits-all marketing. Instead, we analyze your goals, study
            your competition, and create strategies designed to connect with your
            target audience. <br /><br />

            <h2 className="text-2xl font-semibold mt-6">Local SEO Focus</h2>
            Whether you want to dominate “near me” searches or appear in Surat’s
            local directories, our local SEO strategies ensure your brand is
            visible where it matters most. <br /><br />

            <h2 className="text-2xl font-semibold mt-6">Data-Driven Marketing</h2>
            Every campaign we design for Surat businesses is based on analytics
            and measurable KPIs, ensuring your marketing budget drives real
            results. <br /><br />

            <h2 className="text-2xl font-semibold mt-6">Creative Social Media Presence</h2>
            Our Surat social media marketing experts build engagement-driven
            strategies to grow your followers and boost brand loyalty. <br /><br />

            <h2 className="text-2xl font-semibold mt-6">Trusted by Surat Startups and Enterprises</h2>
            From local startups to leading enterprises in Surat, Anand Digital PR
            has helped businesses increase leads, improve visibility, and achieve
            sustainable growth. <br /><br />

            <h2 className="text-2xl font-semibold mt-6">Affordable Digital Marketing Services</h2>
            We believe in delivering premium results without overpricing. Our
            packages are designed to be cost-effective for Surat businesses of
            all sizes. <br /><br />

            <h2 className="text-2xl font-semibold mt-6">Industries We Serve in Surat</h2>
            From real estate, healthcare, and e-commerce to education and local
            services, we have experience in driving success across multiple
            industries in Surat. <br /><br />
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Best Digital Marketing Services in Surat
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions to grow your Surat business online
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
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

      {/* Facts */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Success Story</h2>
            <p className="text-xl text-gray-600">
              A proven record of delivering business growth in Surat.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {facts.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
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

      {/* Industries */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industries We Served</h2>
            <p className="text-xl text-gray-600">
              Helping Surat’s top industries thrive online
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {brandtrust.map((b, i) => (
              <motion.div key={i}>
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

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-xl text-gray-600">
              Answers to common questions about our Digital Marketing Services in Surat
            </p>
          </div>
          <div className="max-w-4xl mx-auto text-left space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">1. Why should I hire a digital marketing agency in Surat?</h3>
              <p className="text-gray-600">Hiring a local Surat agency ensures better understanding of market trends, local customer behavior, and cost-effective strategies tailored to your audience.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">2. How long does it take to see results from SEO in Surat?</h3>
              <p className="text-gray-600">SEO typically shows results in 3-6 months, depending on competition in Surat’s market and your current website performance.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">3. Do you offer packages for small businesses in Surat?</h3>
              <p className="text-gray-600">Yes, our affordable packages are tailored for Surat startups, local shops, and small businesses to get online visibility without overspending.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">4. Can you manage social media marketing for Surat-based companies?</h3>
              <p className="text-gray-600">Absolutely! We manage full social media campaigns including content creation, ad management, and engagement for Surat businesses.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">5. How do I get started with your digital marketing services in Surat?</h3>
              <p className="text-gray-600">You can reach out to us via our website or contact form. Our team will analyze your business needs and provide a free initial consultation tailored to Surat’s market.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketingSurat;
