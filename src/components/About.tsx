import React from 'react';
import { Heart, Users, Award, Leaf } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Natural",
      description: "Only the finest organic ingredients, no harsh chemicals ever"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Made with Love",
      description: "Every product is crafted with care and passion for healthy hair"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description: "Building a supportive community of natural hair enthusiasts"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Results",
      description: "Thousands of satisfied customers with transformed hair"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="/1000142167.jpg"
              alt="Dee, passionate founder of Dee's Hair Care"
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet Dee: Your Natural Hair Care Expert
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Hi beautiful! I'm Dee, and I'm passionate about helping you embrace 
                  and love your natural hair. My journey started when I struggled with 
                  damaged hair from harsh chemicals and heat styling.
                </p>
                <p>
                  After discovering the power of natural ingredients, I transformed not 
                  just my hair, but my entire relationship with self-care. Now, I'm 
                  dedicated to sharing that knowledge and creating products that celebrate 
                  the beauty of natural hair.
                </p>
                <p>
                  Dee's Hair Care isn't just a brand – it's a movement. We're building 
                  a community where every curl, coil, and kink is celebrated. Together, 
                  we're proving that healthy hair is happy hair!
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">My Mission</h3>
              <p className="text-gray-700">
                To empower every person with natural hair to embrace their unique beauty 
                through education, community, and products that actually work. Because 
                when you love your hair, you love yourself.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What We Stand For
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;