
import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Appointment data:', formData);
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-warm-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg luxury-shadow p-8 max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="text-gold-600" size={32} />
          </div>
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Appointment Requested
          </h2>
          <p className="text-gray-600 font-inter mb-6">
            Thank you for booking with MNAFS. We'll contact you within 24 hours to confirm your appointment details.
          </p>
          <Button 
            onClick={() => setSubmitted(false)}
            className="gradient-gold text-white font-inter hover-lift"
          >
            Book Another Appointment
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
            Book Your <span className="text-gradient-gold">Private Viewing</span>
          </h1>
          <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
            Schedule a personal appointment to explore our curated collection in an intimate, luxury setting.
          </p>
        </div>
      </section>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Appointment Form */}
            <div className="bg-white rounded-lg luxury-shadow p-8">
              <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                Schedule Your Visit
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="font-inter font-medium text-gray-700 mb-2 block">
                      Full Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10 font-inter border-gold-200 focus:border-gold-400"
                        placeholder="Your name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="font-inter font-medium text-gray-700 mb-2 block">
                      Email *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10 font-inter border-gold-200 focus:border-gold-400"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="font-inter font-medium text-gray-700 mb-2 block">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="pl-10 font-inter border-gold-200 focus:border-gold-400"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="font-inter font-medium text-gray-700 mb-2 block">
                      Preferred Date *
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="pl-10 font-inter border-gold-200 focus:border-gold-400"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label className="font-inter font-medium text-gray-700 mb-2 block">
                      Preferred Time *
                    </Label>
                    <Select onValueChange={(value) => handleSelectChange('time', value)} required>
                      <SelectTrigger className="font-inter border-gold-200 focus:border-gold-400">
                        <Clock className="mr-2 text-gray-400" size={18} />
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="font-inter font-medium text-gray-700 mb-2 block">
                    Service Type
                  </Label>
                  <Select onValueChange={(value) => handleSelectChange('service', value)}>
                    <SelectTrigger className="font-inter border-gold-200 focus:border-gold-400">
                      <SelectValue placeholder="What would you like to explore?" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="browse">Browse Collection</SelectItem>
                      <SelectItem value="specific">Looking for Specific Item</SelectItem>
                      <SelectItem value="occasion">Occasion Shopping</SelectItem>
                      <SelectItem value="styling">Personal Styling</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="font-inter font-medium text-gray-700 mb-2 block">
                    Additional Details
                  </Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="pl-10 font-inter border-gold-200 focus:border-gold-400 min-h-[100px]"
                      placeholder="Tell us about your preferences, size requirements, or any specific items you're interested in..."
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-gold text-white font-inter font-semibold py-3 hover-lift"
                >
                  {isSubmitting ? 'Submitting...' : 'Book Appointment'}
                </Button>
              </form>
            </div>

            {/* Information Panel */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg luxury-shadow p-8">
                <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4">
                  What to Expect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gold-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-gray-900">Personal Welcome</h4>
                      <p className="text-gray-600 font-inter text-sm">Private viewing in our curated showroom</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gold-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-gray-900">Expert Guidance</h4>
                      <p className="text-gray-600 font-inter text-sm">Styling advice and cultural context</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-gold-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-gray-900">Try & Experience</h4>
                      <p className="text-gray-600 font-inter text-sm">Feel the quality and find your perfect fit</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg luxury-shadow p-8">
                <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4">
                  Visit Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-gold-600" size={20} />
                    <div>
                      <p className="font-inter font-medium text-gray-900">Location</p>
                      <p className="text-gray-600 font-inter text-sm">Private showroom (address shared upon confirmation)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="text-gold-600" size={20} />
                    <div>
                      <p className="font-inter font-medium text-gray-900">Duration</p>
                      <p className="text-gray-600 font-inter text-sm">60-90 minutes</p>
                    </div>
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

export default Appointment;
