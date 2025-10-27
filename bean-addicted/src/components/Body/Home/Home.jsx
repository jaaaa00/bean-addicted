
import { useEffect, useState } from 'react';
import './Home.css';
import BGImage from "../../Bean_Files/BeanBG.png";
import Popup from "../../Bean_Files/BeanPop.png";
import BeanDrinks from "../../Bean_Files/BeanDrinks.png";


function Home() {

  // FAQ Item Component
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <button 
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="faq-icon">+</span>
      </button>
      <div className="faq-answer">
        {answer}
      </div>
    </div>
  );
}
    // Add these state variables here
    const [activeTab, setActiveTab] = useState('package');
    const [showReservationModal, setShowReservationModal] = useState(false);

    // Add these functions here
    const handleNextTab = () => {
      const tabs = ['package', 'inclusions', 'drinks', 'reservation'];
      const currentIndex = tabs.indexOf(activeTab);
      const nextIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[nextIndex]);
    };

    const handlePrevTab = () => {
      const tabs = ['package', 'inclusions', 'drinks', 'reservation'];
      const currentIndex = tabs.indexOf(activeTab);
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      setActiveTab(tabs[prevIndex]);
    };

    const handleReservationSubmit = (e) => {
      e.preventDefault();
      // Add your form submission logic here
      alert('Reservation submitted!');
      setShowReservationModal(false);
    };

    // Then your existing useEffect starts here
    useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.fade-in-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
    <img src={Popup} alt="Bean Addicted Logo" className="hero-logo" />
    <p className="hero-events-text">EVENTS - BAZAARS - POP UP</p>
  </div>

  <div 
    className="hero-arrow"
    onClick={() => document.querySelector('.about-section').scrollIntoView({ behavior: 'smooth' })}
  ></div>
</section>
 

    {/* Events Section */}
<section
  className="about-section"
  style={{ backgroundColor: "#e1e1e1" }}
>

  <div className="about-container">
    <div className="about-text">
      <h2 className="about-title">
        We'll bring your favorite coffee fix freshly served!
        <span className="about-title-accent">From weddings and office events to private parties and everything in between. </span>
      </h2>
      <p className="about-description">
        
        We're here to make your event extra special!
      </p>

      {/* Tab Buttons */}
      <div className="event-tabs">
        <button 
          className={`event-tab ${activeTab === 'package' ? 'active' : ''}`}
          onClick={() => setActiveTab('package')}
        >
          PACKAGE 
        </button>
        <button 
          className={`event-tab ${activeTab === 'inclusions' ? 'active' : ''}`}
          onClick={() => setActiveTab('inclusions')}
        >
          INCLUSIONS
        </button>
        <button 
          className={`event-tab ${activeTab === 'drinks' ? 'active' : ''}`}
          onClick={() => setActiveTab('drinks')}
        >
          DRINKS
        </button>
        <button 
          className={`event-tab ${activeTab === 'reservation' ? 'active' : ''}`}
          onClick={() => setActiveTab('reservation')}
        >
          RESERVATION
        </button>
      </div>
    </div>
    
    {/* Content Display Area */}
    <div className="event-content">
  <div className="content-display">
    
        {activeTab === 'package' && (
          <ul className="event-list">
            <li>Up to 8 drinks of your choice (coffee & non-coffee options)</li>
            <li>16oz iced drinks & 12oz hot drinks</li>
            <li>Professional baristas in uniform</li>
            <li>Custom menu board tailored to your selection</li>
            <li>Complimentary venue transportation (within a specified range)</li>
          </ul>
        )}

        {activeTab === 'inclusions' && (
          <ul className="event-list">
            <li>Minimum of 150 cups served</li>
            <li>Additional cups available at an extra charge</li>
            <li>A fully stocked cart with high-quality coffee beans & premium ingredients</li>
            <li>Freshly brewed drinks made on-site</li>
            <li>A seamless, hassle-free experience—just sit back & enjoy!</li>
          </ul>
        )}

        {activeTab === 'drinks' && (
          <div className="drinks-image">
            <img src={BeanDrinks} alt="Bean Drinks Menu" />
          </div>
        )}

        {activeTab === 'reservation' && (
          <div className="reservation-content">
            <p className="reservation-text">Ready to lock in your date?</p>
            <p className="reservation-subtext">Reach out through the form below!</p>
            <button className="reservation-button" onClick={() => setShowReservationModal(true)}>
              Reservation Form
            </button>
          </div>
        )}
      </div>

     {/* Navigation Arrows Below */}
  <div className="nav-arrow-container">
    <button className="nav-arrow" onClick={handlePrevTab}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32" height="32">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
      </svg>
    </button>
    <button className="nav-arrow" onClick={handleNextTab}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32" height="32">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
      </svg>
    </button>
     </div>
    </div>
  </div>

  {/* Reservation Modal */}
  {showReservationModal && (
    <div className="reservation-modal" onClick={() => setShowReservationModal(false)}>
      <div className="reservation-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setShowReservationModal(false)}>×</button>
    
        
        <form className="reservation-form" onSubmit={handleReservationSubmit}>
          <div className="form-row">
            <input type="text" placeholder="Name" required className="form-input full-width" />
          </div>
          <div className="form-row two-columns">
            <input type="tel" placeholder="Phone Number" required className="form-input" />
            <input type="email" placeholder="Email" required className="form-input" />
          </div>
          <div className="form-row two-columns">
            <input type="text" placeholder="Event Type" required className="form-input" />
            <input type="date" placeholder="Event Date" required className="form-input" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Event Location" required className="form-input full-width" />
          </div>
          <button type="submit" className="reserve-submit-button">Submit</button>
        </form>
      </div>
    </div>
  )}
