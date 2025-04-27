import "./Footer.css"
import { Twitter, Facebook, Linkedin, Youtube, Instagram, Share2 } from "lucide-react"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#" className="footer-link">
          HOME
        </a>
        <a href="#" className="footer-link">
          SITEMAP
        </a>
        <a href="#" className="footer-link">
          ACCESSIBILITY
        </a>
        <a href="#" className="footer-link">
          NONDISCRIMINATION POLICY
        </a>
        <a href="#" className="footer-link">
          IEEE ETHICS REPORTING
        </a>
        <a href="#" className="footer-link">
          IEEE PRIVACY POLICY
        </a>
        <a href="#" className="footer-link">
          TERMS
        </a>
      </div>

      <div className="copyright">
        <p>
          © Copyright 2025 IEEE - All rights reserved. Use of this website signifies your agreement to the IEEE Terms
          and Conditions.
        </p>
        <p>
          A public charity, IEEE is the world's largest technical professional organization dedicated to advancing
          technology for the benefit of humanity.
        </p>
      </div>

      <div className="social-links">
        <a href="#" className="social-link">
          <Twitter size={20} />
        </a>
        <a href="#" className="social-link">
          <Facebook size={20} />
        </a>
        <a href="#" className="social-link">
          <Linkedin size={20} />
        </a>
        <a href="#" className="social-link">
          <Youtube size={20} />
        </a>
        <a href="#" className="social-link">
          <Instagram size={20} />
        </a>
        <a href="#" className="social-link">
          <Share2 size={20} />
        </a>
      </div>

      <div className="back-to-top">
        <a href="#top">Back to Top</a>
      </div>
    </footer>
  )
}

export default Footer
