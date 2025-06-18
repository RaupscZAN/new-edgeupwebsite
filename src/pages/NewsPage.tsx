import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, ExternalLink, Calendar, User, ArrowRight } from 'lucide-react';
import IntersectionObserver from '../components/common/IntersectionObserver';
import { useCMS } from '../context/CMSContext';

const NewsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "EdgeUp News & Media";
  }, []);

  const { getContentBlocks } = useCMS();
  const newsPageBlocks = getContentBlocks('news');

  const newsItems = [
    {
      id: '1',
      title: 'EdgeUp Raises ₹8 Crore in Seed Funding',
      date: 'March 15, 2024',
      author: 'EdgeUp Team',
      category: 'Funding',
      image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1600',
      summary: 'Leading EdTech startup EdgeUp has secured ₹8 crore in seed funding from Enlighten Capital and other prominent investors to accelerate its mission of transforming competitive exam preparation through AI.',
      content: `EdgeUp, India's innovative AI-powered learning platform, today announced the successful completion of its seed funding round, raising ₹8 crore from a group of strategic investors led by Enlighten Capital.

The funding will be used to enhance EdgeUp's AI capabilities, expand its institutional partnerships, and strengthen its presence across India. The company plans to focus on developing more specialized modules for various competitive exams and improving its psychometric assessment tools.

"This investment validates our vision of transforming how institutions prepare students for competitive exams," said Jubran Siddique, CEO of EdgeUp. "With this funding, we'll be able to reach more institutions and impact millions of students across India."

The round saw participation from several notable angel investors and education sector veterans, highlighting the industry's confidence in EdgeUp's innovative approach to personalized learning.`,
      featured: true
    },
    {
      id: '2',
      title: 'EdgeUp Partners with Leading UPSC Coaching Institutes',
      date: 'March 1, 2024',
      author: 'Marketing Team',
      category: 'Partnerships',
      image: 'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1600',
      summary: 'Strategic partnerships with top coaching institutes mark a significant milestone in EdgeUp\'s mission to revolutionize UPSC preparation through AI-powered personalization.',
      content: `EdgeUp today announced partnerships with several leading UPSC coaching institutes across Delhi, Mumbai, and Bangalore. These partnerships will bring EdgeUp's AI-powered learning platform to thousands of UPSC aspirants.

The collaboration will enable these institutes to offer personalized learning experiences to their students, leveraging EdgeUp's advanced psychometric profiling and adaptive testing capabilities.

"Our partnership with these prestigious institutes marks a significant step in our journey," said Khalid Mohamed, Chairman of EdgeUp. "Together, we're setting new standards in UPSC preparation."

Initial results from pilot programs show significant improvements in student engagement and test scores, with some institutes reporting up to 30% better results in mock tests.`,
      featured: false
    },
    {
      id: '3',
      title: 'AI in Education: The Future is Here',
      date: 'February 20, 2024',
      author: 'Jubran Siddique',
      category: 'Insights',
      image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1600',
      summary: 'Exploring how artificial intelligence is reshaping the educational landscape and what it means for students and institutions.',
      content: `The integration of artificial intelligence in education represents one of the most significant shifts in how we approach learning and teaching. As we stand at the forefront of this revolution, it's important to understand both the opportunities and challenges that lie ahead.

AI-powered educational platforms are not just about automation; they're about creating more human, more personalized learning experiences. By understanding each student's unique learning patterns, strengths, and areas for improvement, AI can help educators provide targeted support that was previously impossible at scale.

At EdgeUp, we've seen firsthand how our PASCO framework can transform learning outcomes. Students who previously struggled with traditional one-size-fits-all approaches are now thriving with personalized learning paths that adapt to their individual needs.`,
      featured: false
    }
  ];

  const resources = [
    {
      title: 'EdgeUp Brand Guidelines',
      description: 'Complete brand guidelines including logos, colors, and typography',
      type: 'PDF',
      size: '2.4 MB'
    },
    {
      title: 'Product Screenshots',
      description: 'High-resolution screenshots of the EdgeUp platform',
      type: 'ZIP',
      size: '15.2 MB'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key facts, figures, and company information',
      type: 'PDF',
      size: '1.1 MB'
    }
  ];

  return (
    <main className="pt-16 overflow-hidden">
      {/* Hero Section - Gridly Style */}
      <section className="section-padding bg-gradient-light relative">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#094d88]/10 to-[#10ac8b]/10 rounded-full text-[#094d88] text-sm font-medium mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-[#10ac8b] rounded-full mr-2 animate-pulse"></span>
              Latest News & Updates
            </div>
            
            <h1 className="heading-xl animate-fade-in-up delay-200">
              News & Media
            </h1>
            
            <p className="text-xl text-muted mt-6 animate-fade-in-up delay-300">
              Stay updated with the latest developments at EdgeUp as we transform
              the future of education through AI innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article - Gridly Style */}
      <IntersectionObserver>
        <section className="section-padding bg-white">
          <div className="container-custom">
            {newsItems.filter(item => item.featured).map((item) => (
              <div key={item.id} className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 text-sm text-muted">
                        <span className="bg-[#10ac8b] text-white px-3 py-1 rounded-full text-xs font-medium">
                          {item.category}
                        </span>
                        <div className="flex items-center space-x-2">
                          <Calendar size={14} />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User size={14} />
                          <span>{item.author}</span>
                        </div>
                      </div>
                      
                      <h2 className="heading-lg">{item.title}</h2>
                      <p className="text-xl text-muted">{item.summary}</p>
                    </div>

                    <button className="btn-primary group">
                      Read Full Article
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  <div className="relative">
                    <div className="news-card hover-lift">
                      <img
                        className="w-full h-80 object-cover rounded-xl"
                        src={item.image}
                        alt={item.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end p-6">
                        <span className="text-white font-semibold text-lg">Featured Story</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </IntersectionObserver>

      {/* News Grid - Gridly Style */}
      <IntersectionObserver>
        <section className="section-padding bg-gradient-blue-light">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Latest Articles</h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                Insights, updates, and stories from the EdgeUp team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.filter(item => !item.featured).map((item, index) => (
                <article key={item.id} className="news-card hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="image-hover-zoom">
                    <img
                      className="w-full h-48 object-cover"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted mb-3">
                      <span className="bg-[#094d88] text-white px-2 py-1 rounded text-xs font-medium">
                        {item.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">{item.title}</h3>
                    <p className="text-muted mb-4 line-clamp-3">{item.summary}</p>
                    
                    <button className="inline-flex items-center text-[#094d88] font-medium hover:text-[#10ac8b] transition-colors group">
                      Read more
                      <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Media Kit Section - Gridly Style */}
      <IntersectionObserver>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Media Kit & Resources</h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                Download our media kit for brand assets, company information, and press materials.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-teal-light p-8 rounded-xl">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#094d88] mb-2">EdgeUp Press Kit 2024</h3>
                      <p className="text-muted">
                        Complete media package including logos, brand guidelines, product screenshots, and company information.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {resources.map((resource, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div>
                            <div className="font-medium text-sm">{resource.title}</div>
                            <div className="text-xs text-muted">{resource.description}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-muted">{resource.type}</div>
                            <div className="text-xs text-muted">{resource.size}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="btn-primary w-full group">
                      <Download size={20} className="mr-2" />
                      Download Complete Kit
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Press Contact</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="font-medium">Priya Sharma</div>
                        <div className="text-muted text-sm">Head of Communications</div>
                      </div>
                      <div className="space-y-2">
                        <a 
                          href="mailto:press@edgeup.ai" 
                          className="block text-[#094d88] hover:text-[#10ac8b] transition-colors"
                        >
                          press@edgeup.ai
                        </a>
                        <a 
                          href="tel:+91-44-4500-2700" 
                          className="block text-[#094d88] hover:text-[#10ac8b] transition-colors"
                        >
                          +91-44-4500-2700
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted">Founded:</span>
                        <span className="font-medium">2022</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Headquarters:</span>
                        <span className="font-medium">Chennai, India</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Funding:</span>
                        <span className="font-medium">₹8 Cr Seed</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted">Employees:</span>
                        <span className="font-medium">135+</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
                    <div className="flex space-x-3">
                      <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#094d88] hover:text-white transition-colors">
                        <span className="text-sm font-bold">Li</span>
                      </a>
                      <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#094d88] hover:text-white transition-colors">
                        <span className="text-sm font-bold">Tw</span>
                      </a>
                      <a href="#" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#094d88] hover:text-white transition-colors">
                        <span className="text-sm font-bold">Ig</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
                Want to Learn More About EdgeUp?
              </h2>
              <p className="text-xl text-white/90 mb-10 animate-fade-in-up delay-200">
                Schedule a demo to see how our AI-powered platform can transform learning at your institution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
                <Link
                  to="/contact?demo=true"
                  className="bg-white text-[#094d88] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#094d88] transition-all duration-300 hover:scale-105"
                >
                  Contact Press Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>
    </main>
  );
};

export default NewsPage;