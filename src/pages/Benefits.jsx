import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';

const Benefits = () => {
  useEffect(() => {
    document.title = 'Benefits of Massage | North Star Massage';
  }, []);

  return (
    <>
     

      <main>
        <Sidebar />
        <div className="content">
          <h2>Why Choose Massage?</h2>

          <p className="intro">
            It is estimated that almost ninety percent of diseases are stress-related.
            Massage is a great tool to manage this stress, which translates
            into a wide range of physical and mental health benefits.
          </p>

          <div className="highlight-box">
            Massage therapy can help you relax, reduce pain, improve circulation, and enhance overall well-being.
          </div>

          <h2 style={{ marginTop: '60px' }}>Specific Benefits Include:</h2>
          <ul className="benefits-list">
            <li>Alleviate low-back pain and improve range of motion</li>
            <li>Enhance immunity by stimulating lymph flow</li>
            <li>Help athletes prepare for and recover from strenuous workouts</li>
            <li>Improve the condition of the skin</li>
            <li>Lessen depression and anxiety</li>
            <li>Promote healing and healthy tissue</li>
            <li>Improve circulation</li>
            <li>Reduce post-surgery swelling and adhesions</li>
            <li>Relax tired, and overused muscles</li>
            <li>Release endorphins — the body's natural painkiller</li>
            <li>Relieve migraine pain</li>
            <li>Alleviate sore muscles and sprains</li>
          </ul>
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

export default Benefits;
