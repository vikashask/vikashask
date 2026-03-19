import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { personalInfo, professionalSummary, coreCompetencies } from "../../data/resumeData";
import "./About.css";

const infoCards = [
  { icon: "📧", label: "Email", value: personalInfo.email },
  { icon: "📱", label: "Phone", value: personalInfo.phone },
  { icon: "📍", label: "Location", value: personalInfo.location },
  { icon: "🗣️", label: "Languages", value: personalInfo.languages },
];

export default function About() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [textRef, textVisible] = useScrollReveal();
  const [infoRef, infoVisible] = useScrollReveal();

  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          className="section-header"
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            ref={textRef}
            initial={{ opacity: 0, x: -40 }}
            animate={textVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="about-lead">
              {professionalSummary}
            </p>
            <div className="about-tags">
              {coreCompetencies.map((tag, i) => (
                <motion.span
                  key={i}
                  className="tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={textVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-info"
            ref={infoRef}
            initial={{ opacity: 0, x: 40 }}
            animate={infoVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {infoCards.map((card, i) => (
              <motion.div
                key={i}
                className="info-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                animate={infoVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="info-icon">{card.icon}</div>
                <div className="info-content">
                  <span className="info-label">{card.label}</span>
                  <span className="info-value">{card.value}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
