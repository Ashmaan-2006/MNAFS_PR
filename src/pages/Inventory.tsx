
import { Search, Filter, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Inventory = () => {
  const placeholderProducts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      title: 'Elegant Silk Saree',
      designer: 'Premium Collection',
      price: '₹15,999',
      condition: 'Like New',
      comingSoon: true
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80',
      title: 'Designer Lehenga Set',
      designer: 'Luxury Couture',
      price: '₹25,999',
      condition: 'Excellent',
      comingSoon: true
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80',
      title: 'Embroidered Anarkali',
      designer: 'Heritage Collection',
      price: '₹18,999',
      condition: 'Like New',
      comingSoon: true
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      title: 'Banarasi Silk Dupatta',
      designer: 'Traditional Crafts',
      price: '₹8,999',
      condition: 'New',
      comingSoon: true
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80',
      title: 'Contemporary Sharara',
      designer: 'Modern Heritage',
      price: '₹12,999',
      condition: 'Excellent',
      comingSoon: true
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80',
      title: 'Vintage Ghagra',
      designer: 'Collector\'s Edition',
      price: '₹22,999',
      condition: 'Vintage',
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Header */}
      <section className="bg-white border-b border-gold-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mb-4">
              Our Curated <span className="text-gradient-gold">Collection</span>
            </h1>
            <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
              Discover exclusive South Asian fashion pieces, each carefully selected for their quality and cultural significance.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gold-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search for items..."
                className="pl-10 font-inter border-gold-200 focus:border-gold-400"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="font-inter border-gold-200 hover:border-gold-400">
                <Filter size={16} className="mr-2" />
                Category
              </Button>
              <Button variant="outline" className="font-inter border-gold-200 hover:border-gold-400">
                Price Range
              </Button>
              <Button variant="outline" className="font-inter border-gold-200 hover:border-gold-400">
                Condition
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="bg-white rounded-lg luxury-shadow hover-lift overflow-hidden">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.comingSoon && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg">
                          <span className="text-gray-900 font-inter font-semibold text-lg">
                            Coming Soon
                          </span>
                        </div>
                      </div>
                    )}
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                      <Heart size={18} className="text-gray-600 hover:text-red-500" />
                    </button>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-inter font-medium">
                        {product.condition}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gold-600 font-inter font-medium mb-3">
                      {product.designer}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-playfair font-bold text-gray-900">
                        {product.price}
                      </span>
                      <Button 
                        size="sm" 
                        disabled={product.comingSoon}
                        className="gradient-gold text-white font-inter hover-lift"
                      >
                        <ShoppingBag size={16} className="mr-2" />
                        {product.comingSoon ? 'Soon' : 'View'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Coming Soon Message */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-lg luxury-shadow p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                Collection Launching Soon
              </h3>
              <p className="text-gray-600 font-inter mb-6">
                We're carefully curating our collection of exclusive South Asian fashion pieces. 
                Sign up to be notified when we launch and get early access to our finest selections.
              </p>
              <Button className="gradient-gold text-white font-inter hover-lift px-8">
                Notify Me
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inventory;
