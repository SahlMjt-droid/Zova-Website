import React, { useEffect, useState } from 'react';
import './HomePage.css';
import NavBar from './NavBar';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple embed relies on YouTube's standard autoplay behavior (muted)

  

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage">
      {/* Navigation */}
      <NavBar mode="home" />

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-video" aria-hidden="true">
          <iframe
            title="hero-video"
            src="https://www.youtube.com/embed/4ByZqGEBgJ8?autoplay=1&mute=1&loop=1&playlist=4ByZqGEBgJ8&controls=0&modestbranding=1&rel=0"
            frameBorder="0"
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
          />
        </div>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <h1 className="hero-title">24X7 NORFOLK</h1>
          <p className="hero-subtitle">
            Specialist, contracted transport for schools, young persons with special educational needs, and social care establishments
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="welcome-section">
        <div className="page-content">
          <h1 className="page-title">WELCOME TO 24X7 GROUP</h1>
          
          <div className="welcome-content">
            <p className="welcome-aim center-text">
              Our aim is to ensure that we give the best home to School and Adult social care Transport experience possible.
            </p>
            
            <div className="company-description">
              <p>
                Our founding directors have many years' experience in passenger transport. Andy Mahoney was awarded his first Home to School contract in 1984 and was awarded an MBE for
                 services to those with special needs and their families in the new year's honours list 2001. The directors also purchased and established the Centre Algarve which is Mainland Europe's 
                 only dedicated special needs holiday Centre. The 24x7 Special needs Holiday Trust is the Charity that operates the Centre Algarve. The company operates to high quality standards and
                  has been awarded a 5 star grading by the Licensed Private Hire Car Association.
              </p>
            </div>
          </div>

          
        </div> 
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="page-content">
          <div className="three-columns">
            <div className="column">
              <div className="column-icon">💼</div>
              <h2 className="column-title">EXPERIENCE</h2>
              <p className="column-text">
                The Company has been operating Home to School contracts for many years but since 2003 has specialised in special needs passenger transport. The Directors of the company have used their many years of passenger transport experience to design and set up arguably the best and most effective special needs transport organisation in the country.
              </p>
            </div>
            
            <div className="column">
              <div className="column-icon">♿</div>
              <h2 className="column-title">SPECIALIST VEHICLES</h2>
              <p className="column-text">
                The company operates licenced private hire vehicles issued by local licencing authority's and a Public service vehicle operator's licence issued by VOSA. We own and operate a fleet of modern vehicles that are dedicated to school and social care transport. Vehicles are ordered and purchased specifically to the clients requirements. We operate 166 wheelchair accessible vehicles.
              </p>
            </div>
            
            <div className="column">
              <div className="column-icon">🚗</div>
              <h2 className="column-title">MODERN FLEET</h2>
              <p className="column-text">
                The average age of the vehicle fleet is less than 3 years. Currently our fleet exceeds 1,693 vehicles, consisting of cars, people carriers and wheelchair accessible vehicles we employ in excess of 1,691 drivers and 1,343 passenger assistants. The majority of our vehicles are to Euro 6 specifications ensuring a low carbon footprint within the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="statistics-section">
        <div className="page-content">
          <h1 className="page-title1">24X7 NATIONWIDE STATISTICS</h1>
          
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">4,566</span>
              <span className="stat-label">Fleet vehicles</span>
            </div>
            
            <div className="stat-item">
              <span className="stat-number">484</span>
              <span className="stat-label">Wheelchair accessible vehicles</span>
            </div>
            
            <div className="stat-item">
              <span className="stat-number">4,318</span>
              <span className="stat-label">Licensed drivers</span>
            </div>
            
            <div className="stat-item">
              <span className="stat-number">2,538</span>
              <span className="stat-label">Passenger assistants</span>
            </div>
            
            <div className="stat-item">
              <span className="stat-number">98</span>
              <span className="stat-label">Councils we currently work with</span>
            </div>
            
            <div className="stat-item">
              <span className="stat-number">11,341</span>
              <span className="stat-label">Passengers we currently transport</span>
            </div>
            
            <div className="stat-item">
              <span className="stat-number">250</span>
              <span className="stat-label">Administration staff delivering these contracts</span>
            </div>
            
            <div className="stat-item">
              <span className="stat-number">UNDEFINED</span>
              <span className="stat-label">Daily passenger miles</span>
            </div>
          </div>
          
          <div className="daily-journeys">
            <h2>TODAY WE HAVE DONE UNDEFINED JOURNEYS</h2>
          </div>
        </div>
      </section>

      {/* Why Work For Us Section */}
      <section id="why-work" className="why-work-section">
        {/* Contact Section */}
        <div className="contact-section">
          <p className="contact-text">Contact us for more information</p>
          <button className="contact-button">CONTACT US</button>
        </div>

        {/* Main Content */}
        <div className="page-content">
          <h1 className="page-title3">WHY WORK FOR US</h1>
          
          <div className="testimonials">
            <div className="testimonial">
              "I've really enjoyed my time working for 24/7. I feel valued in what I do, supported in my work, confident in the training and the terms and conditions are probably the best you will find for the type of work. It's more like being a family than a job."
            </div>
            
            <div className="testimonial">
              "I am new to the area of Dorset and have found this kind of work has been the best way to get to know my surroundings and meet new people. Justin is always at the end of the phone or quick to email if you need any support. I drive a new car with all the comforts of an easy drive. I would highly recommend working with us."
            </div>
            
            <div className="testimonial">
              "Well 10 months into my employment with 24x7, it's proven to be the right decision to work with Justin. From early informal chats through to interviews and then the first route, it's been a great process. The additional bonus is of course the decent fleets of fully loaded cars, holiday pay and detailed payslips showing hours worked. All in all, a great company."
            </div>
          </div>
        </div>
      </section>

      
      {/* Charity/Footer Section */}
      <section id="charity" className="charity-section">
        <div className="page-content">
          <div className="content-line"></div>
          
          
          {/* Certification Badges */}
          <div className="certifications">
            <img src="/dc_badge1.png" alt="Disability Confident Committed" className="cert-img" />
            <img src="/cyberessentials%20(1).png" alt="Cyber Essentials Certified" className="cert-img2" />
          </div>
          <div className="content-line2"></div>
        </div>
      
      </section>

      {/* Contact/Footer Section */}
      <section id="contact" className="footer-section">
        <div className="footer">
          <div className="footer-content">
            <div className="footer-column">
              <h3>Our Approach</h3>
              <ul>
                <li><a href="#charity">Privacy Policy</a></li>
                <li><a href="#charity">Customer Care Policy</a></li>
                <li><a href="#charity">CCS Staff Login</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>24x7 Head Office</h3>
              <ul>
                <li>Little Easton Manor</li>
                <li>Park Road</li>
                <li>Little Easton</li>
                <li>CM6 2JN</li>
                <li>call: 01279 661661</li>
                <li>email: info@24x7ltd.co.uk</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Site Map</h3>
              <ul>
                <li><button onClick={() => scrollToSection('hero')} className="footer-link">24x7 Group</button></li>
                <li><a href="/charity">Centre Algarve (Our Charity)</a></li>
                <li><button onClick={() => scrollToSection('why-work')} className="footer-link">Job Application</button></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Follow Us On Facebook</h3>
              <div className="facebook-widget">
                <div className="facebook-header">
                  <div className="facebook-logo">24/7</div>
                  <div className="facebook-title">24x7 Group</div>
                  <div className="facebook-followers">7.1K followers</div>
                </div>
                <div className="facebook-content">
                  <div className="facebook-image">🚗🚗🚗</div>
                  <button className="facebook-follow-btn">Follow Page</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="copyright">
            Copyright 2021-2022 (c) 24x7 Ltd
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;