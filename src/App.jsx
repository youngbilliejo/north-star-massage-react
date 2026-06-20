import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Benefits from './pages/Benefits';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Scheduling from './pages/Scheduling';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
