import React, { useEffect } from 'react';
import NavBar from './NavBar';
import './ApplicationFormPage.css';
const logoImg = '/24x7logo.svg';

const Field = ({ label, required, children }) => (
  <label className="af-field">
    <div className="af-label">
      {label} {required && <span aria-hidden="true">*</span>}
    </div>
    <div className="af-input">{children}</div>
  </label>
);

const ApplicationFormPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="application-page">
      {/* Minimal header to mimic external form look (no main site nav) */}
      <header className="af-min-header">
        <div className="mini-logo-img">
          <img src={logoImg} alt="24x7 Group" />
        </div>
        <div className="mini-tab">Application Form</div>
      </header>

      <header className="af-hero">
        <h1 className="af-title">APPLICATION FORM</h1>
        <p className="af-sub">Thank you for considering the 24×7 Group as your next employment opportunity. Please complete the following questions and submit your application.</p>
      </header>

      <section className="page-content">
        <form className="af-form" onSubmit={(e) => e.preventDefault()}>
          <div className="af-grid">
            <Field label="Please select the closest area in which you would like to work" required>
              <select defaultValue="">
                <option value="" disabled>Please Select Area</option>
                <option value="area-1">Area 1</option>
                <option value="area-2">Area 2</option>
              </select>
            </Field>
            <Field label="Where did you hear about us?" required>
              <select defaultValue="">
                <option value="" disabled>-- Please select --</option>
                <option>Website</option>
                <option>Indeed</option>
                <option>Friend/Colleague</option>
              </select>
            </Field>
            <Field label="Position you would like to apply for?" required>
              <div className="af-toggle">
                <label><input type="radio" name="role" defaultChecked /> Driver</label>
                <label><input type="radio" name="role" /> Passenger Assistant</label>
              </div>
            </Field>
            <Field label="First Name" required><input type="text" /></Field>
            <Field label="Last Name"><input type="text" /></Field>
            <Field label="Town" required><input type="text" /></Field>
            <Field label="Postcode" required><input type="text" /></Field>
            <Field label="Email Address" required><input type="email" /></Field>
            <Field label="Phone" required><input type="tel" /></Field>
          </div>

          <div className="af-actions">
            <button type="submit" className="af-submit">Submit</button>
          </div>
        </form>
      </section>

      {/* Stats headings row */}
      <section className="af-stats">
        <div className="page-content af-stats-grid">
          <div>Fleet Vehicles</div>
          <div>Wheelchair Accessible Vehicles</div>
          <div>Licensed Drivers</div>
          <div>Passenger Assistants</div>
          <div>Councils We Currently Work With</div>
          <div>Passengers We Currently Transport</div>
          <div>Office Staff Delivering These Contracts</div>
          <div>Daily Passenger Miles</div>
        </div>
        <div className="page-content af-journeys">Today we have done journeys</div>
      </section>

      {/* About 24x7 */}
      <section className="af-about">
        <div className="page-content">
          <h2 className="af-about-title">ABOUT 24×7</h2>
          <p className="af-about-intro">The Company has since 2003 specialised in special needs passenger transport. The directors of 24×7 have used their many years of passenger transport experience to design and set up arguably the most effective home‑to‑school transport organisation in the country.</p>
          <div className="af-about-grid">
            <div className="af-about-card">
              <div className="af-about-icon">⚙️</div>
              <h3 className="af-about-head">EXPERIENCED</h3>
              <p>The Company has since 2003 specialised in special needs passenger transport. Our experience shapes reliable, safe services daily.</p>
            </div>
            <div className="af-about-card">
              <div className="af-about-icon">🚌</div>
              <h3 className="af-about-head">SPECIALIST VEHICLES</h3>
              <p>We operate a fleet of modern vehicles dedicated to school and social care transport. Vehicles are specified and purchased to client requirements.</p>
            </div>
            <div className="af-about-card">
              <div className="af-about-icon">🌿</div>
              <h3 className="af-about-head">MODERN FLEET</h3>
              <p>All cars are to Euro 6 specification as a minimum, ensuring a low carbon footprint while maintaining high quality and safety standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact band + footer */}
      <section className="af-contact-band">
        <div className="page-content">
          <h3>Get in Touch ✉️</h3>
          <p>Contact us for more information.</p>
        </div>
      </section>
      <footer className="approach-footer">
        <div className="page-content footer-grid">
          <div>
            <h3>Our Approach</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Customer Care Policy</a></li>
              <li><a href="#">CCS staff login</a></li>
            </ul>
          </div>
          <div>
            <h3>24x7 Ltd</h3>
            <ul>
              <li>Little Easton Manor</li>
              <li>Park Rd</li>
              <li>Dunmow</li>
              <li>CM6 2JN</li>
              <li>call: 01279 661661</li>
              <li>email: info@24x7ltd.co.uk</li>
            </ul>
          </div>
          <div>
            <h3>Sitemap</h3>
            <ul>
              <li><a href="/">24x7 Group</a></li>
              <li><a href="/charity">Centre Algarve (Our Charity)</a></li>
              <li><a href="/apply">Job Application</a></li>
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

export default ApplicationFormPage;


