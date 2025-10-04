import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './JobOpportunitiesPage.css';

const Card = ({ icon, title, children }) => (
  <div className="job-card">
    <h3 className="job-card-title">{title}</h3>
    <div className="job-card-text">{children}</div>
  </div>
);

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const JobOpportunitiesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="jobs-page">
      <NavBar mode="static" />

      <div className="facebook-widget3">
              <img src="happy-child-safe-in-car.jpg" alt="job hero image" className="pic8" />
              <div className="facebook-widget3-overly"> 
      <header className="jobs-hero">
        <h1 className="jobs-title">JOB OPPORTUNITIES</h1>
        <p className="jobs-subtitle">Thank you for considering the 24×7 Group as your next employment opportunity.</p>
      </header>
      </div>
      </div>

      <section className="section-pri">
        <div className="page-content">
          <h2 className="pri-title">We pride ourselves on the quality of our staff.<br/>
          they are what enable us to provide our excellent service to customers.</h2>
          <h4 className='pri-subtitle'> • We employ our staff ensuring that they have a contract of employment and agreed terms and conditions.<br/>
          • Every potential employee is assessed for their suitability and motivational fit for the role, Enhanced Disclosure and Barring Service (DBS) checks are undertaken for all staff, together with full referencing, before any duties commence.<br/>
          • All 24×7 drivers hold private hire licences, for which satisfactory Enhanced DBS certification and a DVLA Group 2 Medical are mandatory. Most local authorities also require their licence applicants to undertake a successful driving assessment with an Approved Driving Instructor (ADI) before the licence will be issued.
          • All licensing costs are paid for by the Company.<br/>
          • All drivers and passenger assistants are provided with tailored, person-centred training that meets the individual needs of their passenger(s).<br/>
          • All staff members must read and understand our policies and must ensure that they keep themselves updated with the requirements and obligations of their licences.<br/>
          • 24×7 will for their part guarantee that every colleague is equipped with the tools and the training to deliver an exceptional, best-in-class service.<br/></h4>
        </div>
      </section>
      

      <section className="section content-light">
        <div className="page-content job-roles">
        <div className="job-role1">
        <h1 className='titlel1'>Driver</h1>
        <img src="L1.png" alt="Disability Confident Committed" className="picL1" />
        <h4 className='subtitle1'>All 24×7 drivers hold private hire licences, for which <br/>
        satisfactory Enhanced DBS certification and a DVLA <br/>
        Group 2 Medical are mandatory. Most local <br/>
        authorities also require their licence applicants to <br/>
        undertake a successful driving assessment with an 
        <br/>
      Approved Driving Instructor (ADI) before the licence<br/>
       will be issued.</h4>
            </div>

        <div className="job-role1">    
        <h1 className='titlel2'>Personal Assistant</h1>
        <img src="L2.png" alt="Disability Confident Committed" className="picL2" /> 
        <h4 className='subtitle2'>All passenger assistants   (escorts)   must receive <br/>
        satisfactory Enhanced Disclosure and Barring Service <br/>
         (DBS) certification and are provided with tailored, <br/>
          person‑centred training that meets the individual <br/>
          needs of their passenger(s).</h4>
        </div>
        

        <div className="job-role1">   
        <h1 className='titlel3'>Office staff</h1>
        <img src="L3.png" alt="Disability Confident Committed" className="picL3" />
      <h4 className='subtitle3'> We often have opportunities in support roles at our <br/>
      HQ, namely in finance, fleet, and general <br/>
      administration. <br/>
      Similar positions may also become available within <br/>
       our regional operations. <br/>
        Please look at our currently advertised roles for <br/>
         more information.</h4>
          </div> 
            
           
            
            
            
          

          <div className="center">
            <a className="apply-btn" href="/apply"  rel="noreferrer">Apply here</a>
          </div>
        </div>
      </section>

      <section className="section band22">
        <div className="page-content">
          <h2 className="band-heading">WE TAKE CARE OF ALL OF THE BELOW</h2>

          <div className="cards-grid">
            <Card title="DBS CHECKS" >
            <img src="ic1.png" alt="Disability Confident Committed" className='iconpic'/>
            You will need to have an Enhanced DBS to obtain your Private Hire Licence. If you are unsure if anything will show up on your DBS it is advised to speak directly to your local operator. All past, spent and current convictions and incidents will show up on the checks done. Some offences will prevent a licence being obtained. If you have a recent DBS this may be acceptable if your DBS is on the Gov.uk update service. Some you should not need to have a new DBS.
            </Card>
            <Card  title="SAFEGUARDING" >
            <img src="ic2.png" alt="Disability Confident Committed" className='iconpic'/>
            Some Licensing Authorities require a separate safeguarding course as part of obtaining a PHV licence or in some councils this is integrated into a passenger assistant/driver awareness course as part of county badging. Here you will gain knowledge of how to work safely with vulnerable passengers and what to do in circumstances where there is a safeguarding concern. This equips both driver and PA with the knowledge to conduct themselves in a professional and appropriate way.
            </Card>
            <Card  title="SEN SAFEGUARDING">
            <img src="ic3.png" alt="Disability Confident Committed" className='iconpic'/>
            SEN Safeguarding. On 21 July 2020, the Department for Transport (DfT) published its Statutory Taxi and Private Hire Vehicle Standards. These include a requirement that all licensing authorities should provide safeguarding guidance to the trade and should require taxi and private hire vehicle drivers to undertake safeguarding training.

            </Card>
          </div>

          <div className="cards-grid">
            <Card title="Driver assessment">
            <img src="ic4.png" alt="Disability Confident Committed" className='iconpic'/>
            Some councils require an external examiner Driver assessment – we will arrange and pay for this following you receiving a job offer.
            </Card>
            <Card  title="Driver training">
            <img src="ic5.png" alt="Disability Confident Committed" className='iconpic'/>
            Some Licencing authorities will an element of driver training, we will guide you through the process and pay for any training required.
            </Card>
            <Card  title="Medical">
            <img src="ic6.png" alt="Disability Confident Committed" className='iconpic'/>
            A group 2 medical will be required for your licence, we will give you the details of how this can be done locally and we will pay for your medical.
            </Card>
          </div>
        </div>
        
      </section>

             {/* Charity/Footer Section */}
             <section id="charity" className="charity-section1">
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

export default JobOpportunitiesPage;

