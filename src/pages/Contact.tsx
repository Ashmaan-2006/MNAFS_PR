
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Contact form data:', formData);
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-warm-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg luxury-shadow p-8 max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="text-gold-600" size={32} />
          </div>
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Message Sent Successfully
          </h2>
          <p className="text-gray-600 font-inter mb-6">
            Thank you for reaching out to MNAFS. We'll get back to you within 24 hours.
          </p>
          <Button 
            onClick={() => setSubmitted(false)}
            className="gradient-gold text-white font-inter hover-lift"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Header */}
      <section className="bg-white border-b border-gold-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Get In <span className="text-gradient-gold">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have questions about our collection or need styling advice, we're here to help.
          </p>
        </div>
      </section>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg luxury-shadow p-8">
              <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="font-inter font-medium text-gray-700 mb-2 block">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="font-inter border-gold-200 focus:border-gold-400"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="font-inter font-medium text-gray-700 mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="font-inter border-gold-200 focus:border-gold-400"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="font-inter font-medium text-gray-700 mb-2 block">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="font-inter border-gold-200 focus:border-gold-400"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="font-inter font-medium text-gray-700 mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="font-inter border-gold-200 focus:border-gold-400 min-h-[150px]"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-gold text-white font-inter font-semibold py-3 hover-lift"
                >
                  <Send className="mr-2" size={18} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-lg luxury-shadow p-8">
                <h3 className="text-xl font-playfair font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-gold-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-gray-900 mb-1">Email Us</h4>
                      <p className="text-gray-600 font-inter">hello@mnafs.com</p>
                      <p className="text-gray-500 font-inter text-sm">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-gold-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-gray-900 mb-1">Call Us</h4>
                      <p className="text-gray-600 font-inter">+91 98765 43210</p>
                      <p className="text-gray-500 font-inter text-sm">Mon-Sat, 10 AM - 7 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-gold-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-gray-900 mb-1">Visit Us</h4>
                      <p className="text-gray-600 font-inter">By appointment only</p>
                      <p className="text-gray-500 font-inter text-sm">Private showroom location</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg luxury-shadow p-8">
                <h3 className="text-xl font-playfair font-bold text-gray-900 mb-6">
                  Follow Our Journey
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-gold-50 rounded-lg hover:bg-gold-100 transition-colors duration-200 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Instagram className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-gray-900 group-hover:text-gold-600 transition-colors duration-200">Instagram</h4>
                      <p className="text-gray-600 font-inter text-sm">Latest collections & styling inspiration</p>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-gold-50 rounded-lg hover:bg-gold-100 transition-colors duration-200 group"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <MessageCircle className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-gray-900 group-hover:text-gold-600 transition-colors duration-200">WhatsApp</h4>
                      <p className="text-gray-600 font-inter text-sm">Quick questions & instant support</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-lg luxury-shadow p-8">
                <h3 className="text-xl font-playfair font-bold text-gray-900 mb-6">
                  Business Hours
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-inter text-gray-900">Monday - Friday</span>
                    <span className="font-inter text-gray-600">10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-inter text-gray-900">Saturday</span>
                    <span className="font-inter text-gray-600">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-inter text-gray-900">Sunday</span>
                    <span className="font-inter text-gray-600">By appointment</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-gold-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Clock className="text-gold-600" size={16} />
                    <span className="font-inter text-gold-800 text-sm font-medium">
                      All visits require prior appointment
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
