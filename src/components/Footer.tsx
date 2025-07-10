
import { Instagram, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-warm-50 border-t border-gold-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold text-gradient-gold">
              MNAFS
            </h3>
            <p className="text-gray-600 font-inter">
              Curated high-end South Asian women's fashion. 
              Discover exclusive pieces that celebrate culture and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-gray-900">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a href="/inventory" className="block text-gray-600 hover:text-gold-600 transition-colors duration-200 font-inter">
                Inventory
              </a>
              <a href="/appointment" className="block text-gray-600 hover:text-gold-600 transition-colors duration-200 font-inter">
                Book Appointment
              </a>
              <a href="/about" className="block text-gray-600 hover:text-gold-600 transition-colors duration-200 font-inter">
                About Us
              </a>
              <a href="/contact" className="block text-gray-600 hover:text-gold-600 transition-colors duration-200 font-inter">
                Contact
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-gray-900">
              Connect With Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gold-600" />
                <span className="text-gray-600 font-inter">hello@mnafs.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gold-600 transition-colors duration-200"
                >
                  <Instagram size={18} />
                  <span className="font-inter">Instagram</span>
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gold-600 transition-colors duration-200"
                >
                  <MessageCircle size={18} />
                  <span className="font-inter">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gold-100 text-center">
          <p className="text-gray-500 font-inter">
            © 2024 MNAFS. All rights reserved. Curated with elegance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
