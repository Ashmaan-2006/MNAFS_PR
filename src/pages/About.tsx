
import { Heart, Star, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-warm-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mb-6">
                Our Story of <span className="text-gradient-gold">Cultural Elegance</span>
              </h1>
              <p className="text-xl text-gray-600 font-inter mb-6 leading-relaxed">
                MNAFS was born from a passion for preserving and celebrating the exquisite artistry of South Asian fashion. 
                We believe that every woman deserves access to authentic, high-quality pieces that honor cultural heritage while embracing modern sophistication.
              </p>
              <p className="text-lg text-gray-600 font-inter leading-relaxed">
                Our carefully curated collection features pre-loved designer pieces and exclusive finds, 
                each selected for its craftsmanship, cultural significance, and timeless appeal.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80"
                alt="South Asian Fashion"
                className="rounded-lg luxury-shadow w-full h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 gradient-gold rounded-lg flex items-center justify-center">
                <Heart className="text-white" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              What Drives <span className="text-gradient-gold">MNAFS</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
              Our mission extends beyond fashion - we're preserving culture, supporting artisans, and empowering women.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg luxury-shadow p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-gold-600" size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">
                Cultural Heritage
              </h3>
              <p className="text-gray-600 font-inter">
                Preserving the rich traditions and artistry of South Asian craftsmanship
              </p>
            </div>

            <div className="bg-white rounded-lg luxury-shadow p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-gold-600" size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">
                Quality Excellence
              </h3>
              <p className="text-gray-600 font-inter">
                Every piece is meticulously inspected for authenticity and condition
              </p>
            </div>

            <div className="bg-white rounded-lg luxury-shadow p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-gold-600" size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">
                Community Focus
              </h3>
              <p className="text-gray-600 font-inter">
                Building connections through shared appreciation for cultural fashion
              </p>
            </div>

            <div className="bg-white rounded-lg luxury-shadow p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-gold-600" size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">
                Exclusive Access
              </h3>
              <p className="text-gray-600 font-inter">
                Rare finds and limited pieces from renowned designers and artisans
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                alt="Curated Collection"
                className="rounded-lg luxury-shadow w-full h-96 object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                Our Curation <span className="text-gradient-gold">Process</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gold-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-gray-900 mb-2">Sourcing Excellence</h3>
                    <p className="text-gray-600 font-inter">
                      We partner with trusted sellers, estate sales, and fashion collectors to source authentic, high-quality pieces.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gold-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-gray-900 mb-2">Authentication & Care</h3>
                    <p className="text-gray-600 font-inter">
                      Each item undergoes thorough authentication, professional cleaning, and condition assessment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gold-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-gray-900 mb-2">Curated Presentation</h3>
                    <p className="text-gray-600 font-inter">
                      We present each piece with its cultural context, styling suggestions, and care instructions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-20 gradient-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl font-playfair font-bold text-white mb-6">
              A Personal Note
            </h2>
            <blockquote className="text-xl font-inter text-white/90 italic mb-6 leading-relaxed">
              "Growing up surrounded by the beauty of South Asian textiles and craftsmanship, I always dreamed of making these treasures accessible to women who appreciate their cultural significance. MNAFS is more than a business - it's a celebration of our heritage and a bridge between tradition and modern style."
            </blockquote>
            <p className="text-white font-inter font-medium">
              - Founder, MNAFS
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
            Join Our <span className="text-gradient-gold">Cultural Fashion Journey</span>
          </h2>
          <p className="text-xl text-gray-600 font-inter mb-8 max-w-2xl mx-auto">
            Discover pieces that tell stories, honor traditions, and celebrate the artistry of South Asian fashion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/inventory" className="inline-block">
              <button className="gradient-gold text-white font-inter font-semibold px-8 py-3 rounded-lg hover-lift">
                Explore Collection
              </button>
            </a>
            <a href="/appointment" className="inline-block">
              <button className="border-2 border-gold-500 text-gold-600 font-inter font-semibold px-8 py-3 rounded-lg hover:bg-gold-50 transition-colors duration-200">
                Book Appointment
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
