import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { projects } from "../../data/resumeData";
import "./Projects.css";

export default function Projects() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Key Projects & Achievements</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <motion.div
      className="project-card glass-card"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="project-accent"></div>
      <div className="project-header">
        <div className="project-icon">{project.icon}</div>
        <h3 className="project-title">{project.title}</h3>
        {project.client && <p className="project-client">{project.client}</p>}
      </div>

      <div className="project-tech">
        {project.technologies.map((tech, j) => (
          <span key={j} className="tech-tag">{tech}</span>
        ))}
      </div>

      <ul className="project-details">
        {project.details.map((detail, j) => (
          <li key={j}>{detail}</li>
        ))}
      </ul>

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <span>View Live</span>
          <FiExternalLink size={14} />
        </a>
      )}
    </motion.div>
  );
}
