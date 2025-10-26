import React from 'react';
import { Plus, ArrowRight } from 'lucide-react';

const DemoSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Demo Card */}
        <div className="demo-card mb-12">
          <div className="mb-6">
            <p className="text-gray-700 text-lg mb-6">
              Build a bright coffee shop website. I've uploaded our menu and cozy photos to set the vibe.
            </p>
            
            {/* Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="feature-card">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Cafe Menu</h3>
                  <p className="text-sm text-gray-500">Beverages & sweet treats</p>
                </div>
              </div>
              
              <div className="feature-card">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-amber-600 rounded-sm"></div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Shop Photos</h3>
                  <p className="text-sm text-gray-500">Inviting atmosphere shots</p>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <button className="btn-secondary flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Clone
                </button>
                <button className="btn-secondary flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Plan
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
                  <Plus className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-10 h-10 bg-primary-500 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Watch Showreel Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 px-6 py-3 rounded-lg shadow-sm border border-gray-200 transition-colors">
            <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-1"></div>
            </div>
            <span className="font-medium text-gray-900">Watch Showreel</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;