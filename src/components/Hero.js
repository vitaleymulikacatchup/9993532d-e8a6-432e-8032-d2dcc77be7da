import React from 'react';

const Hero = () => {
  return (
    <section className="hero-gradient min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          You Dream, <span className="text-gradient">We Build</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Generate Websites Instantly, Customize to Perfection.
        </p>
        
        {/* CTA Button */}
        <div className="mb-16">
          <button className="btn-primary text-lg px-8 py-4">
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;