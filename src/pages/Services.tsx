import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing & PR Services - Anand Digital PR</title>
        <meta
          name="description"
          content="Explore Anand Digital PR's range of digital marketing, public relations, and web development services in Delhi NCR & Noida, India."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.ananddigitalpr.com/services",
                  "url": "https://www.ananddigitalpr.com/services",
                  "name": "Digital Marketing & PR Services - Anand Digital PR",
                  "description":
                    "Explore Anand Digital PR's range of digital marketing, public relations, and web development services in Delhi NCR & Noida, India.",
                  "inLanguage": "en",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.ananddigitalpr.com"
                  },
                  "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                      {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.ananddigitalpr.com"
                      },
                      {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Services",
                        "item": "https://www.ananddigitalpr.com/services"
                      }
                    ]
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.ananddigitalpr.com#organization",
                  "name": "Anand Digital PR",
                  "url": "https://www.ananddigitalpr.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.ananddigitalpr.com/logo.png"
                  },
                  "sameAs": [
                    "https://www.facebook.com/ananddigitalpr",
                    "https://www.linkedin.com/company/ananddigitalpr",
                    "https://twitter.com/ananddigitalpr"
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "Digital Marketing and PR Services",
                  "provider": {
                    "@id": "https://www.ananddigitalpr.com#organization"
                  },
                  "areaServed": {
                    "@type": "Place",
                    "name": "India"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Digital Marketing, PR & Web Development Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "priceCurrency": "INR",
                        "price": 14999,
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Media Relations",
                          "description":
                            "Premium PR coverage with top media connections. Monthly pricing for growing brands."
                        }
                      },
                      {
                        "@type": "Offer",
                        "priceCurrency": "INR",
                        "price": 15999,
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Crisis Management",
                          "description":
                            "Expert handling of brand reputation crises. Fast response plans included."
                        }
                      },
                      {
                        "@type": "Offer",
                        "priceCurrency": "INR",
                        "price": 14999,
                        "itemOffered": {
                          "@type": "Service",
                          "name": "PPC Advertising",
                          "description":
                            "Campaign setup and optimization across Google, Meta, and LinkedIn Ads."
                        }
                      },
                      {
                        "@type": "Offer",
                        "priceCurrency": "INR",
                        "price": 15999,
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Content Marketing",
                          "description":
                            "Content strategy, blogs, copywriting & visuals designed to engage audiences."
                        }
                      },
                      {
                        "@type": "Offer",
                        "priceCurrency": "INR",
                        "price": 12999,
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Social Media Management",
                          "description":
                            "Creative content, reels, strategy, and growth plans for Instagram, Facebook, and LinkedIn."
                        }
                      },
                      {
                        "@type": "Offer",
                        "priceCurrency": "INR",
                        "price": 10999,
                        "itemOffered": {
                          "@type": "Service",
                          "name": "SEO Services",
                          "description":
                            "On-page, off-page, and technical SEO to boost organic traffic and SERP rankings."
                        }
                      },
                      {
                        "@type": "Offer",
                        "priceCurrency": "INR",
                        "price": 19999,
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Website Development",
                          "description":
                            "Custom WordPress and React websites with SEO-friendly and mobile-optimized design."
                        }
                      },
                      {
                        "@type": "Offer",
                        "priceCurrency": "INR",
                        "price": 11999,
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Performance Marketing",
                          "description":
                            "ROI-focused marketing campaigns optimized for conversions across channels."
                        }
                      }
                    ]
                  }
                }
              ]
            })
          }}
        />
      </Helmet>

      <section className="pt-16 pb-12 md:pt-20 md:pb-20 px-6 md:px-10 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 text-center"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-md md:text-lg text-gray-700 text-center mt-4 max-w-3xl mx-auto"
        >
          We blend Digital PR and Digital Marketing into powerful strategies to help businesses grow faster and build strong online reputations.
        </motion.p>
      </section>
    </>
  );
};

export default Services;
