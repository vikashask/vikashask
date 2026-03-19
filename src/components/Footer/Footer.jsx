import { motion } from "framer-motion";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            VK
            <span className="logo-bracket">/&gt;</span>
          </div>
          <p className="footer-text">Designed & Built by Vikash Kumar Verma</p>
          <p className="footer-copyright">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
