
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Calendar, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="text-gold-400" size={24} />
              <span className="text-gold-400 font-inter font-medium tracking-wide uppercase text-sm">
                Curated Excellence
              </span>
              <Sparkles className="text-gold-400" size={24} />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
              Elevate Your
              <span className="block text-gold-400">Cultural Style</span>
            </h1>
            
            <p className="text-xl sm:text-2xl font-inter font-light mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover exclusive, high-end South Asian women's fashion. 
              Each piece is carefully curated for the modern woman who values elegance and cultural heritage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/inventory">
                <Button 
                  size="lg" 
                  className="gradient-gold text-white font-inter font-semibold px-8 py-4 hover-lift group"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </Button>
              </Link>
              
              <Link to="/appointment">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-inter font-semibold px-8 py-4 hover-lift"
                >
                  <Calendar className="mr-2" size={20} />
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Why Choose <span className="text-gradient-gold">MNAFS</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
              We bring you the finest selection of South Asian fashion with uncompromising quality and style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover-lift luxury-shadow p-8 rounded-lg bg-white">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="text-gold-600" size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">
                Curated Selection
              </h3>
              <p className="text-gray-600 font-inter">
                Every piece is hand-selected for quality, authenticity, and timeless appeal.
              </p>
            </div>
            
            <div className="text-center group hover-lift luxury-shadow p-8 rounded-lg bg-white">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="text-gold-600" size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">
                Exclusive Access
              </h3>
              <p className="text-gray-600 font-inter">
                Access to rare and limited pieces from renowned South Asian designers.
              </p>
            </div>
            
            <div className="text-center group hover-lift luxury-shadow p-8 rounded-lg bg-white">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-gold-600" size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">
                Personal Experience
              </h3>
              <p className="text-gray-600 font-inter">
                Book private appointments to view and try pieces in an intimate setting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-gold">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Ready to Discover Your Next Statement Piece?
          </h2>
          <p className="text-xl text-white/90 font-inter mb-8 max-w-2xl mx-auto">
            Book a private appointment to experience our curated collection in person.
          </p>
          <Link to="/appointment">
            <Button 
              size="lg"
              className="bg-white text-gold-600 hover:bg-white/90 font-inter font-semibold px-8 py-4 hover-lift"
            >
              <Calendar className="mr-2" size={20} />
              Schedule Your Visit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
