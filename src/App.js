import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import KeyFeatures from './components/KeyFeatures';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import PerfectFor from './components/PerfectFor';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <Pricing />
      <PerfectFor />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;