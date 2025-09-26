import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './ContactPage.css';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <NavBar mode="static" />

      {/* Hero with overlay text */}
      <header className="contact-hero">
        <h1 className="contact-hero-title">GET IN TOUCH</h1>
      </header>

      <section className="contact-details">
        <div className="contact-strip">
          <h2>CONTACT DETAILS</h2>
        </div>

        <div className="page-content details-grid">
          <div className="left">
            <h3 className="org">24X7 NORFOLK</h3>
            <p className="note top">For an immediate enquiry please call us on 01603 733900</p>
            <p className="note">Please note that calls may be recorded for training and monitoring purposes.</p>

            <div className="card">
              <div className="icon" aria-hidden="true">📞</div>
              <div>
                <div className="card-title">Call Us On</div>
                <div className="card-sub">01603 733900</div>
              </div>
            </div>

            <div className="card">
              <div className="icon" aria-hidden="true">✉️</div>
              <div>
                <div className="card-title">Email Us At</div>
                <div className="card-sub">norfolk@24x7ltd.co.uk</div>
              </div>
            </div>
          </div>

          <form className="right" onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} rows={10} />
            <div className="actions">
              <button type="submit" className="send">send</button>
              {submitted && <span className="sent">Thanks — we’ll be in touch.</span>}
            </div>
          </form>
        </div>

        <div className="page-content badges-row">
          <div className="divider" />
          <div className="badges">
            <div className="badge dc" aria-label="Disability Confident" />
            <div className="badge ce" aria-label="Cyber Essentials" />
          </div>
        </div>
      </section>

      <footer className="approach-footer">
        <div className="page-content footer-grid">
          <div>
            <h3>Our Approach</h3>
            <ul>
              <li><Link to="/approach">Privacy Policy</Link></li>
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
              <li><Link to="/charity">Centre Algarve (Our Charity)</Link></li>
              <li><Link to="/job-opportunities">Job Application</Link></li>
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

export default ContactPage;


