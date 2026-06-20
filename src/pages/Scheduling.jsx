import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';

const Scheduling = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Scheduling | North Star Massage';
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking request:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', date: '', time: '', service: '', message: '' });
  };

  return (
    <>
      

      <main>
        <Sidebar />
        <div className="content">
          <h2>Book Your Appointment</h2>
          <p className="intro">Select a preferred date and time. We will confirm within 24 hours.</p>

          {submitted && <p style={{ color: 'green', fontWeight: 'bold', padding: '15px', background: '#d4edda', borderRadius: '5px' }}>Booking request received! Billie Jo will contact you soon.</p>}

          <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '10px' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Preferred Date:</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} required style={{ width: '100%', padding: '10px' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Preferred Time:</label>
              <input type="time" name="time" value={formData.time} onChange={handleChange} required style={{ width: '100%', padding: '10px' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Service:</label>
              <select name="service" value={formData.service} onChange={handleChange} required style={{ width: '100%', padding: '10px' }}>
                <option value="">Select a service</option>
                <option value="30min">30 Minute Customized Massage</option>
                <option value="60min">60 Minute Customized Massage</option>
                <option value="90min">90 Minute Customized Massage</option>
                <option value="hotstone">60 Minute Hot Stone Massage</option>
                <option value="graston">60 Minute Massage with Graston</option>
              </select>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Additional Notes:</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="4" style={{ width: '100%', padding: '10px' }}></textarea>
            </div>
            <button type="submit" className="btn">Request Appointment</button>
          </form>
        </div>
      </main>

      <div className="cta-section">
        <h3>Let's get feeling great!</h3>
        <p style={{ maxWidth: '580px', margin: '0 auto 30px', opacity: '0.95' }}>
          Schedule your personalized massage session in Walker, Minnesota.
        </p>
      </div>
    </>
  );
};

export default Scheduling;
