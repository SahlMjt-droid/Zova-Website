import React, { useEffect } from 'react';
import NavBar from './NavBar';
import './ApplicationFormPage.css';
import './PoliciesPage.css';

const Section = ({ title, children }) => (
  <div className="policy-section">
    <h2>{title}</h2>
    {children}
  </div>
);

const PoliciesPage = ({ variant = 'privacy' }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const isPrivacy = variant === 'privacy';

  return (
    <div className="policies-page">
      <NavBar mode="static" />

      <div className="contact-widget3">
        <img src="contact-us.jpg" alt="policies hero" className="contpic" />
        <div className="contact-widget3-overly">
          <header className="contact-hero">
            <h1 className="contact-hero-title">
              {isPrivacy ? 'PRIVACY POLICY' : 'CUSTOMER SUPPORT GUIDELINES'}
            </h1>
          </header>
        </div>
      </div>

      <section className="contact-details">
        <div className="contact-strip">
          <div className="content-linechcon"></div>
          <h2>{isPrivacy ? 'PRIVACY POLICY' : 'CUSTOMER SUPPORT GUIDELINES'}</h2>
        </div>

        <div className="page-content">
          {isPrivacy ? (
            <div>
              <Section title="Data Controller">
                <p>Full name of legal entity: Zova Group Limited</p>
                <p>Email: dpo@zovagroup.co.uk</p>
                <p>Address: Fuel Studios kiln House, Norwich, NR2 1dx</p>
                <p>Telephone: (01603) 381 372</p>
              </Section>
              <Section title="Information We Collect">
                <ul>
                  <li>Information you provide directly (contact details, payment details, bookings, identification, special requirements).</li>
                  <li>Information collected automatically (IP, browser, usage).</li>
                  <li>Information from other sources (partners, analytics providers).</li>
                </ul>
              </Section>
              <Section title="How We Use Your Data">
                <ul>
                  <li>Service delivery and safety</li>
                  <li>Marketing and communication (with consent)</li>
                  <li>Website operations and analytics</li>
                </ul>
              </Section>
              <Section title="Who We Share Your Data With">
                <ul>
                  <li>Group companies, partners, suppliers, payment processors</li>
                  <li>Analytics providers, legal or regulatory bodies</li>
                  <li>With consent; for legal obligations; or in business transfers</li>
                </ul>
              </Section>
              <Section title="Data Retention">
                <p>We retain personal data as long as necessary for services or legal obligations, generally up to 2 years after the last interaction unless longer is required.</p>
              </Section>
              <Section title="Data Security">
                <ul>
                  <li>Secure servers with access controls</li>
                  <li>Password protections and compliance with applicable laws</li>
                </ul>
              </Section>
              <Section title="Your Rights">
                <ul>
                  <li>Access, rectification, deletion, restriction</li>
                  <li>Withdraw consent; object to processing; data portability</li>
                  <li>Complain to the ICO</li>
                </ul>
              </Section>
              <Section title="International Transfers">
                <p>We will not send your personal data outside the UK or EU without your explicit consent. Some services may operate in countries like Portugal with safeguards.</p>
              </Section>
              <Section title="Updates to This Policy">
                <p>We may update this policy periodically. Changes will be posted with an updated effective date.</p>
              </Section>
              <Section title="Contact Us">
                <p>Zova Transport Ltd</p>
                <p>Email: office@zovatransport.co.uk</p>
                <p>Phone: 01603 381 372</p>
              </Section>
            </div>
          ) : (
            <div>
              <Section title="Who We Serve">
                <ul>
                  <li>Local authorities, councils, governing bodies</li>
                  <li>Schools, colleges, social care institutions</li>
                  <li>Staff within those institutions</li>
                  <li>Passengers</li>
                  <li>Parents, guardians, carers</li>
                </ul>
              </Section>
              <Section title="Enquiries, Complaints & Lost Items">
                <p>Lost items: check with your driver on your next journey or contact us at 01603 381 372.</p>
                <p>Other enquiries or complaints: 01603 381 372 or office@zovatransport.co.uk</p>
              </Section>
              <Section title="Our Promise to You">
                <ul>
                  <li>Polite, respectful, and professional service</li>
                  <li>Efficient handling of enquiries and timely updates</li>
                </ul>
              </Section>
              <Section title="Your Responsibilities">
                <ul>
                  <li>Provide accurate information</li>
                  <li>Treat staff with respect</li>
                </ul>
              </Section>
              <Section title="Customer Support Standards">
                <p>Telephone: answer within ~20 seconds; resolve at first contact where possible.</p>
                <p>Written: respond within 2 working days or provide a timeline.</p>
                <p>Email/SMS: respond within 24 hours on working days; acknowledge within 1 day with expected resolution time; prioritise urgent messages.</p>
              </Section>
              <Section title="Behaviour Expectations">
                <p>All staff must be treated with courtesy and respect. Abusive behaviour may lead to service refusal or reporting to authorities.</p>
              </Section>
              <Section title="Important Note for Parents">
                <ul>
                  <li>No liability for loss/theft/damage of valuable items on board</li>
                  <li>Written consent required for transport of such items, at parent’s risk</li>
                  <li>Ensure valuables are covered under family insurance</li>
                </ul>
              </Section>
              <Section title="Contact Hours">
                <p>Business: Mon–Fri, 09:00–18:00</p>
                <p>Out-of-hours: messaging and call diversion available; phone/email/SMS monitored 06:00–09:00 and 17:00–22:00</p>
                <p>Driver & Escort Contact: may share direct numbers for daily coordination</p>
              </Section>
            </div>
          )}
        </div>
      </section>

      <section id="contact" className="footer-section">
        <div className="footer">
          <div className="footer-content">
            <div className="footer-column">
              <h3>Our Approach</h3>
              <ul>
                <li><a href="#charity">Privacy Policy</a></li>
                <li><a href="#charity">Customer Support</a></li>
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
                <li><a href="/">Home</a></li>
                <li><a href="/approach">Approach</a></li>
                <li><a href="/job-opportunities">Careers</a></li>
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

export default PoliciesPage;


