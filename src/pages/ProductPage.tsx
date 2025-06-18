import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Target, 
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  ExternalLink,
  Eye,
  Shield,
  ArrowRight,
  Play
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import IntersectionObserver from '../components/common/IntersectionObserver';
import AnimatedCounter from '../components/common/AnimatedCounter';

const ProductPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "EdgeUp Product - AI-Powered Learning Platform";
  }, []);

  const { getContentBlocks } = useCMS();
  const productPageBlocks = getContentBlocks('product');

  const pascoFramework = [
    { 
      letter: 'P', 
      word: 'Personality', 
      description: 'Understanding learning style and cognitive preferences through advanced psychometric analysis',
      icon: Brain,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      letter: 'A', 
      word: 'Aptitude', 
      description: 'Measuring natural abilities and potential using scientifically validated assessments',
      icon: Target,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      letter: 'S', 
      word: 'Skills', 
      description: 'Assessing current capabilities and competencies across multiple domains',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      letter: 'C', 
      word: 'Character', 
      description: 'Evaluating motivation, persistence, and learning behavior patterns',
      icon: Shield,
      color: 'from-green-500 to-green-600'
    },
    { 
      letter: 'O', 
      word: 'Observation', 
      description: 'Continuous monitoring and real-time adaptation of learning paths',
      icon: Eye,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const benefits = [
    {
      title: 'Personalized Learning Paths',
      description: 'Creates unique learning journeys based on individual PASCO profiles',
      icon: Brain,
      stats: { value: 85, label: 'Improvement in engagement' }
    },
    {
      title: 'Adaptive Assessment',
      description: 'Continuously evolves with student progress and performance',
      icon: Target,
      stats: { value: 92, label: 'Accuracy in skill assessment' }
    },
    {
      title: 'Real-time Insights',
      description: 'Provides actionable feedback for continuous improvement',
      icon: TrendingUp,
      stats: { value: 78, label: 'Faster learning outcomes' }
    }
  ];

  const slmFeatures = [
    {
      title: 'Prescribed Textbooks',
      description: 'Curated content from standard educational materials and curriculum',
      icon: '📚'
    },
    {
      title: 'Reading Materials',
      description: 'Supplementary content for deeper understanding and context',
      icon: '📖'
    },
    {
      title: 'Educational Videos',
      description: 'Visual learning resources for better comprehension and retention',
      icon: '🎥'
    },
    {
      title: 'Faculty & Student Notes',
      description: 'Collaborative learning materials from educators and peer networks',
      icon: '📝'
    }
  ];

  return (
    <main className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-light relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#094d88]/10 to-[#10ac8b]/10 rounded-full text-[#094d88] text-sm font-medium animate-fade-in-up">
                  <span className="w-2 h-2 bg-[#10ac8b] rounded-full mr-2 animate-pulse"></span>
                  Embedded Study Companion
                </div>
                
                <h1 className="heading-xl animate-fade-in-up delay-200">
                  Intelligent Learning, Powered by AI
                </h1>
                
                <p className="text-xl text-muted leading-relaxed animate-fade-in-up delay-300">
                  Rather than being a standalone app, EdgeUp functions as an embedded study companion, enabling partners to offer adaptive learning journeys, smart content delivery, contextual nudges, and real-time learner support.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
                <Link
                  to="/contact?demo=true"
                  className="btn-primary group"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/institutions"
                  className="btn-secondary group"
                >
                  For Institutions
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Product Demo Mockup */}
            <div className="relative animate-fade-in-right delay-400">
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 hover-lift">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg"></div>
                    <span className="font-semibold text-gray-900">EdgeUp AI Platform</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-500">Live</span>
                  </div>
                </div>

                {/* AI Insights */}
                <div className="space-y-4">
                  <div className="bg-gradient-blue-light p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">AI Recommendations</span>
                      <Brain className="h-4 w-4 text-[#094d88]" />
                    </div>
                    <div className="text-xs text-gray-600 mb-3">Based on PASCO analysis</div>
                    <div className="space-y-2">
                      {[
                        { subject: 'Current Affairs', confidence: 92 },
                        { subject: 'Essay Writing', confidence: 78 },
                        { subject: 'Mock Tests', confidence: 85 }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">{item.subject}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-[#094d88] to-[#10ac8b] transition-all duration-1000"
                                style={{ width: `${item.confidence}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-500">{item.confidence}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-teal-light p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-[#10ac8b]">
                        <AnimatedCounter end={94} suffix="%" />
                      </div>
                      <div className="text-xs text-gray-600">Accuracy</div>
                    </div>
                    <div className="bg-gradient-blue-light p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-[#094d88]">
                        <AnimatedCounter end={127} />
                      </div>
                      <div className="text-xs text-gray-600">Active Users</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-[#10ac8b] to-[#094d88] rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* PASCO Framework Section */}
      <IntersectionObserver>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#094d88]/10 to-[#10ac8b]/10 rounded-full text-[#094d88] text-sm font-medium mb-6">
                PASCO Framework
              </div>
              <h2 className="heading-lg mb-4">Our Proprietary AI Framework</h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                PASCO is EdgeUp's proprietary AI-powered framework designed to personalize and optimize learning journeys across age groups, by mapping and evolving student learning paths based on holistic learner profiling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
              {pascoFramework.map((item, index) => (
                <div key={index} className="feature-card text-center hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <span className="text-2xl font-bold text-white">{item.letter}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.word}</h3>
                  <p className="text-sm text-muted">{item.description}</p>
                </div>
              ))}
            </div>

            {/* PASCO Benefits */}
            <div className="bg-gradient-blue-light rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8">How PASCO Benefits Learning</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex items-center justify-between mb-4">
                      <benefit.icon className="h-8 w-8 text-[#094d88]" />
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#10ac8b]">
                          <AnimatedCounter end={benefit.stats.value} suffix="%" />
                        </div>
                        <div className="text-xs text-gray-500">{benefit.stats.label}</div>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Small Language Model Section */}
      <IntersectionObserver>
        <section className="section-padding bg-gradient-teal-light">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-white/50 rounded-full text-[#094d88] text-sm font-medium">
                    Proprietary SLM
                  </div>
                  <h2 className="heading-lg">Small Language Model</h2>
                  <p className="text-xl text-muted">
                    EdgeUp uses its own proprietary Small Language Model (SLM) built using comprehensive educational resources and advanced AI technology.
                  </p>
                </div>

                <div className="space-y-4">
                  {slmFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 animate-fade-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-muted text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold mb-3">Key Capabilities</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#094d88] mb-1">
                        <AnimatedCounter end={50} suffix="M+" />
                      </div>
                      <div className="text-xs text-gray-600">Training Parameters</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#10ac8b] mb-1">
                        <AnimatedCounter end={99.2} suffix="%" />
                      </div>
                      <div className="text-xs text-gray-600">Content Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-6 hover-lift">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">SLM Processing</h4>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Input Processing</div>
                        <div className="text-sm">Analyzing student query: "Explain Indian Constitution basics"</div>
                      </div>
                      
                      <div className="flex justify-center">
                        <div className="w-8 h-8 border-2 border-[#10ac8b] border-t-transparent rounded-full animate-spin"></div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-[#094d88]/10 to-[#10ac8b]/10 p-3 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">AI Response</div>
                        <div className="text-sm">Generating personalized content based on PASCO profile...</div>
                        <div className="mt-2 space-y-1">
                          {['Fundamental Rights', 'Directive Principles', 'Federal Structure'].map((topic, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-3 w-3 text-green-500" />
                              <span className="text-xs text-gray-600">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Integration Section */}
      <IntersectionObserver>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Seamless Integration</h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                EdgeUp integrates effortlessly with your existing systems and workflows, making implementation fast and hassle-free.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'LMS Integration',
                  description: 'Compatible with all major learning management systems including Moodle, Canvas, and custom solutions.',
                  icon: Layers,
                  features: ['Single Sign-On', 'Grade Passback', 'Content Sync']
                },
                {
                  title: 'API-First Design',
                  description: 'Comprehensive REST APIs for custom integrations and third-party applications.',
                  icon: Zap,
                  features: ['RESTful APIs', 'Webhooks', 'Real-time Data']
                },
                {
                  title: 'Enterprise Security',
                  description: 'Bank-grade security with end-to-end encryption and compliance certifications.',
                  icon: Shield,
                  features: ['SOC 2 Compliant', 'GDPR Ready', 'Data Encryption']
                }
              ].map((item, index) => (
                <div key={index} className="feature-card hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* CTA Section */}
      <IntersectionObserver>
        <section className="section-padding bg-gradient-edgeup text-white relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="heading-lg mb-6 text-white animate-fade-in-up">
                Ready to Transform Your Institution?
              </h2>
              <p className="text-xl text-white/90 mb-10 animate-fade-in-up delay-200">
                Experience the power of AI-driven personalization for your educational institution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
                <Link
                  to="/contact?demo=true"
                  className="bg-white text-[#094d88] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  Book a Demo Today
                  <ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/institutions"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#094d88] transition-all duration-300 hover:scale-105"
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

export default ProductPage;