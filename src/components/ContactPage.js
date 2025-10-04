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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <NavBar mode="static" />

      {/* Hero with overlay text */}
      <div className="contact-widget3">
              <img src="contact-us.jpg" alt="job hero image" className="contpic" />
              <div className="contact-widget3-overly"> 
      <header className="contact-hero">
        <h1 className="contact-hero-title">GET IN TOUCH</h1>
      </header>
      </div>
      </div>

      <section className="contact-details">
      
        <div className="contact-strip">
        <div className="content-linechcon"></div>
          <h2>CONTACT DETAILS</h2>
        </div>

        <div className="left">
            <h3 className="org">24X7 NORFOLK</h3>
            <p className="note top">For an immediate enquiry please call us on 01603 733900</p>
            <p className="note">Please note that calls may be recorded for training and monitoring purposes.</p>
            </div>

        <div className="page-content details-grid">
       
            <div className="card3">
            <img src="cll.png" alt="job hero image" className="cllpic" />
              <div>
                <div className="card3-title">Call Us On</div>
                <div className="card3-sub">01603 733900</div>
              </div>
            

            <div className="card4">
            <img src="eml.png" alt="job hero image" className="emlpic" />
              <div>
                <div className="card4-title">Email Us At</div>
                <div className="card4-sub">norfolk@24x7ltd.co.uk</div>
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

     
      </section>

                   {/* Charity/Footer Section */}
                   <section id="charity" className="charity-section22">
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

export default ContactPage;


