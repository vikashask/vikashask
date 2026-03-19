import { motion } from "framer-motion";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { skills } from "../../data/resumeData";
import "./Skills.css";

export default function Skills() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">What I Bring</span>
          <h2 className="section-title">Technical Expertise</h2>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }) {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <motion.div
      className="skill-card glass-card"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      <div className="skill-card-header">
        <div className="skill-icon">{skill.icon}</div>
        <h3 className="skill-category">{skill.category}</h3>
      </div>
      <ul className="skill-list">
        {skill.items.map((item, j) => (
          <motion.li
            key={j}
            initial={{ opacity: 0, x: -10 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 + j * 0.06 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
