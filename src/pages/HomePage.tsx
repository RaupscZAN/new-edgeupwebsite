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
import Spline from '@splinetool/react-spline';
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
    <main className="pt-16 overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
        
        {/* Static Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

        {/* Floating Particles */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section with Spline 3D Bot */}
      <section className="min-h-screen relative z-10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left side - Content */}
            <div className="space-y-8 relative z-20">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-[#094d88] text-sm font-medium border border-white/30 shadow-lg animate-fade-in-up">
                  <span className="w-2 h-2 bg-[#10ac8b] rounded-full mr-2 animate-pulse"></span>
                  Your Path to Digital Success
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] bg-clip-text text-transparent leading-tight relative z-30 animate-fade-in-up delay-200">
                  AI-Powered Learning. Built for Institutions. Personalised for Learners.
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up delay-300 relative z-30">
                  EdgeUp functions as an embedded study companion, enabling partners to offer adaptive learning journeys, smart content delivery, contextual nudges, and real-time learner support powered by proprietary AI models.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500 relative z-30">
                <Link
                  to="/book-demo"
                  className="group relative overflow-hidden bg-gradient-to-r from-[#10ac8b] to-[#0d9488] text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </span>
                </Link>
                <Link
                  to="/product"
                  className="group relative overflow-hidden border-2 border-[#094d88] text-[#094d88] px-8 py-4 rounded-2xl font-semibold hover:bg-[#094d88] hover:text-white transition-all duration-500 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Play className="mr-2 h-4 w-4" />
                    Discover Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right side - Spline 3D Bot */}
            <div className="relative animate-fade-in-right delay-400 z-10 h-[600px]">
              <div className="w-full h-full rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                <Spline
                  scene="https://prod.spline.design/D7RnQq8HaP1fQXcb/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              
              {/* Floating elements around Spline */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#10ac8b]/30 to-[#094d88]/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-[#094d88]/30 to-[#10ac8b]/30 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Dashboard */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent mb-6">
                Trusted by Leading Institutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered platform delivers measurable results for educational institutions across India.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Stats Grid - Left Side */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-xl mb-4 mx-auto">
                        <stat.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-[#094d88] mb-2">
                        <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                      </div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashboard - Right Side (Smaller) */}
              <div className="lg:col-span-1">
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-4 border border-white/20 hover:shadow-2xl transition-all duration-700 hover:scale-105 animate-fade-in-left delay-600">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg"></div>
                      <span className="font-semibold text-gray-900 text-sm">EdgeUp Dashboard</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="space-y-3">
                    {/* Progress Cards */}
                    <div className="grid grid-cols-1 gap-3">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg border border-white/30">
                        <div className="text-xs text-gray-600 mb-1">Active Students</div>
                        <div className="text-lg font-bold text-[#094d88]">
                          <AnimatedCounter end={1248} />
                        </div>
                        <div className="text-xs text-green-600">+12% this month</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg border border-white/30">
                        <div className="text-xs text-gray-600 mb-1">Completion Rate</div>
                        <div className="text-lg font-bold text-[#10ac8b]">
                          <AnimatedCounter end={87} suffix="%" />
                        </div>
                        <div className="text-xs text-green-600">+5% this week</div>
                      </div>
                    </div>

                    {/* Chart Mockup */}
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg border border-white/30">
                      <div className="text-xs font-medium text-gray-700 mb-2">Learning Progress</div>
                      <div className="flex items-end space-x-1 h-12">
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
                    <div className="space-y-1">
                      <div className="text-xs font-medium text-gray-700">Recent Activity</div>
                      {[
                        { name: "UPSC Mock Test", progress: 85 },
                        { name: "Current Affairs", progress: 92 },
                        { name: "Essay Writing", progress: 78 }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-1 animate-fade-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
                          <span className="text-xs text-gray-600">{item.name}</span>
                          <div className="flex items-center space-x-1">
                            <div className="w-12 h-1 bg-gray-200 rounded-full overflow-hidden">
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
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Features Section */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent mb-6">
                Transform Learning with AI-Powered Precision
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform helps institutions prepare students for UPSC, state exams, and other competitive tests with personalized learning experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Testimonials Section */}
      <IntersectionObserver>
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#094d88] to-[#10ac8b] bg-clip-text text-transparent mb-6">
                What Our Partners Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how institutions across India are transforming education with EdgeUp.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-scale-in">
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
                      <div className="text-gray-600">{testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].institution}</div>
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
        <section className="section-padding relative z-10">
          <div className="container-custom">
            <div className="relative bg-gradient-to-r from-[#094d88] via-[#10ac8b] to-[#094d88] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>
              </div>
              
              <div className="relative z-10 text-center max-w-4xl mx-auto py-20 px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in-up">
                  Ready to Transform Education at Your Institution?
                </h2>
                <p className="text-xl text-white/90 mb-12 animate-fade-in-up delay-200">
                  Join the growing network of forward-thinking institutions using EdgeUp to deliver personalized learning experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
                  <Link
                    to="/book-demo"
                    className="group relative overflow-hidden bg-white text-[#094d88] px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Book a Demo Today
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </span>
                  </Link>
                  <Link
                    to="/for-institutions"
                    className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#094d88] transition-all duration-500 hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      <style jsx>{`
        .particle-float {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #094d88, #10ac8b);
          border-radius: 50%;
          animation: float 20s ease-in-out infinite;
          opacity: 0.6;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(-40px) rotate(180deg); }
          75% { transform: translateY(-20px) rotate(270deg); }
        }

        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
      `}</style>
    </main>
  );
};

export default HomePage;