</section>

{/* Contact Section */}
<section className="contact-section" id="contact">
  <div className="contact-container">
    {/* Left Column - Contact Form */}
    <div className="contact-left">
      <h2 className="contact-title">Have a question?</h2>
      <p className="contact-subtitle">
        We will get back to you as soon as we can! If you need assistance right away, give us a call at 0908 620 7651. We're always happy to help!
      </p>
      
      <form className="contact-form">
        <div className="contact-form-group">
          <input 
            type="text" 
            className="contact-form-input" 
            placeholder="Name"
            required
          />
        </div>
        
        <div className="contact-form-row">
          <input 
            type="tel" 
            className="contact-form-input" 
            placeholder="Phone Number"
            required
          />
          <input 
            type="email" 
            className="contact-form-input" 
            placeholder="Email"
            required
          />
        </div>
        
        <div className="contact-form-group">
          <textarea 
            className="contact-form-textarea" 
            placeholder="Message"
            required
          ></textarea>
        </div>
        
        <button type="submit" className="faq-submit-button">Submit</button>
      </form>
    </div>
    
    {/* Right Column - FAQ */}
    <div className="contact-right">
      <div className="faq-header">
        <h2 className="faq-title">FAQ! Need help?</h2>
        <p className="faq-subtitle">
          Got a question? We've probably answered it here. If not, please send us a message!
        </p>
      </div>
      
      <div className="faq-list">
        <FAQItem 
          question="How far in advance do I need to book the coffee cart?"
          answer="We recommend booking at least 2-4 weeks in advance to secure your preferred date. However, last-minute bookings may be accommodated depending on availability."
        />
        <FAQItem 
          question="Can I add more than the 8 included drinks?"
          answer="Yes! You can customize your menu by adding extra drink options."
        />
        <FAQItem 
          question="How long can the coffee cart stay at my event?"
          answer="Our standard service duration is 3-4 hours max, but we can extend upon request."
        />
        <FAQItem 
          question="What happens if I need more than 150 cups?"
          answer="No problem! Additional cups can be served at an extra charge per cup."
        />
        <FAQItem 
          question="Do you travel outside your service area?"
          answer="We offer complimentary venue transportation within a specific range. If your event is beyond this, additional travel fees may apply."
        />
        <FAQItem 
          question="How do I confirm my booking?"
          answer="A down payment is required to secure your reservation."
        />
      </div>
      
      <div className="faq-footer">
        <p className="faq-footer-text">Have a Nice Day!</p>
      </div>
    </div>
  </div>
</section>

 

   
    </div>
  );
}

export default Home;