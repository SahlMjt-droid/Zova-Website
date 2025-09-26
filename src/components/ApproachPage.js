import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './ApproachPage.css';

const ApproachPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="approach-page">
      <NavBar mode="static" />

      <div className="facebook-widget2">
              <img src="pic8.jpg"  className="pic8" />
              <div className="facebook-widget2-overly"> 
      <header className="approach-hero">
        <h1 className="approach-title">OUR APPROACH</h1>
        <p className="approach-subtitle">We value a person-centred approach to the design and delivery of our services. Needs are individual, and are continually and thoroughly assessed for the duration of every contract.</p>
        
              
      </header>
      </div>
      </div>
      

      <section className="section content-light">
        <div className="page-content">
          <h2 className="section-title">COMMUNICATION</h2>
          <p className="section-text">Parents and carers have day-to-day communication with the Company via the driver and escort, and a low-cost telephone number so that parents and carers can contact our management team directly.</p>

          <h2 className="section-title">CODE OF PRACTICE</h2>
          <p className="section-text">A code of practice for passenger illness in transit forms a part of our safeguarding policy. On occasions, travel arrangements (including passenger numbers and timings) may be subject to change. In such cases, routes are rescheduled, and we will always seek to keep on-vehicle time to a minimum.</p>

          <h2 className="section-title">TRAINING</h2>
          <p className="section-text">Our drivers receive training over and above legal requirements. This training may include instruction in defensive driving techniques, sign language courses for all staff involved with students who have speech difficulties, and awareness courses for autism, ADHD, Asperger and epilepsy, where relevant. All training support is determined by a person-centred consideration of a passenger's individual needs.</p>
        </div>
        
      </section>

      <section className="section band">
        <div className="page-content">
          <h2 className="band-title">SPECIALLY TRAINED STAFF</h2>
          <div className="band-paragraphs">
            <p>All staff members are employed on contracted terms by 24×7 – we utilise neither temporary agency nor self‑employed staff. Every potential employee is assessed for their suitability and motivational fit for the role, and Enhanced Disclosure and Barring Service (DBS) checks are undertaken for all staff, together with full referencing, before any duties commence.</p>
            <p>All 24×7 drivers hold private hire licences, for which satisfactory Enhanced DBS certification and a DVLA Group 2 Medical are mandatory. Most local authorities also require their licence applicants to undertake a successful driving assessment with an Approved Driving Instructor (ADI) before the licence will be issued.</p>
            <p>All drivers and passenger assistants are provided with tailored, person‑centred training that meets the individual needs of their passenger(s). They must furthermore be approved by the relevant local council which awards the service contract.</p>
          </div>
        </div>
      </section>

      <section className="section content-shaded">
        <div className="page-content two-col">
          <div className="col">
            <h2 className="section-title">CONSISTENT ENVIRONMENT</h2>
            <p className="section-text">Drivers and escorts are allocated a route on a permanent basis, and they meet with students and parents/carers prior to the start of the term. This helps to support the on‑going relationship between all stakeholders for the duration of a service contract.</p>

            <h2 className="section-title">CUSTOMER CARE</h2>
            <p className="section-text">All our staff are aware of the need for first‑class customer service, sensitivity, and diplomacy. The safeguarding of children and vulnerable adults and our responsibilities in relation to this remain our highest priorities at all times.</p>

            <h2 className="section-title">CONSISTENT CARE</h2>
            <p className="section-text">Sometimes for unavoidable operational reasons, it is necessary to allocate a relief driver to a route. In these cases, we take care to introduce relief drivers and escorts to the passengers in advance of the temporary changes. This is done in the company of the regular escort and on the familiar territory of the school grounds.</p>
          </div>
          <div className="col phone-illustration" aria-hidden="true" />
        </div>
      </section>

      <section className="section content-light">
        <div className="page-content">
          <h2 className="band-title purple">THE ONE OPERATOR OPERATION</h2>
          <p className="section-text center">The one operator operation means that we deal with the transport for all special needs students attending a particular school. This approach has significant and widely accepted advantages for service stakeholders in terms of cost savings, ease of communication, and operational effectiveness.</p>

          <div className="cert-row">
            <div className="cert-badge disability">
              <div className="cert-icon">👥</div>
              <div className="cert-lines">
                <div className="cert-text">disability confident</div>
                <div className="cert-sub">COMMITTED</div>
              </div>
            </div>
            <div className="cert-badge cyber">
              <div className="cert-icon">🛡️</div>
              <div className="cert-lines">
                <div className="cert-text">CYBER ESSENTIALS</div>
                <div className="cert-sub">CERTIFIED</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="approach-footer">
        <div className="page-content footer-grid">
          <div>
            <h3>Our Approach</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Customer Care Policy</a></li>
              <li><a href="#">CCS Staff Login</a></li>
            </ul>
          </div>
          <div>
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
          <div>
            <h3>Site Map</h3>
            <ul>
              <li><Link to="/">24x7 Group</Link></li>
              <li><a href="#">Centre Algarve (Our Charity)</a></li>
              <li><a href="#">Job Application</a></li>
            </ul>
          </div>
          <div>
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
        <div className="copyright">Copyright 2021-2022 (c) 24x7 Ltd</div>
      </footer>
    </div>
  );
};

export default ApproachPage;

