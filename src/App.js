import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Portfolio from './components/Portfolio.js';
import About from './components/About.js';
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
