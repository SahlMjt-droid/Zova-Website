import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './JobOpportunitiesPage.css';

const Card = ({ icon, title, children }) => (
  <div className="job-card">
    <div className="job-card-icon">{icon}</div>
    <h3 className="job-card-title">{title}</h3>
    <div className="job-card-text">{children}</div>
  </div>
);

const JobOpportunitiesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="jobs-page">
      <NavBar mode="static" />

      <header className="jobs-hero">
        <h1 className="jobs-title">JOB OPPORTUNITIES</h1>
        <p className="jobs-subtitle">Thank you for considering the 24×7 Group as your next employment opportunity.</p>
      </header>

      <section className="section content-light">
        <div className="page-content job-roles">
          <Card icon="🪪" title="Driver">
            All 24×7 drivers hold private hire licences, for which satisfactory Enhanced DBS certification and a DVLA Group 2 Medical are mandatory. Most local authorities also require their licence applicants to undertake a successful driving assessment with an Approved Driving Instructor (ADI) before the licence will be issued.
          </Card>
          <Card icon="➕" title="Personal Assistant">
            All passenger assistants (escorts) must receive satisfactory Enhanced Disclosure and Barring Service (DBS) certification and are provided with tailored, person‑centred training that meets the individual needs of their passenger(s).
          </Card>
          <Card icon="📋" title="Office staff">
            We often have opportunities in support roles at our HQ, namely in finance, fleet, and general administration. Similar positions may also become available within our regional operations. Please look at our currently advertised roles for more information.
          </Card>

          <div className="center">
            <a className="apply-btn" href="/apply" target="_blank" rel="noreferrer">Apply here</a>
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="page-content">
          <h2 className="band-heading">WE TAKE CARE OF ALL OF THE BELOW</h2>

          <div className="cards-grid">
            <Card icon="📄" title="DRIVER ASSESSMENT">
              Some councils require an external examiner Driver assessment – we will arrange and pay for this following you receiving a job offer.
            </Card>
            <Card icon="🧑‍🏫" title="DRIVER TRAINING">
              Some Licensing authorities will an element of driver training, we will guide you through the process and pay for any training required.
            </Card>
            <Card icon="🧳" title="MEDICAL">
              A group 2 medical will be required for your licence, we will give you the details of how this can be done locally and we will pay for your medical.
            </Card>
          </div>

          <div className="cards-grid">
            <Card icon="✔️" title="DBS CHECKS">
              You will need to have an Enhanced DBS to obtain your Private Hire Licence. If you are unsure if anything will show up on your DBS it is advised to speak directly to your local operator. All past, spent and current convictions and incidents will show up on the checks done. Some offences will prevent a licence being obtained. If you have a recent DBS this may be acceptable if your DBS is on the Gov.uk update service. Some you should not need to have a new DBS.
            </Card>
            <Card icon="🛡️" title="SAFEGUARDING">
              Some Licensing Authorities require a separate safeguarding course as part of obtaining a PHV licence or in some councils this is integrated into a passenger assistant/driver awareness course as part of county badging. Here you will gain knowledge of how to work safely with vulnerable passengers and what to do in circumstances where there is a safeguarding concern. This equips both driver and PA with the knowledge to conduct themselves in a professional and appropriate way.
            </Card>
            <Card icon="👤" title="SEN SAFEGUARDING">
              SEN Safeguarding. On 21 July 2020, the Department for Transport (DfT) published its Statutory Taxi and Private Hire Vehicle Standards. These include a requirement that all licensing authorities should provide safeguarding guidance to the trade and should require taxi and private hire vehicle drivers to undertake safeguarding training.
            </Card>
          </div>
        </div>
      </section>

      <section id="jobs-footer" className="section badges">
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

export default JobOpportunitiesPage;

