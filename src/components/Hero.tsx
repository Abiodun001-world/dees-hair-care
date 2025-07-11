import React from 'react';
import { ArrowRight, Heart, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-emerald-50 to-amber-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-emerald-600">
                <Leaf size={20} />
                <span className="text-sm font-medium uppercase tracking-wide">
                  Natural Hair Care
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Embrace Your{' '}
                <span className="text-emerald-600">Natural Beauty</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                with Dee's Hair Care – Healthy Hair, Happy Vibes!
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Dee's Hair Care offers natural hair care solutions, DIY tips, and a 
              community celebrating healthy, happy hair. Join thousands who've 
              transformed their hair journey with our 100% natural, cruelty-free products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Shop Now
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#community"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full border-2 border-emerald-600 hover:bg-emerald-50 transition-all duration-200"
              >
                <Heart className="mr-2" size={20} />
                Join Our Community
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">100%</div>
                <div className="text-sm text-gray-600">Natural</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">5000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">0</div>
                <div className="text-sm text-gray-600">Harsh Chemicals</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/1000142167.jpg"
                alt="Dee, founder of Dee's Hair Care, showcasing natural hair beauty"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;