import React from 'react';
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li><a href="#">about us</a></li>
              <li><a href="#">our services</a></li>
              <li><a href="#">privacy policy</a></li>
              <li><a href="#">affiliate program</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">shipping</a></li>
              <li><a href="#">returns</a></li>
              <li><a href="#">order status</a></li>
              <li><a href="#">payment options</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Movie Types</h4>
            <ul>
              <li><a href="#">Thriller</a></li>
              <li><a href="#">Romantic</a></li>
              <li><a href="#">Suspense</a></li>
              <li><a href="#">Drama</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#"><i><FaFacebook/></i></a>
              <a href="#"><i><FaTwitter/></i></a>
              <a href="#"><i><FaInstagram/></i></a>
              <a href="#"><i><FaLinkedin/></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
