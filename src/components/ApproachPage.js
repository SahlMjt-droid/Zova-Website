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
        <p className="approach-subtitle">We value a person-centred approach to the design and delivery of our services. Needs are individual, and are continually and thoroughly assessed for the duration of every contract.</p>
        
              
      </header>
      </div>
      </div>

      <section className="section content-light1">
        <div className="page-content1">
          <h2 className="section-title1">Consistent environment</h2>
          <p className="section-text1">Drivers and escorts are allocated a route on a permanent basis, and they meet with students and parents/carers prior to the start of the term. This helps to support the on-going relationship between all stakeholders for the duration of a service contract.</p>

          <h2 className="section-title1">Customer care</h2>
          <p className="section-text1">All our staff are aware of the need for first-class customer service, sensitivity, and diplomacy.
          The safeguarding of children and vulnerable adults and our responsibilities in relation to this remain our highest priorities at all times.</p>

          <h2 className="section-title1">Consistent care</h2>
          <p className="section-text1">Sometimes for unavoidable operational reasons, it is necessary to allocate a relief driver to a route.
In these cases, we take care to introduce relief drivers and escorts to the passengers in advance of the temporary changes.
This is done in the company of the regular escort and on the familiar territory of the school grounds.</p>
        
<img src="pic9.png" alt="Approach content image" className="pic99" />
        </div>
        
      </section>
      

      <section className="section content-light">
        <div className="page-content">
          <h2 className="section-title">COMMUNICATION</h2>
          <p className="section-text">Parents and carers have day-to-day communication with the Company via the driver and escort, and a low-cost telephone number so that parents and carers can contact our management team directly.</p>

          <h2 className="section-title">CODE OF PRACTICE</h2>
          <p className="section-text">A code of practice for passenger illness in transit forms a part of our safeguarding policy. On occasions, travel arrangements (including passenger numbers and timings) may be subject to change. In such cases, routes are rescheduled, and we will always seek to keep on-vehicle time to a minimum.</p>

          <h2 className="section-title">TRAINING</h2>
          <p className="section-text">Our drivers receive training over and above legal requirements. This training may include instruction in defensive driving techniques, sign language courses for all staff involved with students who have speech difficulties, and awareness courses for autism, ADHD, Asperger and epilepsy, where relevant. All training support is determined by a person-centred consideration of a passenger's individual needs.</p>
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
            Copyright 2021-2022 (c) 24x7 Ltd
          </div>
        </div>
      </section>


    </div>
  );
};

export default ApproachPage;

