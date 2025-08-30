import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Footer from "../components/Footer";

export default function SuratDigitalMarketing() {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency in Surat | Anand Digital PR</title>
        <meta
          name="description"
          content="Anand Digital PR is the best digital marketing agency in Surat offering SEO, PPC, Social Media, Content, and Web Development services to grow your business."
        />
      </Helmet>

      <div className="px-6 md:px-16 lg:px-32 py-12 space-y-12">
        {/* About Section */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl font-bold mb-4">Digital Marketing Agency in Surat</h1>
          <p>
            Anand Digital PR is the leading <strong>Digital Marketing Agency in Surat</strong>, trusted by startups, SMEs, and enterprises. With proven expertise in SEO, social media, PPC, content marketing, and web development, we help businesses dominate Surat’s competitive digital landscape. Our strategies are ROI-focused, ethical, and designed to build long-term online authority.
          </p>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section>
          <h2 className="text-2xl font-semibold mb-3">Why Choose Anand Digital PR for Your Business in Surat?</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Proven results for Surat-based businesses</li>
            <li>Data-driven and creative approach</li>
            <li>Transparent reporting & ROI-focused campaigns</li>
            <li>Local expertise with global standards</li>
          </ul>
        </motion.section>

        {/* Services Overview */}
        <motion.section>
          <h2 className="text-2xl font-semibold mb-3">Our Digital Marketing Services in Surat</h2>
          <h3 className="text-xl font-semibold">SEO Services in Surat</h3>
          <p>From on-page SEO to link building and local SEO in Surat, we ensure your business ranks high on Google search results.</p>

          <h3 className="text-xl font-semibold mt-4">Social Media Marketing in Surat</h3>
          <p>We create engaging campaigns on Facebook, Instagram, and LinkedIn to build your brand authority in Surat.</p>

          <h3 className="text-xl font-semibold mt-4">PPC Advertising in Surat</h3>
          <p>ROI-driven Google Ads and paid campaigns designed for local businesses in Surat.</p>

          <h3 className="text-xl font-semibold mt-4">Content Marketing in Surat</h3>
          <p>Blogs, infographics, videos, and ad copy tailored for Surat audiences to boost conversions.</p>

          <h3 className="text-xl font-semibold mt-4">Web Development in Surat</h3>
          <p>SEO-friendly websites and e-commerce stores crafted for high performance.</p>

          <h3 className="text-xl font-semibold mt-4">Digital PR in Surat</h3>
          <p>Get featured in top publications and manage your brand reputation online.</p>
        </motion.section>

        {/* Local SEO */}
        <motion.section>
          <h2 className="text-2xl font-semibold mb-3">Local SEO in Surat – Get Found by Nearby Customers</h2>
          <p>
            Our <strong>local SEO services in Surat</strong> include Google Business Profile optimization, citations, and hyperlocal targeting to drive customers from your area directly to your business.
          </p>
        </motion.section>

        {/* Process */}
        <motion.section>
          <h2 className="text-2xl font-semibold mb-3">How Our Digital Marketing Process Works</h2>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Research & competitor analysis</li>
            <li>Strategy building with tailored campaigns</li>
            <li>Execution using latest tools & trends</li>
            <li>Continuous monitoring and optimization</li>
            <li>Transparent reporting</li>
          </ol>
        </motion.section>

        {/* Case Studies */}
        <motion.section>
          <h2 className="text-2xl font-semibold mb-3">Case Studies – Businesses We Helped Grow in Surat</h2>
          <p>
            From retail stores to healthcare clinics and real estate firms, Anand Digital PR has delivered measurable growth. Our case studies prove our ability to scale Surat businesses using SEO, PPC, and social media marketing.
          </p>
        </motion.section>

        {/* Industries */}
        <motion.section>
          <h2 className="text-2xl font-semibold mb-3">Industries We Serve in Surat</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Healthcare & Clinics</li>
            <li>Education & Coaching Institutes</li>
            <li>Real Estate & Builders</li>
            <li>Retail & E-commerce</li>
            <li>IT & Startups</li>
            <li>Hospitality & Travel</li>
          </ul>
        </motion.section>

        {/* Packages */}
        <motion.section>
          <h2 className="text-2xl font-semibold mb-3">Affordable Digital Marketing Packages in Surat</h2>
          <p>
            We offer budget-friendly packages designed for every business size: Starter plans for small businesses, Growth plans for scaling companies, and Enterprise solutions for established brands in Surat.
          </p>
        </motion.section>

        {/* Tools */}
        <motion.section>
          <h2 className="text-2xl font-semibold mb-3">Tools & Technologies We Use</h2>
          <p>
            Our experts use SEMrush, Ahrefs, Google Analytics, Google Ads Manager, and advanced social media tools to execute campaigns with precision.
          </p>
        </motion.section>

        {/* Team */}
        <motion.section>
          <h2 className="text-2xl font-semibold mb-3">Meet Our Team of Experts in Surat</h2>
          <p>
            Our team includes SEO specialists, PPC managers, social media strategists, content writers, and developers who work together to deliver results.
          </p>
        </motion.section>

        {/* Testimonials */}
        <motion.section>
          <h2 className="text-2xl font-semibold mb-3">Testimonials – What Surat Businesses Say About Us</h2>
          <p>
            “Anand Digital PR transformed our business with targeted SEO and social media campaigns in Surat. We saw a 200% growth in leads within 6 months.” – Local Business Owner
          </p>
        </motion.section>

        {/* FAQ */}
        <motion.section>
          <h2 className="text-2xl font-semibold mb-3">FAQ – Digital Marketing in Surat</h2>
          <h3 className="text-lg font-semibold">How much does digital marketing cost in Surat?</h3>
          <p>Costs vary depending on services, but our packages are designed to fit small and large businesses in Surat.</p>

          <h3 className="text-lg font-semibold mt-4">How long does SEO take to show results?</h3>
          <p>Typically, SEO takes 3-6 months to show significant results depending on competition and keywords in Surat.</p>

          <h3 className="text-lg font-semibold mt-4">Which industries benefit most from digital marketing in Surat?</h3>
          <p>Healthcare, real estate, education, retail, and startups benefit the most from our tailored digital marketing strategies.</p>
        </motion.section>

        {/* Contact */}
        <motion.section>
          <h2 className="text-2xl font-semibold mb-3">Contact Us – Let’s Grow Your Surat Business Online</h2>
          <p>
            Ready to scale your business with the best digital marketing agency in Surat? Contact Anand Digital PR today for a free consultation.
          </p>
        </motion.section>
      </div>

      <Footer />
    </>
  );
}
