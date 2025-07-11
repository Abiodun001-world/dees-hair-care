import { useState } from 'react';
import { Star, ShoppingCart, Filter, Search } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'shampoo', name: 'Shampoos' },
    { id: 'conditioner', name: 'Conditioners' },
    { id: 'treatment', name: 'Treatments' },
    { id: 'styling', name: 'Styling' }
  ];

  const products = [
    {
      id: 1,
      name: "Natural Hair Moisturizer",
      category: "treatment",
      description: "Deep hydration for dry, thirsty curls with organic shea butter and coconut oil",
      price: "₦3,500",
      image: "/1000142170.jpg",
      rating: 4.9,
      reviews: 127,
      benefits: ["Deep Moisturizing", "Frizz Control", "Shine Enhancement"]
    },
    {
      id: 2,
      name: "Curl Defining Cream",
      category: "styling",
      description: "Define and enhance your natural curl pattern without the crunch",
      price: "₦4,200",
      image: "/1000142171.jpg",
      rating: 4.8,
      reviews: 89,
      benefits: ["Curl Definition", "Long-lasting Hold", "No Crunch"]
    },
    {
      id: 3,
      name: "Gentle Cleansing Shampoo",
      category: "shampoo",
      description: "Sulfate-free formula that cleanses without stripping natural oils",
      price: "₦2,800",
      image: "/1000142166.jpg",
      rating: 4.7,
      reviews: 156,
      benefits: ["Sulfate-Free", "Gentle Cleansing", "Color Safe"]
    },
    {
      id: 4,
      name: "Deep Conditioning Mask",
      category: "conditioner",
      description: "Weekly treatment for damaged and chemically processed hair",
      price: "₦5,500",
      image: "/1000061297.jpg",
      rating: 4.9,
      reviews: 203,
      benefits: ["Protein Treatment", "Damage Repair", "Strength Building"]
    },
    {
      id: 5,
      name: "Leave-In Conditioner",
      category: "treatment",
      description: "Daily protection and moisture for all hair types",
      price: "₦3,200",
      image: "/1000142170.jpg",
      rating: 4.6,
      reviews: 94,
      benefits: ["Daily Protection", "Heat Protection", "Detangling"]
    },
    {
      id: 6,
      name: "Hair Growth Oil",
      category: "treatment",
      description: "Stimulating blend of natural oils to promote healthy hair growth",
      price: "₦4,800",
      image: "/1000142171.jpg",
      rating: 4.8,
      reviews: 178,
      benefits: ["Growth Stimulation", "Scalp Health", "Thickness"]
    },
    {
      id: 7,
      name: "Edge Control Gel",
      category: "styling",
      description: "Strong hold gel for laying edges and baby hairs",
      price: "₦2,200",
      image: "/1000142166.jpg",
      rating: 4.5,
      reviews: 67,
      benefits: ["Strong Hold", "No Flaking", "Natural Ingredients"]
    },
    {
      id: 8,
      name: "Protein Treatment",
      category: "treatment",
      description: "Intensive protein therapy for weak and brittle hair",
      price: "₦6,200",
      image: "/1000061297.jpg",
      rating: 4.9,
      reviews: 145,
      benefits: ["Protein Infusion", "Strength Repair", "Breakage Prevention"]
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Natural Hair Care Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our complete range of 100% natural, cruelty-free hair care products. 
            Each formula is crafted with love using the finest organic ingredients.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={`${product.name} by Dee's Hair Care`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Natural
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {product.description}
                </p>
                
                {/* Benefits */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.benefits.slice(0, 2).map((benefit, index) => (
                      <span
                        key={index}
                        className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-xs text-gray-600">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-emerald-600">
                    {product.price}
                  </span>
                  <button className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-colors duration-200 text-sm">
                    <ShoppingCart className="mr-1" size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* USP Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose Dee's Hair Care?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm">Natural & Cruelty-Free</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Made</div>
              <div className="text-sm">With Love & Care</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;