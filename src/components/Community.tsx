import React, { useState } from 'react';
import { Heart, MessageCircle, Instagram, Mail, Star, Users, Camera } from 'lucide-react';

const Community = () => {
  const [email, setEmail] = useState('');

  const testimonials = [
    {
      id: 1,
      name: "Adunni O.",
      location: "Lagos, Nigeria",
      image: "/1000142167.jpg",
      rating: 5,
      text: "Dee's products completely transformed my hair! My curls are more defined and moisturized than ever. The community support is amazing too! 💕",
      transformation: "4C to healthy, defined curls"
    },
    {
      id: 2,
      name: "Kemi A.",
      location: "Abuja, Nigeria",
      image: "/1000142170.jpg",
      rating: 5,
      text: "I've been natural for 3 years but struggled with dryness. Dee's moisturizer changed everything! My hair stays hydrated for days.",
      transformation: "Dry hair to moisturized perfection"
    },
    {
      id: 3,
      name: "Funmi L.",
      location: "Ibadan, Nigeria",
      image: "/1000142171.jpg",
      rating: 5,
      text: "The DIY recipes are gold! I made the flaxseed gel and my wash-and-go lasted a whole week. Thank you Dee! 🙌",
      transformation: "Frizzy hair to defined wash-and-go"
    }
  ];

  const instagramPosts = [
    {
      id: 1,
      image: "/1000142166.jpg",
      caption: "Sunday self-care with our deep conditioning mask ✨",
      likes: 234,
      comments: 18
    },
    {
      id: 2,
      image: "/1000061297.jpg",
      caption: "Curl definition goals with our natural styling cream 💫",
      likes: 189,
      comments: 12
    },
    {
      id: 3,
      image: "/1000142167.jpg",
      caption: "Healthy hair journey progress - 6 months with Dee's! 🌱",
      likes: 312,
      comments: 25
    },
    {
      id: 4,
      image: "/1000142170.jpg",
      caption: "DIY hair mask Sunday featuring our favorite ingredients 🥑",
      likes: 156,
      comments: 9
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    alert('Thank you for joining our community! Welcome to the family! 💕');
    setEmail('');
  };

  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Happy Natural Hair World
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of natural hair enthusiasts celebrating their journey. 
            Share your story, get support, and inspire others in our loving community.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4">
              <Users size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900">5,000+</div>
            <div className="text-gray-600">Community Members</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 text-pink-600 rounded-full mb-4">
              <Heart size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900">10,000+</div>
            <div className="text-gray-600">Hair Transformations</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-full mb-4">
              <Star size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
              <MessageCircle size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900">500+</div>
            <div className="text-gray-600">Daily Interactions</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Hair Transformation Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-sm font-semibold text-emerald-600">
                    Transformation: {testimonial.transformation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Feed */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Follow Our Journey
            </h3>
            <p className="text-gray-600 mb-6">
              Get daily inspiration and tips on Instagram @dees.haircare
            </p>
            <a
              href="https://www.instagram.com/dees.haircare"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
            >
              <Instagram className="mr-2" size={20} />
              Follow @dees.haircare
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <div
                key={post.id}
                className="relative group cursor-pointer rounded-xl overflow-hidden"
              >
                <img
                  src={post.image}
                  alt="Instagram post from Dee's Hair Care"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex items-center">
                        <Heart size={16} className="mr-1" />
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle size={16} className="mr-1" />
                        {post.comments}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-emerald-600 to-amber-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Join Our Natural Hair Family
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Get weekly DIY recipes, exclusive tips, product updates, and join a 
              community that celebrates your natural hair journey.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                Join Now
              </button>
            </form>
            
            <p className="text-sm mt-4 opacity-75">
              No spam, just love for your hair. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Our Community Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                <Heart size={20} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Love & Support</h4>
              <p className="text-gray-600 text-sm">
                We celebrate every hair type and journey with kindness and encouragement.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-600 rounded-full mb-4">
                <Users size={20} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Inclusivity</h4>
              <p className="text-gray-600 text-sm">
                Everyone is welcome regardless of hair type, length, or where you are in your journey.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 text-pink-600 rounded-full mb-4">
                <Camera size={20} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Share & Inspire</h4>
              <p className="text-gray-600 text-sm">
                Share your progress, tips, and inspire others on their natural hair journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;