// src/components/MailingListSignup.jsx

import React, { useState } from 'react';
import axios from 'axios';

const MailingListSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [status, setStatus] = useState({ loading: false, error: null, success: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) {
      setStatus({ ...status, error: 'First name and email are required.' });
      return;
    }
    
    setStatus({ loading: true, error: null, success: null });

    try {
      const endpoint = `${import.meta.env.VITE_API_URL}/api/subscribers`;
      await axios.post(endpoint, formData);
      
      setStatus({ loading: false, error: null, success: 'Success! Thanks for signing up.' });
      setFormData({ firstName: '', lastName: '', email: '' }); // Clear form
    } catch (err) {
      setStatus({ loading: false, error: 'An error occurred. Please try again.', success: null });
      console.error(err);
    }
  };

  return (
    <div className="mailing-list-form">
      <h3>Join Our Mailing List</h3>
      <p>Stay up to date with our events and news!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name*</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <button type="submit" disabled={status.loading}>
          {status.loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {status.error && <p className="status-message error">{status.error}</p>}
      {status.success && <p className="status-message success">{status.success}</p>}
    </div>
  );
};

export default MailingListSignup;