// src/components/Footer.js
import './index.css' // Import your custom CSS for the footer

function FooterSection() {
  return (
    <footer className="footer">
      <div className="containerGi">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="https://res.cloudinary.com/dcklprkyl/image/upload/v1697256127/11115_gxs6hd.png"
              alt="Company Logo"
            />
            <p>ART Work Company</p>
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          &copy; 2023 Software Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
