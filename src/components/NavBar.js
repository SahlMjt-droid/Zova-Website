import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const logoImg = '/24x7logo.svg';

const NavBar = ({ mode = 'home' }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(mode !== 'home');

  useEffect(() => {
    if (mode !== 'home') return;
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [mode]);

  const linkClass = (path) => `nav-link${location.pathname === path ? ' active' : ''}`;

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="brand" aria-label="24x7 Group Home">
        <img src={logoImg} className="brand-logo" alt="24x7 Group" />
      </Link>
      <ul className="nav-links">
        <li><Link className={linkClass('/')} to="/">Home</Link></li>
        <li><Link className={linkClass('/approach')} to="/approach">Approach</Link></li>
        <li><Link className={linkClass('/job-opportunities')} to="/job-opportunities">Job Opportunities</Link></li>
        <li><Link className={linkClass('/charity')} to="/charity">Charity</Link></li>
        <li><Link className={linkClass('/contact')} to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;


