import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Twitter, 
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Award,
  TrendingUp,
  Calendar,
  MapPin
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import IntersectionObserver from '../components/common/IntersectionObserver';
import AnimatedCounter from '../components/common/AnimatedCounter';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About EdgeUp - Our Story and Mission";
  }, []);

  const { getContentBlocks } = useCMS();
  const aboutPageBlocks = getContentBlocks('about');

  const stats = [
    { number: 135, suffix: '+', label: 'Team Members', icon: Users },
    { number: 8, suffix: ' Cr', label: 'Funding Raised', icon: TrendingUp },
    { number: 150, suffix: '+', label: 'Partner Institutions', icon: Target },
    { number: 95, suffix: '%', label: 'Client Satisfaction', icon: Award }
  ];

  const teamMembers = [
    {
      name: "Jubran Siddique",
      position: "Chief Executive Officer",
      bio: "Former Head of AI at a leading EdTech company, Jubran brings deep expertise in machine learning and educational psychology.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjE2Wy3ZAA_uaEXnz5pvYbmGpxVOhv2q3mg&s",
      linkedin: "https://linkedin.com/in/jubran-siddique",
      twitter: "https://twitter.com/jubransiddique"
    },
    {
      name: "Khalid Mohamed",
      position: "Chairman",
      bio: "With 20+ years in education technology, Khalid has helped scale multiple EdTech ventures across Asia.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFAafycikw0qg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1681290083962?e=1754524800&v=beta&t=mI399UEUgknOinTlsXcZYno3lrkaPnVu_mnh9Bi_D_8",
      linkedin: "https://linkedin.com/in/khalid-mohamed",
      twitter: "https://twitter.com/khalidmohamed"
    }
  ];

  const milestones = [
    {
      year: "2022",
      title: "The Beginning",
      description: "EdgeUp was founded with a vision to make education more human, precise, and learner-centric."
    },
    {
      year: "2023",
      title: "First Partnerships",
      description: "Launched successful pilot programs with leading coaching institutes across India."
    },
    {
      year: "2024",
      title: "Seed Funding",
      description: "Secured ₹8 Cr in seed funding from Enlighten Capital and other leading investors."
    },
    {
      year: "2025",
      title: "Expansion",
      description: "Expanding our reach to serve more institutions and learners across India."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in educational technology.",
      icon: "🚀"
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do, from product development to customer service.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of working together to achieve extraordinary results.",
      icon: "🤝"
    },
    {
      title: "Impact",
      description: "We measure our success by the positive impact we have on students and educators.",
      icon: "📈"
    }
  ];

  return (
    <main className="pt-16 overflow-hidden">
      {/* Hero Section - Gridly Style */}
      <section className="section-padding bg-gradient-light relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#094d88]/10 to-[#10ac8b]/10 rounded-full text-[#094d88] text-sm font-medium animate-fade-in-up">
                  <span className="w-2 h-2 bg-[#10ac8b] rounded-full mr-2 animate-pulse"></span>
                  About EdgeUp
                </div>
                
                <h1 className="heading-xl animate-fade-in-up delay-200">
                  Making Education More Human Through AI
                </h1>
                
                <p className="text-xl text-muted leading-relaxed animate-fade-in-up delay-300">
                  We are building the future of personalized learning, helping institutions 
                  deliver better outcomes through AI-powered precision education.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
                <Link
                  to="/contact?demo=true"
                  className="btn-primary group"
                >
                  Join Our Mission
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/news"
                  className="btn-secondary group"
                >
                  Our Story
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Stats Grid - Gridly Style */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in-right delay-400">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg mb-3 mx-auto">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#094d88] mb-1">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted text-center">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Gridly Style */}
      <IntersectionObserver>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="heading-lg">Our Mission & Vision</h2>
                  <p className="text-xl text-muted">
                    To empower educational institutions with AI-driven tools that make learning 
                    more personalized, effective, and accessible for every student.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Personalization at Scale</h3>
                      <p className="text-muted">Using AI to understand and adapt to each learner's unique needs and learning style.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Data-Driven Insights</h3>
                      <p className="text-muted">Empowering educators with actionable insights to make informed decisions.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#094d88] to-[#10ac8b] rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Accessible Excellence</h3>
                      <p className="text-muted">Making quality education more accessible through technology and innovation.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-6 hover-lift">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Team collaboration"
                    className="w-full h-80 object-cover rounded-lg mb-4"
                  />
                  <div className="text-center">
                    <h4 className="font-semibold text-lg mb-2">Digital Marketing Strategy With EdgeUp</h4>
                    <p className="text-muted text-sm">Transforming education through innovative AI solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Values Section - Gridly Style */}
      <IntersectionObserver>
        <section className="section-padding bg-gradient-blue-light">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Our Values</h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                The principles that guide everything we do at EdgeUp.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="feature-card text-center hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Team Section - Gridly Style */}
      <IntersectionObserver>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Leadership Team</h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                Meet the visionaries behind EdgeUp's mission to transform education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-[#094d88] font-medium">{member.position}</p>
                      </div>
                    </div>
                    <p className="text-muted mb-4">{member.bio}</p>
                    <div className="flex space-x-3">
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-[#094d88] hover:bg-blue-50 transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a 
                        href={member.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-[#094d88] hover:bg-blue-50 transition-colors"
                      >
                        <Twitter size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Journey Timeline - Gridly Style */}
      <IntersectionObserver>
        <section className="section-padding bg-gradient-teal-light">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Our Journey</h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                From idea to impact: The story of EdgeUp's growth and evolution.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="timeline">
                {milestones.map((milestone, index) => (
                  <div key={index} className="timeline-item animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="timeline-dot"></div>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-sm hover-lift">
                        <div className="text-[#10ac8b] font-bold text-lg mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                        <p className="text-muted">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </IntersectionObserver>

      {/* Investment Section - Gridly Style */}
      <IntersectionObserver>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="heading-lg">Backed by Leading Investors</h2>
                  <p className="text-xl text-muted">
                    We are proud to be supported by investors who share our vision for 
                    the future of education. Our recent ₹8 Cr seed funding round was 
                    led by Enlighten Capital, with participation from industry veterans 
                    and education experts.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-5 w-5 text-[#10ac8b]" />
                    <span className="text-muted">Funding completed in March 2024</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-5 w-5 text-[#10ac8b]" />
                    <span className="text-muted">Based in Chennai, India</span>
                  </div>
                </div>

                <Link
                  to="/news"
                  className="inline-flex items-center text-[#094d88] font-medium hover:text-[#10ac8b] transition-colors"
                >
                  Read about our funding news
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-blue-light p-8 rounded-xl">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">Lead Investor</div>
                    <div className="text-2xl font-bold text-[#094d88] mb-4">Enlighten Capital</div>
                    <blockquote className="text-muted italic">
                      "EdgeUp's innovative approach to personalized learning has the potential 
                      to revolutionize education in India."
                    </blockquote>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#10ac8b] mb-2">₹8 Cr</div>
                    <div className="text-muted">Seed Funding Raised</div>
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
                Ready to Transform Education at Your Institution?
              </h2>
              <p className="text-xl text-white/90 mb-10 animate-fade-in-up delay-200">
                Join the growing network of forward-thinking institutions using EdgeUp to deliver personalized learning experiences.
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

export default AboutPage;