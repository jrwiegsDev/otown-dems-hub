// src/components/VolunteerSignup.jsx

import { useState } from 'react';
import axios from 'axios';

const VOLUNTEER_PROGRAMS = [
  'Adopt A Highway',
  'Christmas Toy Drive',
  'Thanksgiving Meal Drive',
  'Food Pantry Support',
  'Community Garden',
  'Literacy Tutoring',
  'Senior Outreach',
  'Voter Registration',
  'School Supply Drive',
  'Winter Coat Drive',
  'Book Drive',
  'Community Clean-Up Events'
];

const VolunteerSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interestedPrograms: []
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

  const handleProgramToggle = (program) => {
    setFormData(prev => {
      const interestedPrograms = prev.interestedPrograms.includes(program)
        ? prev.interestedPrograms.filter(p => p !== program)
        : [...prev.interestedPrograms, program];
      return { ...prev, interestedPrograms };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Frontend validation
    if (!formData.firstName.trim()) {
      setStatus({ ...status, error: 'First name is required.' });
      return;
    }

    if (!formData.lastName.trim()) {
      setStatus({ ...status, error: 'Last name is required.' });
      return;
    }
    
    if (!formData.email) {
      setStatus({ ...status, error: 'Email address is required.' });
      return;
    }
    
    if (!validateEmail(formData.email)) {
      setStatus({ ...status, error: 'Please enter a valid email address.' });
      return;
    }

    if (formData.interestedPrograms.length === 0) {
      setStatus({ ...status, error: 'Please select at least one program you are interested in.' });
      return;
    }
    
    setStatus({ loading: true, error: null, success: null });

    try {
      const endpoint = `${import.meta.env.VITE_API_URL}/api/volunteers`;
      const response = await axios.post(endpoint, formData);
      
      const successMessage = response.data.message || 'Thank you for signing up! Our Community Outreach team will be in touch soon.';
      setStatus({ loading: false, error: null, success: successMessage });
      setFormData({ firstName: '', lastName: '', email: '', interestedPrograms: [] });
      setEmailError('');
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'An error occurred. Please try again.';
      setStatus({ loading: false, error: errorMessage, success: null });
      console.error(err);
    }
  };

  return (
    <div className="volunteer-signup mailing-list-form">
      <h2>🙋 Volunteer Opportunities</h2>
      <p>
        Looking to volunteer but don't know where to start? That's okay! Resistance is a multi-lane 
        highway, and we would love your energy and support! Please fill out this form and either Sarah 
        or Kendra from Community Outreach will be in touch!
      </p>
      
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

        <label htmlFor="lastName">Last Name*</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
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

        <label style={{ marginTop: '0.5rem' }}>Which programs are you interested in?*</label>
        <div className="days-checkboxes">
          {VOLUNTEER_PROGRAMS.map(program => (
            <label key={program} className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.interestedPrograms.includes(program)}
                onChange={() => handleProgramToggle(program)}
              />
              <span>{program}</span>
            </label>
          ))}
        </div>
        
        <button type="submit" disabled={status.loading || emailError}>
          {status.loading ? 'Submitting...' : 'Sign Up to Volunteer'}
        </button>
      </form>
      
      {status.error && <p className="status-message error">{status.error}</p>}
      {status.success && <p className="status-message success">{status.success}</p>}
    </div>
  );
};

export default VolunteerSignup;
