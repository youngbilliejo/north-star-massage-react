import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';

const Scheduling = () => {
  const [selectedCalendar, setSelectedCalendar] = useState('');

  // ←←← ADD YOUR 4 GOOGLE CALENDAR BOOKING LINKS HERE ↓↓↓
  const calendars = [
    {
      name: "30 Minute Appointment for Massage",
      url: "https://calendar.app.google/JUdM1wPDGzqoyy3N6"
    },
    {
      name: "60 Minute Appointment for Massage",
      url: "https://calendar.app.google/x94U8Ya3pDQByw3U8"
    },
    {
      name: "90 Minute Appointment for Massage",
      url: "https://calendar.app.google/XPMjbk63SYW6Lxq17"
    },
    {
      name: "120 Minute Appointment for Massage ",
      url: "https://calendar.app.google/FJqeaJDt1PHUfe5H9"
    }
  ];

  useEffect(() => {
    document.title = 'Scheduling | North Star Massage';
  }, []);

  const handleBooking = () => {
    if (!selectedCalendar) {
      alert("Please select a service type first");
      return;
    }
    window.open(selectedCalendar, '_blank');
  };

  return (
    <>
      

      <main>
        <Sidebar />
        <div className="content">
          <h2>Book Your Appointment</h2>
          <p className="intro">
            Choose the type of session you'd like, then click the button to see real-time availability.
          </p>

          <div style={{ maxWidth: '600px', margin: '30px 0' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '10px', 
              fontWeight: '600',
              fontSize: '1.1rem',
              color: 'var(--primary)'
            }}>
              Select Session Type:
            </label>
            
            <select 
              value={selectedCalendar} 
              onChange={(e) => setSelectedCalendar(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '14px 16px', 
                fontSize: '1.05rem',
                borderRadius: '6px',
                border: '2px solid #ddd',
                marginBottom: '25px'
              }}
            >
              <option value="">— Choose a service —</option>
              {calendars.map((cal, index) => (
                <option key={index} value={cal.url}>
                  {cal.name}
                </option>
              ))}
            </select>

            <button 
              onClick={handleBooking}
              className="btn"
              style={{ 
                fontSize: '1.25rem', 
                padding: '18px 50px',
                width: '100%'
              }}
              disabled={!selectedCalendar}
            >
              View Available Times & Book Now →
            </button>

            <p style={{ marginTop: '30px', textAlign: 'center', color: '#555' }}>
              Or call/text <strong>(205) 703-6462</strong> to book manually
            </p>
          </div>
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