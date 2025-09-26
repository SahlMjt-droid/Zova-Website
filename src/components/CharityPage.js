import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './CharityPage.css';

const Card = ({ icon, title, children }) => (
  <div className="charity-card">
    <div className="charity-card-icon" aria-hidden="true">{icon}</div>
    <h3 className="charity-card-title">{title}</h3>
    <p className="charity-card-text">{children}</p>
  </div>
);

const CharityPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="charity-page">
      <NavBar mode="static" />

      {/* Hero */}
      <header className="charity-hero">
        <div className="charity-hero-inner">
          <div className="hero-logo">24<span className="plus">+</span>7</div>
          <h1 className="charity-hero-title">CENTRE ALGARVE</h1>
          <p className="charity-hero-sub">Holiday centre for children with special educational needs and disabilities.</p>
        </div>
      </header>

      {/* Welcome */}
      <section className="section content-light">
        <div className="page-content charity-intro">
          <div className="intro-col">
            <h2 className="intro-heading">A very warm welcome to the Centre Algarve</h2>
            <p>
              Set in the beautiful Ria Formosa Nature Reserve and just 2 minutes from the pretty local village of
              Moncarapacho, The Centre Algarve is mainland Europe’s only specialist holiday centre. It is fully
              equipped to allow those with special needs of all ages to experience a wonderful holiday with their family
              or carers. We have created an environment where everybody feels comfortable, safe and secure within our
              wonderful fully enclosed and gated grounds. A magical and unique holiday centre where fun and memories are
              created.
            </p>
            <p>
              Centre Algarve boasts 14 bedrooms, which keeps the experience intimate and not too overwhelming. Whether
              you are relaxing by the pool or enjoying our private secure facilities, you will always be able to keep a
              watchful eye on your children even while unwinding and soaking up the bliss of this truly remarkable
              setting.
            </p>
          </div>
          <div className="intro-images" aria-hidden="true">
            <div className="img img-1" />
            <div className="img img-2" />
          </div>
        </div>
      </section>

      {/* Awards strip */}
      <section className="section band">
        <div className="page-content awards-strip">
          <div className="award" />
          <div className="award" />
          <div className="award" />
        </div>
      </section>

      {/* Facilities grid */}
      <section className="section content-light">
        <div className="page-content">
          <h2 className="band-title purple">FACILITIES THAT CATER FOR YOUR EVERY NEED</h2>
          <div className="facilities-grid">
            <Card icon="📍" title="THE DISCOVERY CENTRE">
              The Discovery Centre is a key asset of The Centre Algarve. It contains a classroom, a sensory and soft
              play room, a kitchen, and a dining area, together with a large lounge that can be converted to an ideal
              space for events.
            </Card>
            <Card icon="🐾" title="ANIMAL EXPERIENCE">
              Guests can enjoy an up-close encounter with our wonderful animals. Carefully selected and friendly,
              they invigorate the senses and bring something educational, different, and fun to brighten the day.
            </Card>
            <Card icon="🏊" title="SWIMMING POOL">
              Swimming and paddling pools are enclosed for safety and security, accessible via a seated hoist, with a
              small shallow pool for confidence building, and a jacuzzi pool for fun and therapy.
            </Card>
            <Card icon="🌿" title="SENSORY AND VEGETABLE GARDENS">
              Extensive gardens with many smells, textures and colours. You will find gardens of herbs, flowers,
              succulents, many varieties of trees, and a large vegetable garden.
            </Card>
            <Card icon="🧩" title="SENSORY ROOM">
              A multi-sensory soft play room allowing visitors to experience different light, sound, and tactile
              sensations. Free to use for all our visitors and of interest to guests of all ages.
            </Card>
            <Card icon="🍽️" title="CATERING">
              We offer the choice of self‑catering or the opportunity to frequent our onsite restaurant that will cater
              for your every gastronomic need.
            </Card>
          </div>
        </div>
      </section>

      {/* Footer with badges (reuse style) */}
      <section id="charity-footer" className="section badges">
        <div className="page-content">
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

export default CharityPage;


