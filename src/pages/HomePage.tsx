import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight,
  Brain,
  Target,
  Layers,
  Zap,
  Users,
  TrendingUp,
  Award,
  Globe,
  Play,
  Star
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import AnimatedCounter from '../components/common/AnimatedCounter';
import IntersectionObserver from '../components/common/IntersectionObserver';

const HomePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { getContentBlocks } = useCMS();
  const homePageBlocks = getContentBlocks('home');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "EdgeUp - AI-Powered Learning Platform for Institutions";
  }, []);

  // Stats data
  const stats = [
    { number: 32, suffix: '%', label: 'Improvement in Test Scores', icon: TrendingUp },
    { number: 150, suffix: '+', label: 'Partner Institutions', icon: Users },
    { number: 50000, suffix: '+', label: 'Students Impacted', icon: Globe },
    { number: 95, suffix: '%', label: 'Success Rate', icon: Award }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: "1",
      quote: "EdgeUp has transformed how we prepare students for UPSC. The personalized insights give our teachers powerful tools to support each student's journey.",
      name: "Rajiv Sharma",
      position: "Director",
      institution: "Delhi IAS Academy",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 5
    },
    {
      id: "2",
      quote: "The adaptive testing technology has significantly improved our assessment capabilities. Our students feel more confident and perform better in competitive exams.",
      name: "Priya Patel",
      position: "CEO",
      institution: "NextGen Learning Solutions",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 5
    },
    {
      id: "3",
      quote: "Implementing EdgeUp was seamless. Their team understood our needs and the platform has exceeded our expectations in enhancing student outcomes.",
      name: "Anil Kumar",
      position: "Founder",
      institution: "Achievers NEET Academy",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 5
    }
  ];

  // Features data
  const features = [
    {
      icon: Brain,
      title: "Psychometric Profiling",
      description: "Understand each learner's unique cognitive profile, learning style, and motivation patterns to create tailored study paths."
    },
    {
      icon: Target,
      title: "Adaptive Testing Engine",
      description: "Advanced algorithms that adjust question difficulty based on student performance, maximizing assessment effectiveness."
    },
    {
      icon: Layers,
      title: "Smart Study Plans",
      description: "AI-generated study schedules that optimize learning and retention based on individual strengths and weaknesses."
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Works with your existing LMS or as a standalone platform, making implementation fast and hassle-free."
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <main className="pt-16 overflow-hidden">
      {/* Hero Section - Gridly Style */}
      <section className="min-h-screen bg-gradient-light relative">
        {/* Floating particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left side - Content */}
            <div className="space-y-8 relative z-20">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#094d88]/10 to-[#10ac8b]/10 rounded-full text-[#094d88] text-sm font-medium animate-fade-in-up">
                  <span className="w-2 h-2 bg-[#10ac8b] rounded-full mr-2 animate-pulse"></span>
                  Your Path to Digital Success
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight relative z-30 animate-fade-in-up delay-200">
                  AI-Powered Learning. Built for Institutions. Personalised for Learners.
                </h1>
                
                <p className="text-xl text-muted leading-relaxed animate-fade-in-up delay-300 relative z-30">
                  EdgeUp functions as an embedded study companion, enabling partners to offer adaptive learning journeys, smart content delivery, contextual nudges, and real-time learner support powered by proprietary AI models.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500 relative z-30">
                <Link
                  to="/book-demo"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#10ac8b] text-white font-semibold rounded-lg hover:bg-[#0d9488] transition-all duration-300 hover:scale-105 group"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/product"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#094d88] text-[#094d88] font-semibold rounded-lg hover:bg-[#094d88] hover:text-white transition-all duration-300 hover:scale-105 group"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Discover Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 pt-8 animate-fade-in-up delay-700 relative z-30">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="stat-card hover-lift">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg mb-3 mx-auto">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-[#094d88] mb-1">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Dashboard Mockup */}
            <div className="relative animate-fade-in-right delay-400 z-10">
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 hover-lift">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg"></div>
                    <span className="font-semibold text-gray-900">EdgeUp Dashboard</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="space-y-4">
                  {/* Progress Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-blue-light p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Active Students</div>
                      <div className="text-2xl font-bold text-[#094d88]">
                        <AnimatedCounter end={1248} />
                      </div>
                      <div className="text-xs text-green-600">+12% this month</div>
                    </div>
                    <div className="bg-gradient-teal-light p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Completion Rate</div>
                      <div className="text-2xl font-bold text-[#10ac8b]">
                        <AnimatedCounter end={87} suffix="%" />
                      </div>
                      <div className="text-xs text-green-600">+5% this week</div>
                    </div>
                  </div>

                  {/* Chart Mockup */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm font-medium text-gray-700 mb-3">Learning Progress</div>
                    <div className="flex items-end space-x-2 h-20">
                      {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-t from-[#094d88] to-[#10ac8b] rounded-t flex-1 animate-scale-in"
                          style={{ 
                            height: `${height}%`,
                            animationDelay: `${index * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Recent Activity</div>
                    {[
                      { name: "UPSC Mock Test", progress: 85 },
                      { name: "Current Affairs", progress: 92 },
                      { name: "Essay Writing", progress: 78 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2 animate-fade-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
                        <span className="text-sm text-gray-600">{item.name}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-[#094d88] to-[#10ac8b] transition-all duration-1000"
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500">{item.progress}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#10ac8b] to-[#094d88] rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <IntersectionObserver>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Trusted by Leading Institutions</h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                Our AI-powered platform delivers measurable results for educational institutions across India.
              </p>
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-xl mb-4 mx-auto">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#094d88] mb-2">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* PASCO Framework Section */}
      <IntersectionObserver>
        <section className="section-padding bg-gradient-blue-light">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-white/50 rounded-full text-[#094d88] text-sm font-medium mb-6">
                PASCO Framework
              </div>
              <h2 className="heading-lg mb-4">Our Proprietary AI Framework</h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                PASCO is EdgeUp's proprietary AI-powered framework designed to personalize and optimize learning journeys across age groups.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { letter: 'P', word: 'Personality', description: 'Understanding learning style and cognitive preferences', icon: Brain },
                { letter: 'A', word: 'Aptitude', description: 'Measuring natural abilities and potential', icon: Target },
                { letter: 'S', word: 'Skills', description: 'Assessing current capabilities and competencies', icon: Zap },
                { letter: 'C', word: 'Character', description: 'Evaluating motivation and learning behavior', icon: Users },
                { letter: 'O', word: 'Observation', description: 'Continuous monitoring and adaptation', icon: TrendingUp }
              ].map((item, index) => (
                <div key={index} className="feature-card text-center hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{item.letter}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.word}</h3>
                  <p className="text-sm text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Features Section */}
      <IntersectionObserver>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Transform Learning with AI-Powered Precision</h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                Our platform helps institutions prepare students for UPSC, state exams, and other competitive tests with personalized learning experiences.
              </p>
            </div>

            <div className="feature-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Testimonials Section */}
      <IntersectionObserver>
        <section className="section-padding bg-gradient-teal-light">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">What Our Partners Say</h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                See how institutions across India are transforming education with EdgeUp.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="testimonial-card hover-lift animate-scale-in">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-700 mb-4 italic">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                      <div className="text-muted">{testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].institution}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-[#10ac8b] scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* CTA Section */}
      <IntersectionObserver>
        <section className="section-padding bg-gradient-edgeup text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="heading-lg mb-6 text-white animate-fade-in-up">
                Ready to Transform Education at Your Institution?
              </h2>
              <p className="text-xl text-white/90 mb-10 animate-fade-in-up delay-200">
                Join the growing network of forward-thinking institutions using EdgeUp to deliver personalized learning experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
                <Link
                  to="/book-demo"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#094d88] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Book a Demo Today
                </Link>
                <Link
                  to="/for-institutions"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#094d88] transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>
    </main>
  );
};

export default HomePage;