import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Hero from './components/about/hero';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
