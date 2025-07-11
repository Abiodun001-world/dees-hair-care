import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you within 24 hours. 💕');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Quick responses for urgent questions",
      contact: "+234 816 275 3143",
      action: "Message Now",
      link: "https://wa.me/2348162753143",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Detailed inquiries and support",
      contact: "thedeeshaircare@gmail.com",
      action: "Send Email",
      link: "mailto:thedeeshaircare@gmail.com",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      description: "Follow our daily hair tips and community",
      contact: "@dees.haircare",
      action: "Follow Us",
      link: "https://www.instagram.com/dees.haircare",
      color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our products or need personalized hair care advice? 
            We're here to help you on your natural hair journey!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="hair-consultation">Hair Consultation</option>
                  <option value="order-support">Order Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="general">General Question</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your hair concerns or questions..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-200"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Methods
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 ${method.color} text-white rounded-lg`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                          {method.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                          {method.description}
                        </p>
                        <p className="text-gray-900 font-medium mb-3">
                          {method.contact}
                        </p>
                        <a
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-4 py-2 ${method.color} text-white font-semibold rounded-lg transition-colors duration-200 text-sm`}
                        >
                          {method.action}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="mr-2" size={20} />
                Business Hours
              </h4>
              <div className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700">{schedule.day}</span>
                    <span className="font-medium text-gray-900">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                <p className="text-sm text-emerald-700">
                  <strong>Response Time:</strong> We typically respond within 2-4 hours during business hours.
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="mr-2" size={20} />
                Location
              </h4>
              <p className="text-gray-700 mb-4">
                Based in Nigeria, serving natural hair enthusiasts worldwide through 
                our online platform and local delivery services.
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  <strong>Delivery Areas:</strong> Lagos, Abuja, Port Harcourt, Ibadan, 
                  and other major cities in Nigeria. International shipping available.
                </p>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Quick Help
              </h4>
              <div className="space-y-2">
                <a href="#products" className="block text-emerald-600 hover:text-emerald-700 text-sm">
                  → Product Information & Ingredients
                </a>
                <a href="#diy" className="block text-emerald-600 hover:text-emerald-700 text-sm">
                  → DIY Hair Care Recipes
                </a>
                <a href="#community" className="block text-emerald-600 hover:text-emerald-700 text-sm">
                  → Join Our Community
                </a>
                <a href="https://wa.me/2348162753143" className="block text-emerald-600 hover:text-emerald-700 text-sm">
                  → Order Status & Shipping
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;