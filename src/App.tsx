import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Products from './components/Products';
import DIYTips from './components/DIYTips';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <About />
        <Products />
        <DIYTips />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;