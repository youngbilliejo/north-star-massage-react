import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';

const Services = () => {
  useEffect(() => {
    document.title = 'Services & Rates | North Star Massage';
  }, []);

  return (
    <>
     

      <main>
        <Sidebar />
        <div className="content">
          <h2>Rates</h2>

          <div style={{ marginBottom: '30px' }}>
            <h3>Customized 30 minute massage $45</h3>
            <p>This is a customized massage that focuses on a specific client need or want. Each custom massage will have a warm treatment and essential oils that the client can choose from.</p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3>Customized 60 minute massage $85</h3>
            <p>This is a customized massage that focuses on a specific client need or want. Each custom massage will have a warm treatment and essential oils that the client can choose from.</p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3>Customized 90 minute massage $130</h3>
            <p>This is a customized massage that focuses on a specific client need or want. Each custom massage will have a warm treatment and essential oils that the client can choose from.</p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3>Customized 120 minute massage $170</h3>
            <p>This is a customized massage that focuses on a specific client need or want. Each custom massage will have a warm treatment and essential oils that the client can choose from.</p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3>Customized 60 minute hot stone massage $90</h3>
            <p>This is a customized massage that focuses on a specific client need or want. Each custom massage will have a warm treatment and essential oils that the client can choose from.</p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3>Customized 60 minute massage with Graston $90</h3>
            <p>This is a customized massage that focuses on a specific client need or want. Each custom massage will have a warm treatment and essential oils that the client can choose from.</p>
          </div>

          <p><strong>MN Sales Tax is included in the Above Prices.</strong></p>
          <p><strong>Cancellations must be 24 hr advance notice or there is no refund!</strong></p>
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

export default Services;
