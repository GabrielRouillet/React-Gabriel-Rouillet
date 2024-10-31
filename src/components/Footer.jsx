import React from 'react';
import './Footer.css';
import IconoComponente from './IconoComponente';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <IconoComponente />
          <p>Tu tienda de bebidas favorita</p>
          <ul className="footer-links">

          </ul>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Gabby Blinders. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
