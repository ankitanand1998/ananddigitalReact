import React from 'react';
import './WhyChoose.css'; // We'll create this CSS file separately

const reasons = [
  {
    emoji: "🔥",
    title: "We Blend PR Power with Digital Speed",
    description: "We don’t just market — we make you matter. Our secret? A perfect fusion of smart digital strategies and hard-hitting PR that skyrockets your brand authority."
  },
  {
    emoji: "🎯",
    title: "More Than Clicks — We Build Trust",
    description: "Anyone can run ads. We craft narratives that build trust, credibility, and influence — and turn your audience into loyal fans."
  },
  {
    emoji: "📈",
    title: "Visibility + Authority = Unstoppable Growth",
    description: "Get seen and get respected. Our campaigns get you media attention, search rankings, leads, and long-term brand strength — not just short-term wins."
  },
  {
    emoji: "🚀",
    title: "Modern Marketing, Reinvented",
    description: "Forget old-school methods. We combine the art of storytelling with the science of digital performance — because today’s market demands both."
  },
  {
    emoji: "🤝",
    title: "Your Growth Partner, Not Just Another Agency",
    description: "We don’t do cookie-cutter strategies. We craft custom roadmaps, collaborate closely with you, and stay obsessed with your success."
  }
];

const WhyChoose = () => {
  return (
    <section className="why-choose-section">
      <h1>Why Brands Choose Anand Digital PR 🚀</h1>
      <div className="reasons">
        {reasons.map((reason, index) => (
          <div className="reason-card" key={index}>
            <div className="reason-emoji">{reason.emoji}</div>
            <div className="reason-title">{reason.title}</div>
            <div className="reason-desc">{reason.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;

