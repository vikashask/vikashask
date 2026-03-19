import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { experience } from "../../data/resumeData";
import "./Experience.css";

export default function Experience() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div
          className="section-header"
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">My Journey</span>
          <h2 className="section-title">Professional Experience</h2>
        </motion.div>

        <div className="timeline">
          {experience.map((exp, i) => (
            <TimelineItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ exp, index }) {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <motion.div
      className="timeline-item"
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="timeline-marker">
        <motion.div
          className={`timeline-dot ${exp.isCurrent ? "current" : ""}`}
          animate={exp.isCurrent ? { scale: [1, 1.3, 1] } : {}}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </div>
      <motion.div
        className="timeline-content glass-card"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <div className="timeline-header">
          <div>
            <h3 className="timeline-role">{exp.role}</h3>
            <p className="timeline-company">{exp.company}</p>
          </div>
          <span className="timeline-date">{exp.period}</span>
        </div>
        <ul className="timeline-details">
          {exp.highlights.map((item, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 + j * 0.05 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
