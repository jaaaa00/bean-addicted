import { useEffect, useState } from 'react';
import './Home.css';
import AboutImage1 from "../../Bean_Files/AboutImage1.jpg";
import AboutImage2 from "../../Bean_Files/AboutImage2.jpg";
import AboutImage3 from "../../Bean_Files/AboutImage3.jpg";
import AboutImage4 from "../../Bean_Files/AboutImage4.jpg";
import AboutSectionBG from "../../Bean_Files/AboutBG.png";
import BGImage from "../../Bean_Files/BG.jpg";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section
        className="hero-section"
        id="home"
        style={{ backgroundImage: `url(${BGImage})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">bean addicted coffee</h1>
          <p className="hero-description">stay caffeinated. stay addicted.</p>
        </div>

 <div 
  className="hero-arrow"
  onClick={() => document.querySelector('.about-section').scrollIntoView({ behavior: 'smooth' })}
></div>
      </section>
 

      {/* About Section */}
<section
  className="about-section"
  style={{ backgroundImage: `url(${AboutSectionBG})` }}
>

        <div className="about-container">
          <div className="about-text">
            <h2 className="about-title">
              crafted with
              <span className="about-title-accent">passion</span>
            </h2>

  <br></br>
            <p className="about-description">
              Bean Addicted is more than just a coffee shop. We're a sanctuary for coffee lovers, a place where every cup tells a story of dedication, quality, and the pursuit of the perfect brew.
            </p>
            <p className="about-description">
              Located in the vibrant city of Balanga, Bataan, we bring together traditional coffee craftsmanship and modern aesthetics to create an unforgettable experience.
            </p>
                      <button 
  className="menu-button" 
  onClick={() => window.open('https://drive.google.com/file/d/1_8QMEtlssbJyvjZ6ZsluygHQg0BkFypt/view', '_blank')}
>
  SHOW MENU
</button>
          </div>
          
         
<div className="about-images">
  <div className="image-box box-1">
    <img src={AboutImage1} alt="About 1" className="about-img" />
  </div>
  <div className="image-box box-2">
    <img src={AboutImage2} alt="About 2" className="about-img" />
  </div>
  <div className="image-box box-3">
    <img src={AboutImage3} alt="About 3" className="about-img" />
  </div>
  <div className="image-box box-4">
    <img src={AboutImage4} alt="About 4" className="about-img" />
  </div>
</div>
        </div>
      </section>

 {/* Location Section */}
<section className="location-section">
  <div className="location-container">
    <h2 className="location-title">where to find us?</h2>
    <p className="location-subtitle">our store locations</p>
    
    <div className="location-grid">
      {/* Balanga Location */}
      {/* Balanga Location */}
     <div className="location-card">
  <div className="location-info">
    <div className="location-header">
      <h3 className="location-name">Bataan</h3>
      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=100089928705478" target="_blank" rel="noopener noreferrer" className="social-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/beanaddctd.coffee/" target="_blank" rel="noopener noreferrer" className="social-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </div>
    </div>
    <p className="location-address">
  <span className="location-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#e2e2e2ff">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
    </svg>
  </span>
  Talisay Balanga City Bataan, Balanga, Philippines, 2100
</p>
        </div>
       <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <clipPath id="map-wave" clipPathUnits="objectBoundingBox">
            {/* Subtle wavy border all around */}
            <path d="M0,0.05 C0.06,0 0.25,0 0.35,0.05 C0.5,0.09 0.75,0.09 0.85,0.05 C0.94,0 1,0 1,0.05 L1,0.95 C0.94,1 0.75,1 0.65,0.95 C0.5,0.91 0.25,0.91 0.15,0.95 C0.06,1 0,1 0,0.95 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="location-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d682.2742605290032!2d120.5460930203302!3d14.682817581538364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396419734d5b261%3A0x8e59ae0032b8e282!2sBean%20Addicted!5e0!3m2!1sen!2sph!4v1761491318533!5m2!1sen!2sph"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>

      {/* Elyu Location */}
      {/* Elyu Location */}
     <div className="location-card">
  <div className="location-info">
    <div className="location-header">
      <h3 className="location-name">La Union</h3>
      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=61575626251677" target="_blank" rel="noopener noreferrer" className="social-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/beanaddictedelyu/" target="_blank" rel="noopener noreferrer" className="social-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </div>
    </div>
    <p className="location-address">
  <span className="location-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#e2e2e2ff">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
    </svg>
  </span>
 011 Dulong Bayan St., Reyna Regente 2519 Bangar, Philippines
</p>
        </div>
       <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <clipPath id="map-wave" clipPathUnits="objectBoundingBox">
            {/* Subtle wavy border all around */}
            <path d="M0,0.05 C0.06,0 0.25,0 0.35,0.05 C0.5,0.09 0.75,0.09 0.85,0.05 C0.94,0 1,0 1,0.05 L1,0.95 C0.94,1 0.75,1 0.65,0.95 C0.5,0.91 0.25,0.91 0.15,0.95 C0.06,1 0,1 0,0.95 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="location-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1349.7326976597556!2d120.42882821144376!3d16.894653854037767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391e5fcfa8b7df5%3A0xeffa6630e395f510!2sBean%20Addicted%20Elyu%20Temporary%20location!5e0!3m2!1sen!2sph!4v1761493784069!5m2!1sen!2sph"
           width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
    </div>
  </div>
</section>

   {/* Contact Section */}
<section className="contact-section" id="contact">
  <div className="contact-container">
    <div className="contact-left">
<h2 className="contact-title">Contact Us</h2>
<p className="contact-subtitle">
  Let's connect! From franchise inquiries and event bookings to partnership ideas — reach out to us anytime. We're excited to bring great coffee and great people together.
</p>
 
      <div className="contact-info">
        <div className="info-row">
          <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          <span className="contact-text">+639 0862 07651</span>
        </div>
        <div className="info-row">
          <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <span className="contact-text">beanaddctd@gmail.com</span>
        </div>
      </div>
    </div>
    
    <div className="contact-right">
      <div className="suggestion-card">
        <h3 className="suggestion-title">Got a suggestion?</h3>
        <p className="suggestion-subtitle">
          We'd love to hear your brew-tiful ideas! Drop your email and message below — your thoughts help us serve a better cup every day.
        </p>
        
        <form className="contact-form">
          <div className="form-group">
            <label className="form-label">Email:</label>
            <input 
              type="email" 
              className="form-input" 
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Message:</label>
            <textarea 
              className="form-textarea" 
              rows="4"
              placeholder="Share your thoughts with us..."
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-button">SUBMIT</button>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default Home;