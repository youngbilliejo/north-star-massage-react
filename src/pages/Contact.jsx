import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact | North Star Massage';
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    

      <main>
        <Sidebar />
        <div className="content">
          <h2>Get In Touch</h2>
          <p className="intro">Ready to schedule or have questions? Reach out today!</p>

          {submitted && <p style={{ color: 'green', fontWeight: 'bold' }}>Thank you! Your message has been sent.</p>}

          <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                required 
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                required 
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange}
                rows="6"
                required 
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              ></textarea>
            </div>
            <button type="submit" className="btn" style={{ cursor: 'pointer' }}>Send Message</button>
          </form>

          <div style={{ marginTop: '40px' }}>
            <p><strong>Call or Text:</strong> (205) 703-6462</p>
             <p>1001 Minnesota Ave West, Ste 101, Walker, MN 56484</p>
          </div>
        </div>
      </main>

      <div className="cta-section">
        <h3>Let's get feeling great!</h3>
        <p style={{ maxWidth: '580px', margin: '0 auto 30px', opacity: '0.95' }}>
          Schedule your personalized massage session in Walker, Minnesota.
        </p>
        <a href="/scheduling" className="btn">Book Your Appointment</a>
      </div>
    </>
  );
};

export default Contact;
