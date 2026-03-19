import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { education, certifications } from "../../data/resumeData";
import "./Education.css";

export default function Education() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [eduRef, eduVisible] = useScrollReveal();
  const [certRef, certVisible] = useScrollReveal();

  return (
    <section className="section" id="education">
      <div className="container">
        <motion.div
          className="section-header"
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Education & Certifications</h2>
        </motion.div>

        <div className="education-grid">
          <motion.div
            className="education-card glass-card"
            ref={eduRef}
            initial={{ opacity: 0, y: 40 }}
            animate={eduVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
          >
            <div className="edu-icon">🎓</div>
            <h3 className="edu-degree">{education.degree}</h3>
            <p className="edu-school">{education.university}</p>
            <div className="edu-meta">
              <span className="edu-year">{education.year}</span>
              <span className="edu-score">{education.score}</span>
            </div>
          </motion.div>

          <motion.div
            className="certifications-card glass-card"
            ref={certRef}
            initial={{ opacity: 0, y: 40 }}
            animate={certVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="cert-heading">
              <span className="cert-icon">🏅</span>
              Certifications
            </h3>
            <div className="cert-list">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  className="cert-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={certVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                >
                  <div className="cert-badge">{cert.badge}</div>
                  <span>{cert.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
