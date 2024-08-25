import React, { useState } from 'react';
import phoneIcon from '../assets/phone.png';
import emailIcon from '../assets/email.png';
import githubIcon from '../assets/github.png';
import addressIcon from '../assets/address.png';


const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    question: '',
  });

  // State for form validation errors
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.question) validationErrors.question = 'Question is required';

    setErrors(validationErrors);

    // If there are no errors, submit the form (e.g., send data to a server)
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
      // Clear the form fields after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        question: '',
      });
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>

           {/* Icons Row */}
      <div style={styles.container}>
        <div style={styles.item}>
          <img src={phoneIcon} alt="Phone" style={styles.image} />
          <p>
            <a href="tel:+1234567890" style={styles.link}>Phone</a>
          </p>
        </div>
        <div style={styles.item}>
          <img src={emailIcon} alt="Email" style={styles.image} />
          <p>
            <a href="mailto:example@example.com" style={styles.link}>Email</a>
          </p>
        </div>
        <div style={styles.item}>
          <img src={githubIcon} alt="GitHub" style={styles.image} />
          <p>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              GitHub
            </a>
          </p>
        </div>
        <div style={styles.item}>
          <img src={addressIcon} alt="Address" style={styles.image} />
          <p>
            <a
              href="https://www.google.com/maps/place/Your+Address"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Address
            </a>
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Name (required):</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}
        </div>

        <div style={styles.formGroup}>
          <label>Email (required):</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>

        <div style={styles.formGroup}>
          <label>Phone (optional):</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label>Question (required):</label>
          <textarea
            name="question"
            value={formData.question}
            onChange={handleChange}
            style={styles.textarea}
          />
          {errors.question && <p style={styles.error}>{errors.question}</p>}
        </div>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '20px',
  },
  item: {
    textAlign: 'center',
  },
  image: {
    width: '100px',
    height: '100px',
    marginBottom: '10px',
  },
  link: {
    textDecoration: 'none',
    color: 'blue', // Link color is blue
    fontWeight: 'bold',
  },
  form: {
    marginTop: '30px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginTop: '5px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    height: '100px',
    marginTop: '5px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#282c34',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
};

export default Contact;
