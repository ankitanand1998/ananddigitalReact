import React from 'react';
import './WhyChoose.css'; // We'll create this CSS file separately

const reasons = [
  {
    emoji: "🔥",
    title: "We Blend PR Power with Digital Speed",
    description: "We believe good marketing makes people notice you — great marketing makes them trust you. At Anand Digital PR, we bring both. That’s what makes us the best digital PR agency in India."
  },
  {
    emoji: "🎯",
    title: "We go beyond clicks to build trust",
    description: "Anyone can run ads. We craft narratives that build trust, credibility, and influence that turn your audience into loyal fans."
  },
  {
    emoji: "📈",
    title: "Visibility + Authority = Unstoppable Growth",
    description: "Get seen and get respected. Our campaigns get you media attention, search rankings, leads, and long-term brand strength — not just short-term wins."
  },
  {
    emoji: "🚀",
    title: "We follow a new way of doing marketing",
    description: "We don’t use old marketing tricks. We tell your story in a way people care about and use smart digital tools to help your brand grow. Because today, you need both to truly stand out."
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
      <h2><b>How Anand Digital PR Helps Your Brand Grow ?</b></h2>
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

