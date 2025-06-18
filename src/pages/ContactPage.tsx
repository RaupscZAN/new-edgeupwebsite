import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Calendar, ExternalLink, CheckCircle, ArrowRight } from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import IntersectionObserver from '../components/common/IntersectionObserver';

type EnquirerRole = 'individual' | 'institution' | 'partner';

const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const isDemo = searchParams.get('demo') === 'true';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    message: '',
    role: 'individual' as EnquirerRole
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const { siteSettings, addFormSubmission } = useCMS();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact EdgeUp - Book a Demo";
    
    if (isDemo) {
      setFormData(prev => ({
        ...prev,
        message: "I would like to schedule a demo of the EdgeUp platform for my institution."
      }));
    }
  }, [isDemo]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    if (!formData.name || !formData.email || !formData.institution || !formData.message || !formData.role) {
      setError('Please fill out all required fields.');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Add form submission to CMS
      addFormSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        institution: formData.institution,
        message: formData.message,
        role: formData.role
      });

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        institution: '',
        message: '',
        role: 'individual'
      });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "How quickly can we implement EdgeUp?",
      answer: "Most institutions can be fully onboarded within 2-4 weeks, depending on the scale of implementation and existing systems integration."
    },
    {
      question: "Does EdgeUp integrate with our existing LMS?",
      answer: "Yes, EdgeUp is designed to integrate seamlessly with most popular LMS platforms, including Moodle, Canvas, and custom solutions."
    },
    {
      question: "How is EdgeUp priced?",
      answer: "We offer flexible pricing models based on institution size and feature requirements. Contact us for a custom quote tailored to your needs."
    },
    {
      question: "Is training provided for our staff?",
      answer: "Absolutely. We provide comprehensive training for faculty and staff as part of our implementation process, ensuring everyone can maximize the platform's potential."
    }
  ];

  return (
    <main className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-gray-50 to-blue-50 relative">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
              Get in Touch
            </h1>
            
            <p className="text-xl text-gray-600 mt-6 animate-fade-in-up delay-300">
              Have questions or want to learn more about EdgeUp? We are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info - Matching Reference Design */}
      <IntersectionObserver>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-0 max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Contact Information - Blue Sidebar */}
              <div className="bg-[#094d88] text-white p-8">
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-white mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <a 
                        href={`mailto:${siteSettings?.contactInfo?.email || 'info@edgeup.in'}`} 
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        {siteSettings?.contactInfo?.email || 'info@edgeup.in'}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-white mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <a 
                        href={`tel:${siteSettings?.contactInfo?.phone || '044 4500 2700'}`} 
                        className="text-white/90 hover:text-white transition-colors"
                      >
                        {siteSettings?.contactInfo?.phone || '044 4500 2700'}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-white mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Visit Us</h3>
                      <address className="not-italic text-white/90">
                        {siteSettings?.contactInfo?.address || 'No 14, Tank Bund Rd, Lake Area, Nungambakkam, Chennai, Tamil Nadu 600032'}
                      </address>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8 bg-gray-100 rounded-xl overflow-hidden h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8290740215574!2d80.24673147573892!3d13.0603399902862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267376515b75f%3A0x4afd61c7c0de4f78!2sEdgeUp!5e0!3m2!1sen!2sin!4v1710850058953!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form - White Section */}
              <div className="bg-white p-8">
                {submitSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                      <p className="text-gray-600 mb-6">
                        Your message has been received. We will get back to you shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="inline-flex items-center justify-center px-6 py-3 bg-[#10ac8b] text-white font-semibold rounded-lg hover:bg-[#0d9488] transition-all duration-300 hover:scale-105"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                    </div>
                    
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10ac8b] focus:border-transparent transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10ac8b] focus:border-transparent transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10ac8b] focus:border-transparent transition-all duration-300"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2">
                          Institution <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="institution"
                          name="institution"
                          value={formData.institution}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10ac8b] focus:border-transparent transition-all duration-300"
                          placeholder="Enter your institution name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                        I am <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10ac8b] focus:border-transparent transition-all duration-300"
                      >
                        <option value="individual">An Individual Learner</option>
                        <option value="institution">An Institution</option>
                        <option value="partner">Looking to Partner with EdgeUp</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10ac8b] focus:border-transparent transition-all duration-300"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center px-6 py-3 bg-[#094d88] text-white font-semibold rounded-lg hover:bg-[#073a6b] transition-all duration-300 hover:scale-105"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* FAQ Section */}
      <IntersectionObserver>
        <section className="section-padding bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about EdgeUp and our implementation process.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* CTA Section */}
      <IntersectionObserver>
        <section className="section-padding bg-[#10ac8b] text-white relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white animate-fade-in-up">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-10 animate-fade-in-up delay-200">
                Join hundreds of institutions already transforming education with EdgeUp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
                <Link
                  to="/for-institutions"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#094d88] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  For Institutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/product"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#10ac8b] transition-all duration-300 hover:scale-105"
                >
                  Explore Product
                </Link>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>
    </main>
  );
};

export default ContactPage;