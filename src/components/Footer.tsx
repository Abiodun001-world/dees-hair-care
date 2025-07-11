import React from 'react';
import { Instagram, MessageCircle, Mail, Heart, Leaf } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Dee', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'DIY Tips', href: '#diy' },
    { name: 'Community', href: '#community' },
    { name: 'Contact', href: '#contact' }
  ];

  const productCategories = [
    { name: 'Shampoos', href: '#products' },
    { name: 'Conditioners', href: '#products' },
    { name: 'Hair Treatments', href: '#products' },
    { name: 'Styling Products', href: '#products' },
    { name: 'Hair Oils', href: '#products' }
  ];

  const supportLinks = [
    { name: 'Shipping Info', href: '#contact' },
    { name: 'Returns', href: '#contact' },
    { name: 'Hair Consultation', href: '#contact' },
    { name: 'Wholesale', href: '#contact' },
    { name: 'FAQ', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Leaf className="w-8 h-8 text-emerald-400 mr-2" />
              <h3 className="text-2xl font-bold">Dee's Hair Care</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering natural hair journeys with 100% natural, cruelty-free products 
              and a loving community that celebrates every curl, coil, and kink.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/dees.haircare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/2348162753143"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-200"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:thedeeshaircare@gmail.com"
                className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6">Products</h4>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-300 text-sm mb-2">
                <strong>WhatsApp:</strong> +234 816 275 3143
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Email:</strong> thedeeshaircare@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4">Stay Connected</h4>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our newsletter for weekly DIY recipes, hair care tips, and exclusive 
              product updates delivered to your inbox.
            </p>
            <a
              href="#community"
              className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-colors duration-200"
            >
              Join Our Community
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-300 text-sm mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              <span>for natural hair enthusiasts</span>
            </div>
            
            <div className="text-gray-300 text-sm">
              © 2025 Dee's Hair Care. All rights reserved.
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-xs">
              100% Natural • Cruelty-Free • Made with Love in Nigeria
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;