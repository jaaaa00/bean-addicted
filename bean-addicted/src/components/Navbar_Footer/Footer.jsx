import './Footer.css';
import BeanAddictedLogo from '../Bean_Files/BeanAddictedLogo.png';
import BeanAddictedFootLogo from '../Bean_Files/BeanAddictedFootLogo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <div className="footer-logo-circle">
              <img src={BeanAddictedFootLogo} alt="Bean Addicted Logo" className="footer-logo-img" />
            </div>
     
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/profile.php?id=100089928705478"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Bean Addicted on Facebook"
              >
                <i className="fab fa-facebook-f footer-social-icon"></i>
              </a>
              <a
                href="https://www.instagram.com/beanaddctd.coffee/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Bean Addicted on Instagram"
              >
                <i className="fab fa-instagram footer-social-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-copyright">© 2023 Bean Addicted. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;