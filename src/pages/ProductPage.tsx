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
      description: 'Understanding learning style and cognitive preferences',
      icon: Brain,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      letter: 'A', 
      word: 'Aptitude', 
      description: 'Measuring natural abilities and potential',
      icon: Target,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      letter: 'S', 
      word: 'Skills', 
      description: 'Assessing current capabilities and competencies',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      letter: 'C', 
      word: 'Character', 
      description: 'Evaluating motivation and learning behavior',
      icon: Shield,
      color: 'from-green-500 to-green-600'
    },
    { 
      letter: 'O', 
      word: 'Observation', 
      description: 'Continuous monitoring and adaptation',
      icon: Eye,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const benefits = [
    {
      title: 'Personalized Paths',
      description: 'Creates unique learning journeys based on individual profiles',
      icon: Brain,
      stats: { value: 85, label: 'Improvement in engagement' }
    },
    {
      title: 'Adaptive Learning',
      description: 'Continuously evolves with student progress',
      icon: Target,
      stats: { value: 92, label: 'Accuracy in assessment' }
    },
    {
      title: 'Real-time Insights',
      description: 'Provides actionable feedback for improvement',
      icon: TrendingUp,
      stats: { value: 78, label: 'Faster outcomes' }
    }
  ];

  const slmFeatures = [
    {
      title: 'Prescribed Textbooks',
      description: 'Curated content from standard educational materials',
      icon: '📚'
    },
    {
      title: 'Reading Materials',
      description: 'Supplementary content for deeper understanding',
      icon: '📖'
    },
    {
      title: 'Educational Videos',
      description: 'Visual learning resources for better comprehension',
      icon: '🎥'
    },
    {
      title: 'Faculty & Student Notes',
      description: 'Collaborative learning materials from educators and peers',
      icon: '📝'
    }
  ];

  return (
    <main className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="section-padding bg-[#094d88] text-white relative">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-[#10ac8b] rounded-full mr-2 animate-pulse"></span>
              Embedded Study Companion
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up delay-200">
              Intelligent Learning, Powered by AI
            </h1>
            
            <p className="text-xl text-white/90 mt-6 animate-fade-in-up delay-300">
              Rather than being a standalone app, EdgeUp functions as an embedded study companion, enabling partners to offer adaptive learning journeys, smart content delivery, contextual nudges, and real-time learner support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up delay-500">
              <Link
                to="/contact?demo=true"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#094d88] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/institutions"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#094d88] transition-all duration-300 hover:scale-105"
              >
                For Institutions
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Proprietary AI Framework</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                PASCO is EdgeUp's proprietary AI-powered framework designed to personalize and optimize learning journeys across age groups, by mapping and evolving student learning paths based on holistic learner profiling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
              {pascoFramework.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-[#094d88] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-white">{item.letter}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.word}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            {/* PASCO Benefits */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8">How PASCO Benefits Learning</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
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
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Small Language Model Section */}
      <IntersectionObserver>
        <section className="section-padding bg-gradient-to-r from-gray-50 to-teal-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-white/50 rounded-full text-[#094d88] text-sm font-medium">
                    Proprietary SLM
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Small Language Model</h2>
                  <p className="text-xl text-gray-600">
                    EdgeUp uses its own proprietary Small Language Model (SLM) built using comprehensive educational resources and advanced AI technology.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">Comprehensive Learning Resources</h3>
                  <div className="space-y-4">
                    {slmFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4 animate-fade-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">
                          <CheckCircle className="h-6 w-6 text-[#10ac8b]" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{feature.title}</h4>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300">
                  <img 
                    src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="AI learning technology"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <span className="text-white font-semibold text-lg">Intelligent content delivery powered by AI</span>
                  </div>
                </div>
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
                Ready to Transform Your Institution?
              </h2>
              <p className="text-xl text-white/90 mb-10 animate-fade-in-up delay-200">
                Experience the power of AI-driven personalization for your educational institution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
                <Link
                  to="/contact?demo=true"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#094d88] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Book a Demo Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/institutions"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#10ac8b] transition-all duration-300 hover:scale-105"
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