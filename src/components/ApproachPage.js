import React, { useEffect } from 'react';
import NavBar from './NavBar';
import './ApproachPage.css';

const ApproachPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="approach-page">
      <NavBar mode="static" />

      <div className="facebook-widget2">
              <img src="personal-assistant-and-happy-child.jpg" alt="Approach hero image" className="pic8" />
              <div className="facebook-widget2-overly"> 
      <header className="approach-hero">
        <h1 className="approach-title">OUR APPROACH</h1>
        <p className="approach-subtitle">We provide consistent, caring, and reliable transport with staff trained to support SEND students, prioritising safety, communication, and student wellbeing.</p>
        
              
      </header>
      </div>
      </div>

      <section className="section content-light1">
        <div className="page-content1">
          <h2 className="section-title1">Consistent Staffing</h2>
          <p className="section-text1">Drivers and escorts are assigned to specific routes for familiarity and trust. They meet students and parents/carers prior to the start of term to build a supportive relationship.</p>

          <h2 className="section-title1">Specialist Training</h2>
          <p className="section-text1">Staff are trained in defensive driving, first aid, safeguarding, and supporting SEND students, with training tailored to individual passenger needs.</p>

          <h2 className="section-title1">Safety Standards</h2>
          <p className="section-text1">Vehicles are maintained to the highest standards and staff undergo enhanced DBS checks. Routes are planned and monitored to minimise journey times.</p>
        
<img src="pic9.png" alt="Approach content image" className="pic99" />
        </div>
        
      </section>
      

      <section className="section content-light">
        <div className="page-content">
          <h2 className="section-title">COMMUNICATION</h2>
          <p className="section-text">Parents and carers have direct access to drivers and our management team. We keep you informed and respond quickly to changes and enquiries.</p>

          <h2 className="section-title">RELIABILITY</h2>
          <p className="section-text">Routes are monitored and adapted to meet school schedules. We aim to minimise on-vehicle time and ensure dependable daily operations.</p>

          <h2 className="section-title">STUDENT WELLBEING</h2>
          <p className="section-text">We foster a supportive and calm travel environment, with care tailored to each student's needs to promote comfort and confidence on every journey.</p>
          <img src="pic10.png" alt="Training content image" className="pic10" />

          <div className="content-line4"></div>
        </div>
        
      </section>

      <section className="section-band">
        <div className="page-content">
          <h2 className="band-title">SPECIALLY TRAINED STAFF</h2>
        </div>
      </section>

      <div className="band-paragraphs">
            <p>All staff members are employed on contracted terms by 24×7 – we utilise neither temporary agency nor self‑employed staff.<br />
               Every potential employee is assessed for their suitability and motivational fit for the role, and Enhanced Disclosure and Barring Service (DBS) checks are undertaken for all staff, together<br />
                with full referencing, before any duties commence.</p>
            <p>All 24×7 drivers hold private hire licences, for which satisfactory Enhanced DBS certification and a DVLA Group 2 Medical are mandatory. Most local authorities also require their licence <br /> 
            applicants to undertake a successful driving assessment with an Approved Driving Instructor (ADI) before the licence will be issued.</p>
            <p>All drivers and passenger assistants are provided with tailored, person‑centred training that meets the individual needs of their passenger(s).</p>
            <p>They must furthermore be approved by the relevant local council which awards the service contract.</p>
          </div>



      <section className="section-band2">
        <div className="page-content">
          <h2 className="band-title2">THE ONE OPERATOR OPERATION</h2>
         
        </div>
      </section>

      <div className="band-paragraphs2">
      <p>The one operator operation means that we deal with the transport for all special needs students attending a particular school. This approach has significant and widely accepted advantages for service stakeholders in terms of cost savings, ease of communication, and operational effectiveness.</p>
      </div>

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

      <section id="contact" className="footer-section">
        <div className="footer">
          <div className="footer-content">
            <div className="footer-column">
              <h3>Our Approach</h3>
              <ul>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/customer-support">Customer Support</a></li>
                <li><a href="#charity">CCS Staff Login</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Registered Office</h3>
              <ul>
                <li>Studios, Kiln House</li>
                <li>Pottergate</li>
                <li>NR2 1DX</li>
                <li>call: 01603 381 372</li>
                <li>email: Info@zovatransport.co.uk</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Site Map              </h3>
              <ul>
                <li><button onClick={() => scrollToSection('hero')} className="footer-link">24x7 Group</button></li>
                <li><a href="/charity">Centre Algarve (Our Charity)</a></li>
                <li><button onClick={() => scrollToSection('why-work')} className="footer-link">Job Application</button></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Follow Us On Facebook</h3>
              <div className="facebook-widget">
              <img src="pic1.png" alt="Disability Confident Committed" className="pic1" />
              <div className="facebook-widget-overly"> 
              <button className="facebook-follow-btn"><img src="pic2.png" alt="Disability Confident Committed" className="pic2" />    Follow Page</button>
              </div>
              </div>
            </div>
          </div>
          
          <div className="copyright">
          <div className="content-line3"></div>
            © 2025 Zova Transport – Part of the Zova Group
          </div>
        </div>
      </section>


    </div>
  );
};

export default ApproachPage;

