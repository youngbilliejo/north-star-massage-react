import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';

const Home = () => {
  useEffect(() => {
    document.title = 'North Star Massage | Home';
  }, []);

  return (
    <>
    

      <main>
        <Sidebar />
        <div className="content">
          <h2><p>WELCOME! </p> <p>North Star Massage</p></h2>
          <p className="intro">
            North Star Massage understands that everyone works, plays, has stress, and needs to re-balance 
            their life and relax. Billie Jo has extensive training, medical knowledge, was an athletic trainer 
            for 2 years, and several years as a nurse.
          </p>
          <p className="intro">
            If you are unsure as to what method of treatment you would like or need, please call Billie Jo
            as she can help you choose the proper treatment and assess your individual needs.
          </p>
          <p className="intro">
            Please contact Billie Jo at (205) 703-6462 via text and you will receive a call back within 24 hours.
            You may also use the submission form on the Contact page.
          </p>
          <div className="highlight-box">
            Massage therapy can help you relax, reduce pain, improve circulation, and enhance overall well-being.
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

export default Home;
