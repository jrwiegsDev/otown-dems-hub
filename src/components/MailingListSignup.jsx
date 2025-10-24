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
  const [emailError, setEmailError] = useState('');

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Real-time email validation
    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
      // Clear any previous status errors when user starts typing
      if (status.error) {
        setStatus({ ...status, error: null });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Frontend validation
    if (!formData.email) {
      setStatus({ ...status, error: 'Email address is required.' });
      return;
    }
    
    if (!validateEmail(formData.email)) {
      setStatus({ ...status, error: 'Please enter a valid email address.' });
      return;
    }
    
    setStatus({ loading: true, error: null, success: null });

    try {
      const endpoint = `${import.meta.env.VITE_API_URL}/api/subscribers`;
      const response = await axios.post(endpoint, formData);
      
      // Use the message from the backend response
      const successMessage = response.data.message || 'Success! Thanks for signing up.';
      setStatus({ loading: false, error: null, success: successMessage });
      setFormData({ firstName: '', lastName: '', email: '' }); // Clear form
      setEmailError(''); // Clear email error
    } catch (err) {
      // Handle specific error messages from backend
      const errorMessage = err.response?.data?.message || 'An error occurred. Please try again.';
      setStatus({ loading: false, error: errorMessage, success: null });
      console.error(err);
    }
  };

  return (
    <div className="mailing-list-form">
      <h3>Join Our Mailing List</h3>
      <p>Stay up to date with our events and news!</p>
      <p>Already subscribed? No worries! Submitting this form will update your information with any new details you provide.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
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
          className={emailError ? 'error' : ''}
        />
        {emailError && <span className="error-text">{emailError}</span>}
        
        <button type="submit" disabled={status.loading || emailError}>
          {status.loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {status.error && <p className="status-message error">{status.error}</p>}
      {status.success && <p className="status-message success">{status.success}</p>}
    </div>
  );
};

export default MailingListSignup;