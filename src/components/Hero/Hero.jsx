import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { useScrollReveal, useCountUp } from "../../hooks/useScrollReveal";
import { personalInfo, heroStats, typingTexts } from "../../data/resumeData";
import "./Hero.css";

function TypingAnimation({ texts }) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentText.length) {
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <span className="typing-text">
      {texts[textIndex].substring(0, charIndex)}
      <span className="cursor">|</span>
    </span>
  );
}

function StatItem({ value, label }) {
  const [ref, isVisible] = useScrollReveal(0.3);
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number">{count}</span>
      <span className="stat-plus">+</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-grid"></div>
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="badge-dot"></span>
          Available for opportunities
        </motion.div>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <span className="greeting">Hello, I'm</span>
          <span className="name-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.div
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <TypingAnimation texts={typingTexts} />
        </motion.div>

        <motion.p
          className="hero-summary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          12+ years crafting enterprise-grade web applications with React.js,
          Node.js & cloud-native architectures.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <a href="#projects" className="btn btn-primary">
            <span>View My Work</span>
            <FiArrowRight />
          </a>
          <a href="#contact" className="btn btn-outline">
            <FiMail />
            <span>Get In Touch</span>
          </a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {heroStats.map((stat, i) => (
            <StatItem key={i} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      </div>

      <div className="hero-scroll">
        <a href="#about" className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </a>
      </div>
    </section>
  );
}
