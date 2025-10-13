import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import ApproachPage from './components/ApproachPage';
import JobOpportunitiesPage from './components/JobOpportunitiesPage';
import CharityPage from './components/CharityPage';
import ContactPage from './components/ContactPage';
import ApplicationFormPage from './components/ApplicationFormPage';
import PoliciesPage from './components/PoliciesPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/approach" element={<ApproachPage />} />
        <Route path="/job-opportunities" element={<JobOpportunitiesPage />} />
        <Route path="/charity" element={<CharityPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/apply" element={<ApplicationFormPage />} />
        <Route path="/privacy-policy" element={<PoliciesPage variant="privacy" />} />
        <Route path="/customer-support" element={<PoliciesPage variant="customer-support" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;