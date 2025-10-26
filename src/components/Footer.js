import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-xl font-bold text-gray-900">Webild</h2>
          </div>
          
          {/* Social Icons and CTA */}
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a href="#" className="social-icon">
                <Linkedin className="w-5 h-5 text-gray-600" />
              </a>
              <a href="#" className="social-icon">
                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <Instagram className="w-5 h-5 text-gray-600" />
              </a>
            </div>
            
            {/* CTA Button */}
            <button className="btn-primary">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;