import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { personalInfo } from "../../data/resumeData";
import "./Contact.css";

const contactCards = [
  {
    icon: <FiMail size={24} />,
    title: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: <FiPhone size={24} />,
    title: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: <FiMapPin size={24} />,
    title: "Location",
    value: personalInfo.location,
    href: null,
  },
];

export default function Contact() {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
        </motion.div>

        <motion.p
          className="contact-lead"
          initial={{ opacity: 0 }}
          animate={headerVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          Interested in working together or have a question? Feel free to reach
          out through any of the channels below.
        </motion.p>

        <div className="contact-cards">
          {contactCards.map((card, i) => (
            <ContactCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCard({ card, index }) {
  const [ref, isVisible] = useScrollReveal();

  const Wrapper = card.href ? motion.a : motion.div;
  const wrapperProps = card.href
    ? { href: card.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      className="contact-card glass-card"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.03 }}
      {...wrapperProps}
    >
      <div className="contact-card-icon">{card.icon}</div>
      <h3>{card.title}</h3>
      <p>{card.value}</p>
    </Wrapper>
  );
}
