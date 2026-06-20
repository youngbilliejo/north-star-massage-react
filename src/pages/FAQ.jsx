import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';

const FAQ = () => {
  useEffect(() => {
    document.title = 'FAQ | North Star Massage';
  }, []);

  return (
    <>
    

      <main>
        <Sidebar />
        <div className="content">
          <h2>Common Questions</h2>

          <div style={{ marginBottom: '30px' }}>
            <h3>Will I be covered during the session?</h3>
            <p>You will be properly draped at all times in order to keep you warm and comfortable. Only the area being worked on will be exposed.</p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3>What parts of my body will be massaged?</h3>
            <p>A typical full body massage will include working on back, arms, legs, neck, feet, hands, head, and shoulders.</p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3>Are there different types of massage and bodywork?</h3>
            <p>There are a variety of types of massage and bodywork: differing techniques utilize different strokes, including basic rubbing strokes, rocking movements, posture and movement re-education, application of pressure to specific points, and more. We can discuss the most effective treatment plan that would be personalized and appropriate for you.</p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3>Must I be completely undressed?</h3>
            <p>Most massage and bodywork techniques are traditionally performed with the client unclothed; however, it is entirely up to you and your comfort level as to what you want to wear. You should only undress to your comfort level and will be draped the entire time.</p>
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

export default FAQ;
