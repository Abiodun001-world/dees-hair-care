import React, { useState } from 'react';
import { Search, Clock, Users, BookOpen, ChevronRight } from 'lucide-react';

const DIYTips = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tips' },
    { id: 'growth', name: 'Hair Growth' },
    { id: 'moisturizing', name: 'Moisturizing' },
    { id: 'styling', name: 'Styling' },
    { id: 'treatments', name: 'Treatments' }
  ];

  const diyTips = [
    {
      id: 1,
      title: "DIY Avocado Hair Mask for Deep Moisture",
      category: "moisturizing",
      readTime: "5 min read",
      difficulty: "Beginner",
      image: "/1000142170.jpg",
      excerpt: "Transform dry, brittle hair with this nourishing avocado mask that provides intense hydration.",
      ingredients: ["1 ripe avocado", "2 tbsp honey", "1 tbsp olive oil"],
      featured: true
    },
    {
      id: 2,
      title: "Rice Water Rinse for Hair Growth",
      category: "growth",
      readTime: "3 min read",
      difficulty: "Beginner",
      image: "/1000142171.jpg",
      excerpt: "Ancient Asian secret for promoting hair growth and adding shine to your natural hair.",
      ingredients: ["1 cup rice", "2 cups water", "Essential oil (optional)"],
      featured: true
    },
    {
      id: 3,
      title: "Flaxseed Gel for Curl Definition",
      category: "styling",
      readTime: "10 min read",
      difficulty: "Intermediate",
      image: "/1000142166.jpg",
      excerpt: "Create your own natural curl defining gel that provides hold without the crunch.",
      ingredients: ["1/4 cup flaxseeds", "2 cups water", "1 tsp vitamin E oil"],
      featured: false
    },
    {
      id: 4,
      title: "Protein Treatment with Eggs",
      category: "treatments",
      readTime: "7 min read",
      difficulty: "Beginner",
      image: "/1000061297.jpg",
      excerpt: "Strengthen weak hair with this protein-rich treatment using kitchen ingredients.",
      ingredients: ["2 eggs", "1 tbsp honey", "2 tbsp coconut oil"],
      featured: false
    },
    {
      id: 5,
      title: "Scalp Massage Techniques for Growth",
      category: "growth",
      readTime: "4 min read",
      difficulty: "Beginner",
      image: "/1000142170.jpg",
      excerpt: "Learn proper scalp massage techniques to stimulate blood flow and promote hair growth.",
      ingredients: ["Your hands", "Essential oils (optional)"],
      featured: false
    },
    {
      id: 6,
      title: "Aloe Vera Leave-In Conditioner",
      category: "moisturizing",
      readTime: "6 min read",
      difficulty: "Beginner",
      image: "/1000142171.jpg",
      excerpt: "Create a lightweight, moisturizing leave-in conditioner perfect for daily use.",
      ingredients: ["1/2 cup aloe vera gel", "1/4 cup distilled water", "1 tsp glycerin"],
      featured: false
    }
  ];

  const filteredTips = diyTips.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tip.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tip.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredTips = diyTips.filter(tip => tip.featured);

  return (
    <section id="diy" className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            DIY Hair Care Tips & Tricks
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover Dee's favorite DIY recipes and techniques for healthy, beautiful natural hair. 
            All using ingredients you can find in your kitchen!
          </p>
        </div>

        {/* Featured Tips */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured DIY Recipes</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredTips.map((tip) => (
              <div
                key={tip.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(cat => cat.id === tip.category)?.name}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {tip.title}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {tip.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {tip.readTime}
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-1" />
                        {tip.difficulty}
                      </div>
                    </div>
                    <button className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
                      Read Full Recipe
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search DIY tips..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-emerald-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* All Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                    {categories.find(cat => cat.id === tip.category)?.name}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {tip.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  {tip.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {tip.readTime}
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    {tip.difficulty}
                  </div>
                </div>
                <button className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
                  <BookOpen size={16} className="mr-2" />
                  Read Recipe
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want More Exclusive DIY Recipes?
          </h3>
          <p className="text-gray-600 mb-6">
            Join our community to get weekly DIY recipes, hair care tips, and exclusive content 
            delivered straight to your inbox.
          </p>
          <a
            href="#community"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-colors duration-200"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  );
};

export default DIYTips;