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

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const CharityPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="charity-page">
      <NavBar mode="static" />

      {/* Hero */}
      <div className="charity-widget3">
              <img src="algarve.jpg" alt="job hero image" className="pic8" />
              <div className="charity-widget3-overly"> 
      <header className="charity-hero">
          <h1 className="charity-hero-title">CENTRE ALGARVE</h1>
          <p className="charity-hero-sub">Holiday centre for children with special educational needs and disabilities.</p>
      </header>
      </div>
      </div>

      {/* Welcome */}
      <section className="section content-light2">
        <div className="page-content charity-intro">
          <div className="intro-col">
          <img src="centre-algarve-banner.jpg" alt="job hero image" className="piccent" />
            <h2 className="intro-heading">A very warm welcome to the Centre Algarve</h2>
            <p>
              Set in the beautiful Ria Formosa Nature Reserve and just 2 minutes from the pretty local village of
              Moncarapacho, The <br/>
              Centre Algarve is mainland Europe’s only specialist holiday centre. It is fully
              equipped to allow those with special needs of<br/> 
              all ages to experience a wonderful holiday with their family
              or carers.</p>
              <p>We have created an environment where everybody feels comfortable, safe and secure within our
              wonderful fully enclosed <br/> and gated grounds.</p>
              <p> A magical and unique holiday centre where fun and memories are
              created.
            </p>
            <p>
              Centre Algarve boasts 14 bedrooms, which keeps the experience intimate and not too overwhelming, which can be the<br/> case with many larger complexes.<br/>
Whether you are relaxing by the pool or enjoying our private secure facilities, you will always be able to keep a watchful <br/> 
eye on your children even while unwinding and soaking up the bliss of this truly remarkable setting.

            </p>
          </div>
          <div className="intro-images" aria-hidden="true">
          <img src="centre-algarve-1.jpg"   />
          <img src="centre-algarve-2.jpg"  />
          </div>
          
        </div>
        <div className="content-linech"></div>
      </section>



      {/* Facilities grid */}
      <section className="section f">
        <div className="page-contentf">
          <h2 className="band-titlef">FACILITIES THAT CATER FOR<br/> YOUR EVERY NEED</h2>
          <div className="facilities-grid">
            <Card title="THE DISCOVERY CENTRE">
            <img src="fi1.png"   className= 'fi1'/>
            The Discovery Centre is a key asset of The Centre Algarve.It contains a classroom, a sensory and soft play room, a kitchen, and a dining area, together with a large lounge that can be converted to an space that is ideal for events.Outside, the stunning sun terrace is furnished with loungers, tables, and chairs for relaxation and is a great area to meet other guests, all within the view of the main accommodation and rooms.
            </Card>
            <Card title="ANIMAL EXPERIENCE">
            <img src="fi2.png" className= 'fi2' />
            As an integral part of  their stay, all guests can enjoy an up-close encounter with the inhabitants of our wonderful menagerie.We have a fantastic selection of animals, who will invigorate the senses and bring something educational, different, and fun to brighten the day.They have been carefully selected for our programmes, and are friendly and welcoming for all our guests.

            </Card>
            <Card title="SWIMMING POOL">
            <img src="fi3.png" className= 'fi3'  />
            The swimming and paddling pools are enclosed for safety and security.The pool is accessible via a seated hoist, and there is also a small shallow pool for children who are still building their confidence levels!. There is also a jacuzzi pool which is both for fun and therapy.


            </Card>
            <Card title="SENSORY AND VEGETABLE GARDENS">
            <img src="fi4.png" className= 'fi4' />
            <p> The Centre boasts extensive gardens with many smells textures and colours.</p>
            <p>You will find gardens of herbs, flowers, succulents, many varieties of trees, and a large vegetable garden.</p>
            </Card>
            <Card title="SENSORY ROOM">
            <img src="fi5.png" className= 'fi5' />
            <p>The Discovery Centre has a multi-sensory soft play room, which allows visitors to experience different light, sound, and tactile sensations.</p>
            <p>The room is available for use, free of charge, by all of our visitors and will be of particular interest to guests of all ages with learning difficulties and physical impairments.</p>
            </Card>
            <Card title="CATERING">
            <img src="fi6.png" className= 'fi6' />
            <p>At Centre Algarve, your holiday is as special to us as it is to you, and guaranteeing you the freedom and the flexibility to enjoy your stay is essential.</p>
            <p>We therefore offer you the choice of self-catering or the opportunity to frequent our onsite restaurant that will cater for your every gastronomic need!</p>
            </Card>
          </div>
        </div>
      </section>

      <div className="content-linech2"></div>
      <img src="POL-Banner.jpeg" className= 'pol-b' />
      <div className="content-linech3"></div>
     
            {/* Awards strip */}
            <section className="section bandwr">  
        <div className="page-content awards-strip">
        <img src="company-of-the-year.jpeg"   className="c1"/>
        <img src="entrepreneur.jpeg"  className="e1" />
        <img src="not-for-profit.jpeg"  className="n1" />
        </div>
      </section>

      <div className="center">
            <a className="visit-algarve" href="/apply"  rel="noreferrer">Visit the Centre Algarve Website.</a>
            
          </div>

          <div className="center">
            <a className="visit-official" href="/apply"  rel="noreferrer">Visit the official website for more information.</a>
            
          </div>

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

export default CharityPage;


